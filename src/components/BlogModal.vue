<template>
  <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  setup() {
    return {}
  },
}
</script>


<style lang="scss" scoped></style>