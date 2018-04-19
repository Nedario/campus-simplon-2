/* jshint esversion : 6 */
import Vue from "vue";
import axios from "axios";

axios.defaults.withCredentials = true;  // permet à axios de poster des cookies, default false
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.header.get.Accepts = "application/json";

axios.interceptors.request.use(config => {
  console.log("axios interceptors config");
  console.log(config);
  return config;
});

axios.interceptors.response.use(response => {
  console.log("axios interceptors response =>");
  console.log(response);
  return response;

}, error => {

    let originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) { // if the error is 401 and hasent already been retried
      console.warn("axios.config => 401 !");
    }
    else if (error.response.status === 404 && !originalRequest._retry) {
      console.warn("axios.config => 404 !");
    }
    else if (error.response.status === 409 && !originalRequest._retry) {
      console.warn("axios.config => 409 !");
    }

    console.error(error);
    console.error(error.config);
    console.error(error.response);

    return Promise.reject(error);
});

export default axios.defaults;
