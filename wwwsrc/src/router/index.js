import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue"
// @ts-ignore
import VaultDetails from "../pages/VaultDetails.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/vaultdetails",
    name: "VaultDetails",
    component: VaultDetails
  }

];

const router = new VueRouter({
  routes,
});

export default router;
