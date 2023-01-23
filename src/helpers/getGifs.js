export const getGifs = async (category) => {
  const API_KEY = "oeA49TXdHuYQd6LI46JRud74sqzrMgfP";
  const imageLimit = 18;
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}}&api_key=${API_KEY}&limit=${imageLimit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
