import { API_KEY } from "./Constants/constants";

export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;

export const trending = `discover/tv?api_key=${API_KEY}&with_networks= `;


export const documentary = `discover/tv?api_key=${API_KEY}&with_networks=99`;
