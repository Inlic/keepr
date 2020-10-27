<template>
  <div class="container-fluid">
    <div class="row">
      <h1>{{ vault.name }}</h1>
      <h3>Keeps: {{ keeps.length }}</h3>
    </div>
    <div class="row">
      <keep-tile-component
        v-for="keep in keeps"
        :key="keep.id"
        :keepTileProp="keep"
        :vaultTileProp="vault"
      />
    </div>
  </div>
</template>

<script>
import keepTileComponent from "../components/KeepTileComponent";
export default {
  name: "VaultDetails",
  mounted() {
    this.$store.dispatch("getVault", Number(this.$route.params.vaultId));
    this.$store.dispatch("getVaultKeeps", Number(this.$route.params.vaultId));
  },
  watch: {
    myprofile: function (newVal, oldVal) {
      this.$store.dispatch("getVault", Number(this.$route.params.vaultId));
      this.$store.dispatch("getVaultKeeps", Number(this.$route.params.vaultId));
    },
    deep: true,
    immediate: true,
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    },
    keeps() {
      return this.$store.state.vaultKeeps;
    },
    myprofile() {
      return this.$store.state.profile;
    },
  },
  components: { keepTileComponent },
};
</script>

<style>
</style>