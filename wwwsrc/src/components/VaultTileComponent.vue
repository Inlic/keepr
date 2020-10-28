<template>
  <div
    class="card bg-dark text-light vault-tile-component ml-2"
    @click="viewVault"
  >
    <img src="https://www.placecage.com/200/200" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title tshadow text-light">{{ vaultTileProp.name }}</h5>
      <h1 v-if="vaultTileProp.isPrivate" style="color: red">PRIVATE</h1>
    </div>
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
.fa.fa-trash {
  color: var(--danger);
  cursor: pointer;
}
.vault-tile-component {
  display: inline-block;
  margin-left: 0.25em;
}
.tshadow {
  text-shadow: 2px 2px gray;
}
</style>