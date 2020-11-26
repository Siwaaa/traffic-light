<template>
  <div class="traffic-item">

  </div>
</template>

<script>
export default {
  name: 'yellow',
  data: () => ({
    timer: 3000,
  }),
  mounted: function() {
    console.log(this.$route.name);
    setTimeout(() => this.$router.push({ path: 'green' }), this.timer);
  },
}
</script>

<style scoped>

.traffic-item {
  display: inline-block;
  width: 200px;
  height: 200px;
  text-align: center;
  border-radius: 50%;
  background: yellow;
}
</style>