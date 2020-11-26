<template>
  <div class="traffic-item">

  </div>
</template>

<script>
export default {
  name: 'green',
  data: () => ({
    timer: 15000,
  }),
  mounted: function() {
    console.log(this.$route.name);
    setTimeout(() => this.$router.push({ path: 'red' }), this.timer);
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
  background: green;
}

</style>