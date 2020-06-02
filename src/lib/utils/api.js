import axios from 'axios';
import ls from 'local-storage';

const callApi = async (method, url, data) => {
  const { email, password } = data;
  // console.log('>>>>>>>>>>', email);
  // const URL = `https://express-training.herokuapp.com/api${url}`;

  const URL = process.env.REACT_APP_BASE_URL + url;
  await axios({
    method,
    url: URL,
    data: {
      password,
      email,
    },
  }).then((response) => {
    ls.set('token', response.data.data);
    // console.log(ls.get('token'));
  }).catch(() =>
    // console.log('Inside catch');
    ({ status: 'error', message: 'This is a error message' }));
};
export default callApi;
