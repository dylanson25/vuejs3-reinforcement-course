import axios, { AxiosResponse } from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "";
const apiUrl = "https://api.giphy.com/v1/gifs/";

const giphyApi = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: apiKey,
  },
});

// export default giphyApi;

// giphyApi.get<GIFResponse>('/random')
//   .then( resp => console.log(resp.data.data.images.downsized_large.url))
//   .catch( err => console.log(err));
