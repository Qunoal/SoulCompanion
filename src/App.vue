<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <router-view></router-view>
  <NavBar id="navbar"/>
</template>

<style scoped>
#navbar{
  position: fixed;
  left: 0;
  bottom: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
