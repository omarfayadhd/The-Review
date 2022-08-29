import { API_KEY } from "./Constants/constants";

export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;

export const trending = `discover/tv?api_key=${API_KEY}&with_networks=`;

export const adventure = `discover/tv?api_key=${API_KEY}&with_networks=12`;

export const comedy = `discover/tv?api_key=${API_KEY}&with_networks=35`;

export const horror = `discover/tv?api_key=${API_KEY}&with_networks=27`;

export const romance = `discover/tv?api_key=${API_KEY}&with_networks=10749`;

export const documentary = `discover/tv?api_key=${API_KEY}&with_networks=99`;
