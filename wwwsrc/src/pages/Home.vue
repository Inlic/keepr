<template>
  <div class="home container-fluid">
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
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
  },
  components: { keepTileComponent },
};
</script>

<style>
</style>
