import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
import { fetch, Method } from "../service/api";
import firebase from 'firebase'
import lodash from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {},
    isAuthenticated: false,
    favourites: [],
    favouritesSynced: false
  },
  mutations: {
    setUser(state, value) {
      state.user = value
      state.isAuthenticated = true
    },
    setFavourites(state, value) {
      state.favourites = value
      state.favouritesSynced = true
    },
    addFavourite(state, value) {
      if(!lodash.find(state.favourites, {asteroid_id: value.asteroid_id})) {
        state.favourites.push(value as never)
      }

    },
    removeFavourite(state, value) {
      const asteroids = [...state.favourites]
      lodash.remove(asteroids, (asteroid: any) => {
        return asteroid.asteroid_id === value.asteroid_id
      })
      state.favourites = asteroids
    }
  },
  actions: {
    async login({ dispatch }, form) {
      return new Promise((resolve, reject) => {
        fb.auth.signInWithEmailAndPassword(form.email, form.password).then(({ user }) => {
          dispatch('fetchUser', user)
          resolve();
        }).catch(error => {
          reject(error)
        })
      })
    },
    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      await fb.usersCollection.doc(user?.uid).set({
        name: form.name
      })
      dispatch('fetchUser', user)
    },
    async fetchUser({ commit, dispatch }, user) {
      const profile = await fb.usersCollection.doc(user.uid).get()
      commit('setUser', profile.data())
      dispatch('syncFavourites')
      router.push('/')
    },
    async syncFavourites({ commit }) {
      const idToken = await firebase.auth().currentUser?.getIdToken(true)
      
      const response = await fetch({
        url: "/favourite",
        method: Method.GET,
        headers: {
          'AuthToken': idToken
        }
      });
      commit('setFavourites', response)
    },
    async addFavourite({ commit }, asteroid) {
      commit('addFavourite', asteroid)
    },
    async removeFavourite({ commit }, asteroid) {
      commit('removeFavourite', asteroid)
    },
  },
  getters: {
    isLoggedIn: state => state.user,
    favourites: state => state.favourites,
    favouritesSynced: state => state.favouritesSynced
  },
  modules: {
  }
})
