<template>
  <div class="shops-panel_">
    <h2 class="shops-panel__heading">My shopping list</h2>
    <ul class="shops-panel__shops-list">
      <!-- <shop-item></shop-item> -->
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.shops-panel_:hover,
.shop-list__icon:hover + .shops-panel_ {
  visibility: visible;
  opacity: 1;
}

.shops-panel__heading {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #f59a83;
  text-transform: uppercase;
  text-align: center;
  transform: skewY(-3deg);
  margin-bottom: 30px;
}
</style>
