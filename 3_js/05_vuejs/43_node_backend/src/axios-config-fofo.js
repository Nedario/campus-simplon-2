/* jshint esversion : 6 */
import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.header.get.Accepts = "application/json";

// axios.interceptors.request.use(config => {
//   console.log("axios interceptors config");
//   console.log(config);
//   return config;
// });


axios.interceptors.response.use(response => {
  console.log("axios interceptors response");
  console.log(response);
  return response;
}, function error(error) {
  return;
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) { // if the error is 401 and hasent already been retried
      console.warn("IN 401");
      console.error(error);
      originalRequest._retry = true; // now it can be retried
      return axios.post('/user/token', null).then(data => {
        // store.dispatch('authfalse');
        // store.dispatch('authtruth', data.data);
        // originalRequest.headers['Authorization'] = 'Bearer ' + store.state.token; // new header new token
        return axios(originalRequest); // retry the request that errored out
      }).catch(error => {
        console.error(response.message);
        // for (let i = 0; i < error.response.data.errors.length; i++) {
        //   if (error.response.data.errors[i] === 'TOKEN-EXPIRED') {
        //     // auth.logout();
        //     return;
        //   }
        // }
      });
    } // endif
    if (error.response.status === 404 && !originalRequest._retry) {
      alert('404')
      originalRequest._retry = true;
      window.location.href = '/';
      return;
    }
    // Do something with response error
    return Promise.reject(error);

});

export default axios.defaults;
