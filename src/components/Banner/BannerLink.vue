<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default ({
  props: {
    to: {type: String, required: true},
  },
  setup(props: { to: string }) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive };
  }
})
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <slot />
  </router-link>
</template>

<style scoped>
.link {
  transition: 0.3s ease;
  height: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  border-radius: 10px;
}
.link:hover {
  background-color: #3bb36d;
}
.link.active {
  background-color: #3bb36d;
}
</style>