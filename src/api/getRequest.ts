import axios from 'axios';

const getRequest = async (url: string) => {
  return axios({
    method: 'get',
    url: url,
  })
    .catch((error) => {
      console.log(error);
      return error;
    })
    .then((response) => {
      const json = response.data;
      return json;
    });
};

export default getRequest;
