from django.http import JsonResponse
import json
import os

from gpt_index import SimpleDirectoryReader, GPTListIndex, GPTSimpleVectorIndex, LLMPredictor, PromptHelper
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

DOCS_PATH = 'constants/docs'
INDEX_PATH = 'constants/index.json'


def construct_index(directory_path):
    max_input_size = 4096
    num_outputs = 512
    max_chunk_overlap = 20
    chunk_size_limit = 600

    prompt_helper = PromptHelper(
        max_input_size, num_outputs, max_chunk_overlap, chunk_size_limit=chunk_size_limit)

    llm_predictor = LLMPredictor(llm=ChatOpenAI(
        temperature=0.2, model_name="gpt-3.5-turbo", max_tokens=num_outputs))

    documents = SimpleDirectoryReader(directory_path).load_data()

    index = GPTSimpleVectorIndex(
        documents, llm_predictor=llm_predictor, prompt_helper=prompt_helper)

    index.save_to_disk(INDEX_PATH)

    return index


def chatbot(query):
    # CONSTRUCT A NEW INDEX
    # SHOULD BE RUN WHENEVER DOCS_PATH DATA IS UPDATED
    # index = construct_index(DOCS_PATH)

    # USE ALREADY BUILT INDEX FROM DISK
    index = GPTSimpleVectorIndex.load_from_disk(INDEX_PATH)
    
    # query = f'''
    #     Answer the following question only if it is possible to answer it with the given context information,
    #     otherwise say "Sorry, I cannot help with that.":
    #     {query}
    # '''

    response = index.query(
        query,
        # response_mode="compact"
    )
    return response.response

def ErrorReponse(message, status=400):
    return JsonResponse({
        'error': {
        'message': message
    }}, status=status)


def generate(request):
    if request.method == 'POST':
        try:
            if "OPENAI_API_KEY" not in os.environ:
                return JsonResponse({
                    'error': 'OPENAI_API_KEY not set in environment variables'
                })
            try:
                data = json.loads(request.body)
                if 'prompt' in data.keys() and data['prompt'].strip() != '':
                    result = chatbot(data['prompt'])
                    return JsonResponse({'result': result})
                else:
                    return ErrorReponse('Prompt is required')
            except json.JSONDecodeError:
                return ErrorReponse('Invalid JSON')
        except Exception as e:
            print(e.stack_trace)
            return ErrorReponse(str(e), status=500)
    else:
        return ErrorReponse('Invalid request method')
