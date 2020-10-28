<template>
  <div class="row">
    <div class="col-12 col-md-6 text-center mt-2">
      <img :src="keep.img" />
    </div>
    <div class="col-12 col-md-6 mt-2">
      <div class="row">
        <div class="col-12 text-center">
          <h5 class="ml-2">
            <i class="fa fa-eye" aria-hidden="true"></i> {{ keep.views }} |
            <i class="fa fa-share" aria-hidden="true"></i> {{ keep.shares }} |
            <i class="fa fa-lock" aria-hidden="true"></i>
            {{ keep.keeps }}
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <h1>{{ keep.name }}</h1>
        </div>
        <div class="col-12 text-center">
          <p>{{ keep.description }}</p>
        </div>
      </div>
      <div class="row" v-if="keep.creator">
        <div class="col-2 text-center centertext">
          <i
            v-if="keep.creator.id == profile.id"
            class="fa fa-trash"
            aria-hidden="true"
            @click.stop="deleteKeep"
          ></i>
        </div>
        <div class="col-8 text-center centertext">
          <h6>{{ keep.creator.email }}</h6>
        </div>
        <div class="col-2">
          <img class="detailsimg p-2" :src="keep.creator.picture" />
        </div>
      </div>
      <div class="row">
        <div v-if="$auth.isAuthenticated" class="input-group">
          <select
            class="custom-select form-control"
            v-model="vaultKeep.VaultId"
          >
            <option v-for="vault in myVaults" :key="vault.id" :value="vault.id">
              {{ vault.name }}
            </option>
          </select>
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="createVaultKeep"
            >
              Add to Vault
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-details",
  data() {
    return {
      vaultKeep: {
        VaultId: "",
      },
    };
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    profile() {
      return this.$store.state.profile;
    },
    myVaults() {
      return this.$store.state.profileVaults;
    },
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keep.id);
      $("#modal" + this.keep.id).modal("hide");
    },
    createVaultKeep() {
      this.$store.dispatch("createVaultKeep", {
        keepid: this.keep.id,
        vaultid: this.vaultKeep.VaultId,
        keeps: this.keep.keeps,
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
.detailsimg {
  max-height: 50px;
  max-width: 50px;
  cursor: pointer;
  border-radius: 25px;
}
.centertext {
  position: relative;
  top: 1em;
  right: 1em;
}
.fa.fa-eye,
.fa.fa-share,
.fa.fa-lock {
  color: var(--primary);
}
</style>