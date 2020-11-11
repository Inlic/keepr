<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12 col-md-2 text-center">
        <img class="vprofileimg" :src="profile.picture" />
      </div>
      <div class="col-12 col-md-10">
        <h2>{{ profile.name }}</h2>
        <h5>Vaults: {{ vaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <div class="row card border-0">
      <div class="card col-12 my-2 border-0">
        <h2>
          Vaults
          <i
            v-if="myprofile.name == profile.name"
            class="fa fa-plus"
            aria-hidden="true"
            data-toggle="modal"
            :data-target="'#' + createVaultModal"
          ></i>
        </h2>
      </div>
      <div class="card-columns">
        <vault-tile-component
          class="pointer"
          v-for="vault in vaults"
          :key="vault.id"
          :vaultTileProp="vault"
        />
      </div>
      <div class="card col-12 my-2 border-0">
        <h2>
          Keeps
          <i
            v-if="myprofile.name == profile.name"
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
    profile: function (newVal, oldVal) {
      this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
      this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
    },
    myprofile: function (newVal, oldVal) {
      this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
      this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
    },
    "$route.params.profileId": function (newVal, oldVal) {
      this.$store.dispatch("getSearchedProfile", this.$route.params.profileId);
      this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
      this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
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
.fa.fa-plus {
  color: var(--primary);
  cursor: pointer;
}
.vprofileimg {
  border-radius: 25px;
}
.pointer {
  cursor: pointer;
}
</style>