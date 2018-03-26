/* jshint esversion : 6 */
import axios from 'axios';

export const users = {
  namespaced: true,
  state: {
    user: null,
    userId: null,
    userToken: null,
    users: [],
  },
  actions: { // les actions sont réservées aux process asynchrones
    deleteUser({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "delete",
          url: `/user/${id}`
        }).then(response => {
          console.log("success axios");
          resolve(response);
        })
        .catch(error => {
          console.log("error axios");
          console.log(error);
          reject(error);
        });
      });
    },
    getAll({ commit, state }) { // destructuration du param implicte context.commit
      axios({
        method: "get",
        url: "/user",
      }).then(response => {
        state.users = response.data;
      })
      .catch(error => {
        console.log("axios store/users/getAll()");
        console.error(error);
        state.users = [];
      });
    },
    get({ commit, state }, id) {
      const url = id ? `/user/${id}` : "user/";
      axios({
        method: "get",
        url: url,
      }).then(response => {
        state.user = response.data[0];
      })
      .catch(error => {
        console.log("axios store/users/get()");
        console.error(error);
      });
    },
    patchAvatar({ commit, state }, payload) {
      console.log("avatar payload");
      console.log(payload);
      for(let pair of payload.entries()) {
         console.log(pair[0]+ ', '+ pair[1]);
      }
      axios({
        method: "patch",
        url: "/avatar",
        data: payload,
        onUploadProgress: function (evt) {
          // Do whatever you want with the native progress event
          let percentLoaded = Math.floor((evt.loaded * 100) / evt.total);
          console.log(percentLoaded + "%");
        },
      });
    },
    register({commit, dispatch, state}, authData) {
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: "/user",
          data: {
            mail: authData.mail,
            password: authData.password,
          }
        })
        .then(response => {
          commit("auth", {
            userId: response.data.insertId,
            userToken: response.data.token,
          });

          delete authData.password;
          authData.id = response.data.insertId;
          commit("storeUser", authData);
          resolve(response);

        }).catch(error => {
          reject(error.response.data.message);
        });
      });
    },
    login({commit, dispatch, state}, authData) {
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: "/login",
          data: {
            mail: authData.mail,
            password: authData.password
          }
        }).then(response => {
          commit("auth", {
            userId: response.data.user.id,
            userToken: response.data.token,
          });
          commit("storeUser", response.data.user);
          resolve(response);

        }).catch(error => {
          reject(error.response.data.message);
        });
      });
    },
    logout({commit, state}) {
    },
  },
  getters: {
    all(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: { // les mutations sont réservées aux actions synchrones
    auth(state, data) {
      state.userId = data.id;
      state.userToken = data.token;
    },
    storeUser(state, user) {
      state.user = user;
    },
  }

};
