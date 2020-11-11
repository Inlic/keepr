<template>
  <div class="keep-tile-component card">
    <div data-toggle="modal" :data-target="'#' + modalId" @click="setActive">
      <div class="card bg-dark text-white mb-0 pointer">
        <img class="card-img" :src="keepTileProp.img" alt="Card image" />
        <div class="card-img-overlay">
          <div v-if="vaultTileProp">
            <h5 class="removefromvault" v-if="vaultTileProp.name">
              <i
                v-if="profile.id == vaultTileProp.creatorId"
                class="fa fa-times mr-1 tshadowalt"
                aria-hidden="true"
                @click.stop="removeKeepFromVault"
              ></i>
            </h5>
          </div>
          <h5 class="card-title tshadow text-light">
            {{ keepTileProp.name }}
          </h5>
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
    <modal-component :id="modalId" color="bg-white">
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
      this.$store.dispatch("getMyVaults", this.profile.id);
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
  max-height: 25px;
  max-width: 25px;
  position: absolute;
  bottom: 8px;
  right: 16px;
  border-radius: 25px;
  cursor: pointer;
}
.keep-tile-component {
  display: inline-block;
  margin-left: 0.25em;
}
.removefromvault {
  position: absolute;
  top: 8px;
  right: 16px;
}
.pointer {
  cursor: pointer;
}
.tshadow {
  text-shadow: 2px 2px gray;
}
.tshadowalt {
  text-shadow: 1px 1px black;
}
</style>