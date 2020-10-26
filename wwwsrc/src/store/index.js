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
    profileKeeps: [],
    activeVault: {},
    vaultKeeps: [],
    activeKeep: {}
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
    },
    setActiveVault(state, vault) {
      state.activeVault = vault
    },
    setActiveVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
    setActiveKeep(state, keep) {
      state.activeKeep = keep;
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
    setActiveKeep({ commit }, keep) {
      commit("setActiveKeep", keep)
    },
    async getProfileKeeps({ commit }, id) {
      try {
        let res = await api.get("profiles/" + id + "/keeps")
        commit("setProfileKeeps", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getVault({ commit }, vaultid) {
      try {
        let res = await api.get("vaults/" + vaultid)
        commit("setActiveVault", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createVault({ commit, dispatch }, vaultData) {
      try {
        let res = await api.post("vaults", vaultData)
        dispatch("getProfileVaults", res.data.creatorId)
      } catch (error) {
        console.error(error);
      }
    },
    async getVaultKeeps({ commit }, vaultid) {
      try {
        let res = await api.get("vaults/" + vaultid + "/keeps")
        commit("setActiveVaultKeeps", res.data)
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
