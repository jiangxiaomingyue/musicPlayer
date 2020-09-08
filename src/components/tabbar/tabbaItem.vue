<template>
  <div class="item-bar">
    <slot name="item-icon"></slot>
    <slot name="item-active"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbaItem"
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
.item-bar{
  margin-left: 20px;
}
</style>
