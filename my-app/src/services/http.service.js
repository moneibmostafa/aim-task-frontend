import axios from "axios";

export const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

axios.interceptors.response.use(null, async function(error) {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  if (expectedError) {
    error = error.response.data; // to return error obj with {message, error if exist}
  } 
  else {
    error = { message: 'Technical Problem! Please try again later or contact us!' };
  }

  return Promise.reject(error);
});
