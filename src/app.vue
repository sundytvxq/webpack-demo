<template>
  <div>
    <router-link to="/home" tag="span">home</router-link>
    <router-link to="/about" tag="span">about</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>
<style lang="scss" scoped></style>
