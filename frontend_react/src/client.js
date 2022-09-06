import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'jaq2xfyo',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'sk14xcosNQuqim5HGfwyp1UC8iLLF1WOtznUqPzNJ2VOBYSZUWXiDUYuNq3K9d4sVxNOzjCYL8Ggb8lFkEFozBDkDTDPt10vR8jFcJMakDz3GJO6cezjLQUpZp9vtyTgOZdsimLJdD9rA4zeXppg0B5ibDKHGo4yI57hOyNRoUtmUAtJe6fG',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);