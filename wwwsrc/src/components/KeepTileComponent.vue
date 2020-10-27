<template>
  <div class="keep-tile-component">
    <div
      class="card"
      data-toggle="modal"
      :data-target="'#' + modalId"
      @click="setActive"
    >
      <div v-if="vaultTileProp">
        <h5 class="float-right" v-if="vaultTileProp.name">
          <i
            class="fa fa-times mr-1"
            aria-hidden="true"
            @click.stop="removeKeepFromVault"
          ></i>
        </h5>
      </div>
      <div class="card bg-dark text-white">
        <img class="card-img" :src="keepTileProp.img" alt="Card image" />
        <div class="card-img-overlay">
          <h5 class="card-title">{{ keepTileProp.name }}</h5>
          <div>
            <img
              class="profileimg"
              :src="keepTileProp.creator.picture"
              @click.stop="viewProfile"
            />
          </div>
        </div>
      </div>
    </div>
    <modal-component :id="modalId" color="bg-danger">
      <template v-slot:body>
        <keep-details-component />
      </template>
    </modal-component>
  </div>
</template>

<script>
import modalComponent from "./ModalComponent";
import keepDetailsComponent from "./KeepDetailsComponent";
export default {
  name: "keep-tile-component",
  props: ["keepTileProp", "vaultTileProp"],
  data() {
    return {};
  },
  computed: {
    modalId() {
      return "modal" + this.keepTileProp.id;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    setActive() {
      this.$store.dispatch("setActiveKeep", this.keepTileProp);
      this.$store.dispatch("getProfileVaults", this.profile.id);
    },
    viewProfile() {
      this.$router.push({
        name: "Profile",
        params: { profileId: this.keepTileProp.creator.id },
      });
    },
    removeKeepFromVault() {
      this.$store.dispatch("removeKeepFromVault", {
        vaultid: this.vaultTileProp.id,
        keepid: this.keepTileProp.id,
      });
    },
  },
  components: {
    modalComponent,
    keepDetailsComponent,
  },
};
</script>

<style>
.fa.fa-times {
  color: var(--danger);
  cursor: pointer;
}
.profileimg {
  max-height: 50px;
  max-width: 50px;
  position: absolute;
  bottom: 8px;
  right: 16px;
}
</style>