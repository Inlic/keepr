<template>
  <div class="container-fluid">
    <div class="row card">
      <div class="col-4"><img :src="profile.picture" /></div>
      <h1>{{ profile.name }}</h1>
      <h2>Vaults: {{ vaults.length }}</h2>
      <h2>Keeps: {{ keeps.length }}</h2>
    </div>
    <div class="row card">
      <div class="card col-12">
        <h2>
          Vaults
          <i
            class="fa fa-plus"
            aria-hidden="true"
            data-toggle="modal"
            :data-target="'#' + createVaultModal"
          ></i>
        </h2>
      </div>
      <div class="card-columns">
        <vault-tile-component
          v-for="vault in vaults"
          :key="vault.id"
          :vaultTileProp="vault"
        />
      </div>
      <div class="card col-12">
        <h2>
          Keeps
          <i
            class="fa fa-plus"
            aria-hidden="true"
            data-toggle="modal"
            :data-target="'#' + createKeepModal"
          ></i>
        </h2>
      </div>
      <div class="card-columns">
        <keep-tile-component
          v-for="keep in keeps"
          :key="keep.id"
          :keepTileProp="keep"
        />
      </div>
    </div>
    <modal-component :id="createVaultModal" color="bg-danger">
      <template v-slot:body>
        <new-vault-form-component />
      </template>
    </modal-component>
    <modal-component :id="createKeepModal" color="bg-danger">
      <template v-slot:body>
        <new-keep-form-component />
      </template>
    </modal-component>
  </div>
</template>

<script>
import keepTileComponent from "../components/KeepTileComponent";
import vaultTileComponent from "../components/VaultTileComponent";
import modalComponent from "../components/ModalComponent";
import newKeepFormComponent from "../components/NewKeepFormComponent";
import newVaultFormComponent from "../components/NewVaultFormComponent";
export default {
  name: "Profile",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getSearchedProfile", this.$route.params.profileId);
    this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
    this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
  },
  watch: {
    myprofile: function (newVal, oldVal) {
      this.$store.dispatch("getSearchedProfile", this.$route.params.profileId);
      this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
      this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
      console.log("new" + newVal + "| old" + oldVal);
    },
    deep: true,
    immediate: true,
  },
  computed: {
    createKeepModal() {
      return "modal" + "createKeep";
    },
    createVaultModal() {
      return "modal" + "createVault";
    },
    profile() {
      return this.$store.state.searchedProfile;
    },
    vaults() {
      return this.$store.state.profileVaults;
    },
    keeps() {
      return this.$store.state.profileKeeps;
    },
    myprofile() {
      return this.$store.state.profile;
    },
  },
  components: {
    keepTileComponent,
    vaultTileComponent,
    newKeepFormComponent,
    newVaultFormComponent,
    modalComponent,
  },
};
</script>

<style>
</style>