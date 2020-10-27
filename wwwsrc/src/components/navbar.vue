<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h1 class="border border-dark p-1">K</h1>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <div class="d-flex align-items-md-center w-100">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.name == 'Home' }">
            <router-link
              id="nav-home-link"
              :to="{ name: 'Home' }"
              class="nav-link text-light"
              >Home
            </router-link>
          </li>
          <li
            class="nav-item"
            v-if="$auth.isAuthenticated"
            :class="{ active: $route.name == 'Profile' }"
          >
            <router-link
              id="nav-profile-link"
              class="nav-link text-light"
              :to="{ name: 'Profile', params: { profileId: profile.id } }"
            >
              Profile</router-link
            >
          </li>
        </ul>
      </div>
      <span class="navbar-text">
        <!-- Consider changing this to a profile picture -->
        <button
          class="btn btn-success"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-secondary" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
      }
    },
    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style></style>
