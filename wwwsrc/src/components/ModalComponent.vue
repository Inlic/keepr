<template>
  <!-- Modal -->
  <div class="modal fade" :id="id" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content p-3" :class="color">
        <div class="modal-header">
          <slot name="header"></slot>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    id: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>

<style>
</style>