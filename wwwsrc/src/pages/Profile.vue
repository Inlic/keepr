<template>
  <div class="container-fluid">
    <div class="row">
      <img :src="profile.picture" />
      <h1>{{ profile.name }}</h1>

      <h2>Vaults: {{ vaults.length }}</h2>
      <h2>Keeps: {{ keeps.length }}</h2>
    </div>
    <div class="row">
      <h2>Vaults</h2>
      <vault-tile-component
        v-for="vault in vaults"
        :key="vault.id"
        :vaultTileProp="vault"
      />
    </div>
    <div class="row">
      <h2>Keeps</h2>
      <keep-tile-component
        v-for="keep in keeps"
        :key="keep.id"
        :keepTileProp="keep"
      />
    </div>
  </div>
</template>

<script>
import keepTileComponent from "../components/KeepTileComponent";
import vaultTileComponent from "../components/VaultTileComponent";
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getSearchedProfile", this.$route.params.profileId);
    this.$store.dispatch("getProfileVaults", this.$route.params.profileId);
    this.$store.dispatch("getProfileKeeps", this.$route.params.profileId);
  },
  computed: {
    profile() {
      return this.$store.state.searchedProfile;
    },
    vaults() {
      return this.$store.state.profileVaults;
    },
    keeps() {
      return this.$store.state.profileKeeps;
    },
  },
  components: { keepTileComponent, vaultTileComponent },
};
</script>

<style>
</style>