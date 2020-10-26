<template>
  <div class="vault-tile-component card" @click="viewVault">
    <h1>{{ vaultTileProp.name }}</h1>
    <p>{{ vaultTileProp.description }}</p>
    <h4>{{ vaultTileProp.creator.email }}</h4>
  </div>
</template>

<script>
export default {
  name: "vault-tile-component",
  props: ["vaultTileProp"],
  data() {
    return {};
  },
  methods: {
    viewVault() {
      this.$router.push({
        name: "VaultDetails",
        params: { vaultId: this.vaultTileProp.id },
      });
    },
  },
};
</script>

<style>
</style>