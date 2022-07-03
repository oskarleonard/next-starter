import axios from 'axios';
import HttpApiCallError from './HttpApiCallError';
//const controller = new AbortController();

export default function httpRequest(requestConfig = {}) {
  return axios({ ...requestConfig /* signal: controller.signal*/ }).then(
    (response) => {
      return response.data;
    },
    (responseWithError) => {
      const data = responseWithError?.response?.data;
      const errorMessage =
        responseWithError.statusText || responseWithError.message;

      const config = responseWithError.config;

      const metadata = {
        data,
        status: responseWithError.status,
        method: config.method,
        url: config.url,
      };

      throw new HttpApiCallError(errorMessage, metadata);
    }
  );
}
