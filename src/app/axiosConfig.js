import Axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/api'

const axiosInstance = Axios.create({
    baseURL: BASE_URL,
    params: {
        'apikey': API_KEY
    }
  });

export default axiosInstance;