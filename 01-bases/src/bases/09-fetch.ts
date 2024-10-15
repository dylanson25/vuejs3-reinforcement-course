import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "";
const apiUrl = "https://api.giphy.com/v1/gifs/";

fetch(`${apiUrl}random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }: GIFResponse) => {
    console.log(data.images.downsized.url);
  })
  .catch((err) => console.log(err));
