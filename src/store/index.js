import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2/all';
//const url = 'https://aimastering.com/api/api_spec.json';
//  88244878  http://www.omdbapi.com/?apikey=88244878&s=imdbID
//const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib?api_key=a8160684-5536-45d0-abed-e594be492ab9';
//const url = 'https://jsonplaceholder.typicode.com/albums';
//const url = 'https://jsonplaceholder.typicode.com/photos';

const url2 = 'https://restcountries.eu/rest/v2/capital/all';


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    teler: 0,
    laadStatus: 'notloading',
    landen: [],
    errors: []
  },

  mutations: {
    SET_LAAD_STATUS(state, payload){
      state.laadStatus = payload;
    },
    SET_LANDEN(state, payload){
      state.landen = payload;
    },
    WIS_LANDEN(state){
      state.landen = []
    },
    ADD_ERROR(state, payload){
      state.errors = [...state.errors, payload]
    }
  },



  actions: {

    fechLanden(context) {
      context.commit('SET_LAAD_STATUS', 'loading');
      axios.get(url)
      .then(res => {
        context.commit('SET_LAAD_STATUS', 'notloading');
        context.commit('SET_LANDEN', res.data);
      })
      .catch(err => {
        context.commit('SET_LAAD_STATUS', 'notloading');
        context.commit('SET_LANDEN', []);
        context.commit('ADD_ERROR', err);
      })
    },

    wisLand(context){
      context.commit('WIS_LANDEN');
    },

    fechCity(context) {
      context.commit('SET_LAAD_STATUS', 'loading');
      axios.get(url2)
      .then(res => {
        context.commit('SET_LAAD_STATUS', 'notloading');
        context.commit('SET_LANDEN', res.data);
      })
      .catch(err => {
        context.commit('SET_LAAD_STATUS', 'notloading');
        context.commit('SET_LANDEN', []);
        context.commit('ADD_ERROR', err);
      })
    },

    wisCity(context){
      context.commit('WIS_LANDEN');
    },

  },



  getters: {
    getLand: (state) => (name) => {
      return state.landen.find(c => c.name === name)
    }
  },



  modules: {
  }
})
