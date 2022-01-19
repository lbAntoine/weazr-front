<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Banner from './components/Banner/Banner.vue'
import Logo from './components/Logo/Logo.vue'
</script>

<template>
  <Logo/>

  <Banner/>

  <transition
  mode="out-in"
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view/>
  </transition>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #154557;
}
.logo {
  position: absolute;
  margin: 1vh 0 0 3vw;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93vh;
  background: #154557;
}
</style>
