import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    keeps: [],
    searchedProfile: {},
    profileVaults: [],
    profileKeeps: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setSearchedProfile(state, searchedProfile) {
      state.searchedProfile = searchedProfile;
    },
    setKeeps(state, keeps) {
      state.keeps = keeps;
    },
    setProfileKeeps(state, profileKeeps) {
      state.profileKeeps = profileKeeps;
    },
    setProfileVaults(state, profileVaults) {
      state.profileVaults = profileVaults;
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profiles");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getSearchedProfile({ commit }, id) {
      try {
        let res = await api.get("profiles/" + id)
        commit("setSearchedProfile", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getKeeps({ commit }) {
      try {
        let res = await api.get("keeps")
        commit("setKeeps", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getProfileKeeps({ commit }, id) {
      try {
        let res = await api.get("profiles/" + id + "/keeps")
        commit("setProfileKeeps", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getProfileVaults({ commit }, id) {
      try {
        let res = await api.get("profiles/" + id + "/vaults")
        commit("setProfileVaults", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
});
