<template>
  <div class="vault-tile-component card" @click="viewVault">
    <div class="col-12">
      <div class="row">
        <h1>
          {{ vaultTileProp.name }}
          <i
            class="fa fa-trash"
            aria-hidden="true"
            @click.stop="deleteVault"
          ></i>
        </h1>
      </div>
    </div>
    <div class="col-12">
      <p>{{ vaultTileProp.description }}</p>
      <h4>{{ vaultTileProp.creator.email }}</h4>
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
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultTileProp.id);
    },
  },
};
</script>

<style>
.fa.fa-trash {
  color: var(--danger);
  cursor: pointer;
}
</style>