import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    keeps: [],
    vaults: [],
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
    setVaults(state, vaults) {
      state.vaults = vaults;
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
    async getVaults({ commit }) {
      try {
        let res = await api.get("vaults")
        commit("setVaults", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async setActiveKeep({ commit }, keep) {
      try {
        keep.views += 1
        await api.put("keeps/" + keep.id + "/stats", keep)
        commit("setActiveKeep", keep)
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
    async getVault({ commit }, vaultid) {
      try {
        let res = await api.get("vaults/" + vaultid)
        commit("setActiveVault", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createVault({ dispatch }, vaultData) {
      try {
        let res = await api.post("vaults", vaultData)
        dispatch("getProfileVaults", res.data.creatorId)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteVault({ commit }, id) {
      try {
        await api.delete("vaults/" + id)
        commit("setProfileVaults", this.state.profileVaults.filter(v => v.id != id))
      } catch (error) {
        console.error(error);
      }
    },
    async createKeep({ dispatch }, keepData) {
      try {
        let res = await api.post("keeps", keepData)
        dispatch("getProfileKeeps", res.data.creatorId)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteKeep({ commit }, id) {
      try {
        await api.delete("keeps/" + id)
        commit("setKeeps", this.state.keeps.filter(k => k.id != id))
        commit("setProfileKeeps", this.state.profileKeeps.filter(k => k.id != id))
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
    async createVaultKeep({ commit }, vaultKeep) {
      try {
        await api.post("vaultkeeps", vaultKeep)
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
