<template>
  <div class="container-fluid">
    <div class="row my-2">
      <h1 class="col-12">
        {{ vault.name }}
        <i class="fa fa-trash" aria-hidden="true" @click="deleteVault"></i>
      </h1>
      <h5 class="col-12">Keeps: {{ keeps.length }}</h5>
    </div>
    <div class="card-columns">
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
  methods: {
    deleteVault() {
      console.log("clicked");
      this.$store.dispatch("deleteVault", this.vault.id);
    },
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
.fa.fa-trash {
  color: grey;
  cursor: pointer;
}
</style>