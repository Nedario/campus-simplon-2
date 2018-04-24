/*jshint esversion : 6*/
import axios from 'axios';

export const products = {
  namespaced: true,
  state: {
    category: [],
  },
  actions: {
    getCategory({ commit, state }) { // destructuration du param implicte context.commit
      axios({
        method: "get",
        url: "/product/category",
      }).then(response => {
        console.log("get prod category", response);
        commit("category", response.data);
      })
      .catch(error => {
        console.log("error @ store/users/getAll()");
        console.error(error);
      });
    },
  },
  mutations: {
    category(state, category) {
      state.category = category;
    },
  },
  getters: {
  }
};
