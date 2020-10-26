<template>
  <div class="keep-tile-component card">
    <h1>{{ keepTileProp.name }}</h1>
    <img :src="keepTileProp.img" />
    <p>{{ keepTileProp.description }}</p>
    <h4>{{ keepTileProp.creator.email }}</h4>
  </div>
</template>

<script>
export default {
  name: "keep-tile-component",
  props: ["keepTileProp"],
  data() {
    return {};
  },
};
</script>

<style>
</style>