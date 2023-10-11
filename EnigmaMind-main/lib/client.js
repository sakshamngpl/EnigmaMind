import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'u50umfh8',
    dataset: 'production',
    apiVersion: '2023-06-15',
    useCdn: true,
})
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
