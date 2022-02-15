<script lang="ts">
import BannerLink from './BannerLink.vue'

export default ({
  components: {
    BannerLink
  }
})
</script>

<template>
  <div class="gen">
    <div class="nav-bar">
      <BannerLink to="/"><font-awesome-icon :icon="['fas', 'home']" /><p>Accueil</p></BannerLink>
      <BannerLink to="/historique"><font-awesome-icon :icon="['fas', 'chart-line']" /><p>Historique</p></BannerLink>
      <!-- <BannerLink to="/storeTest"><font-awesome-icon :icon="['fas', 'user']" /><p>Test VUEX Store</p></BannerLink> -->
    </div>
  </div>
</template>

<style scoped>
.gen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}
.gen .nav-bar {
  /* border: 2px solid red; */  
  background: #353535;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  filter: drop-shadow(0 0 30px #202020);
}
.gen .nav-bar .link {
  text-decoration: none;
  color: aliceblue;
}
.gen .nav-bar .link p {
  margin: 0 0 0 1em;
}
@media screen and (max-width: 820px) {
  .gen .nav-bar .link p {
    display: none !important;
  }
  
}
</style>