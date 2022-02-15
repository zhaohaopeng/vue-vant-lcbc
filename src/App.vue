<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

};
</script>

<style>
@font-face {
  font-family: fangzhegnlanting;
  src: url('./fonts/FZLTHJW.TTF');
}

#app {
  font-family: fangzhegnlanting, Avenir, Helvetica, Arial, sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}

.van-dialog {
  border-radius: 0 !important;
  background: none !important;
}
</style>
