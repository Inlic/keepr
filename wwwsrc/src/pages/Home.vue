<template>
  <div class="home container-fluid">
    <div class="card">
      <h1 class="text-center row">
        <div class="col-6">Total Keeps: {{ keeps.length }}</div>
        <div class="col-6">
          Total Public Vaults:
          {{ vaults.filter((v) => v.isPrivate == false).length }}
        </div>
      </h1>
    </div>
    <div class="card-columns">
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
  name: "Home",
  mounted() {
    this.$store.dispatch("getKeeps");
    this.$store.dispatch("getVaults");
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    vaults() {
      return this.$store.state.vaults;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  components: { keepTileComponent },
};
</script>

<style>
</style>
