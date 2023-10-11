import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import CommonNav from "@/components/CommonNav";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import FooterSmall from "@/components/Footer/FooterSmall";

export default function Home() {
  const result = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      // const response = await fetch("/api/generate", {
      const response = await fetch(
        "https://moobidesk-backend.onrender.com/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data);
      const text = data.result.replace(/\n/g, "<br />");
      if (result.current) result.current.innerHTML = text;
      setPrompt("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <SEO
        title="Knowledge base"
        description="Our platform utilizes cutting-edge artificial intelligence technology to provide accurate and insightful information across a wide range of topics."
      />

      <CommonNav hideAtXL={false} />
      {/* <FullNavbar /> */}

      <div className="2xl:container mx-auto px-6 py-6 lg:px-24 lg:py-12 min-h-[calc(100vh-218px-78px)] lg:min-h-[calc(100vh-104px-78px)]">
        <div className="flex flex-col justify-around lg:flex-row w-full space-y-12 lg:space-y-0 space-x-0 lg:space-x-8">
          <div className="flex flex-col items-start">
            <Player
              autoplay
              loop
              src="/animations/ai-logo.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-700">
              Ask me <br /> Anything!
            </h1>
            <p className="-mt-4 lg:mt-0 pt-6 flex items-center space-x-2">
              <svg
                className="flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
              </svg>
              <span>
                Still need help? <Link href="/request-demo">Chat to us.</Link>
              </span>
            </p>
          </div>

          <div className="flex-1 max-w-2xl">
            <form
              onSubmit={onSubmit}
              className="flex space-x-4 justify-between"
            >
              <input
                required
                className="px-4 py-3 rounded-xl w-full focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                type="text"
                name="prompt"
                placeholder="Enter your question here"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={() => onSubmit}
                className={`bg-purple-600 text-white p-2 pr-4 rounded-xl flex items-center space-x-2 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={loading}
              >
                <span className="sr-only">Send</span>
                {/* Loading and Send SVG */}
                <div className="h-6 w-6">
                  {loading ? (
                    <svg
                      className="motion-reduce:hidden animate-spin mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"></path>
                    </svg>
                  )}
                </div>
                <span className="hidden lg:block">Send</span>
              </button>
            </form>
            <div
              className="p-2 pt-8 text-lg font-semibold text-slate-600 max-w-2xl"
              ref={result}
            >
              {loading ?? "Loading..."}
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
