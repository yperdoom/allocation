import axios from "axios";

import {
  API_BASE_URL,
  API_TOKEN
} from '../../config/environments/local.env';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'api-version': 4,
    'client-type': "panel",
    Authorization: `Bearer ${API_TOKEN}`
  }
})
