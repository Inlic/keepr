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
      />
    </div>
  </div>
</template>

<script>
import keepTileComponent from "../components/KeepTileComponent";
export default {
  name: "VaultDetails",
  mounted() {
    this.$store.dispatch("getVault", this.$route.params.vaultId);
    this.$store.dispatch("getVaultKeeps", this.$route.params.vaultId);
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    },
    keeps() {
      return this.$store.state.vaultKeeps;
    },
  },
  components: { keepTileComponent },
};
</script>

<style>
</style>