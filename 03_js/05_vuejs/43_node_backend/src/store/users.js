/* jshint esversion : 6 */
import axios from 'axios';

export const users = {
  namespaced: true,
  state: {
    user: null,
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
        console.log("getallusers", response);
        commit("users", response.data);
      })
      .catch(error => {
        console.log("error @ store/users/getAll()");
        console.error(error);
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
        // console.error(error);
      });
    },
    patchAvatar({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "patch",
          url: "/avatar",
          data: payload,
          onUploadProgress: function (evt) {
            // Do whatever you want with the native progress event
            let percentLoaded = Math.floor((evt.loaded * 100) / evt.total);
            console.log(percentLoaded + "%");
          },
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
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
        }).then(res => {
          // commit("auth", {
          //   userId: res.data.user.id,
          //   userToken: res.data.token,
          // });
          commit("storeUser", res.data.user);
          resolve(res);

        }).catch(error => {
          reject(error.response.data.message);
        });
      });
    },
    logout({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: "/logout"
        }).then(res => {
          commit("logout", res);
          resolve(res);

        }).catch(error => {
          reject("error au logout");
        });
      });
    },
  },
  getters: {
    all(state) {
      return state.users;
    },
    isAdmin(state) {
      return Boolean(state.user ? state.user.isAdmin : 0);
    },
    isLoggedIn(state) {
      return Boolean(state.user ? true : false);
    },
    current(state) {
      return state.user;
    },
  },
  mutations: { // les mutations sont réservées aux process synchrones
    auth(state, data) {
      state.userId = data.id;
      state.userToken = data.token;
    },
    logout(state, data) {
      state.user = null;
      state.users = [];
    },
    storeUser(state, user) {
      state.user = user;
    },
    users(state, users) {
      state.users = users;
    },
  }
};
