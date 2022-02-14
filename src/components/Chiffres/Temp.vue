<template>
  <ul>
    <button @click="getMyResults"></button>
    <li 
      class="list-group-item"
    >
      {{ releves }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import releveDataService from '../../../services/releveDataService'

export default defineComponent({
  name: "temp-list",
  data() {
    return {
      releves: [{
        id: null,
        temp: '',
        hum: '',
        date: ''
      }],
    }
  },
  methods: {
    getMyResults() {
      releveDataService.getAll()
        .then(response => {
          this.releves = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log('Erreur dans la fonction getMyResults : ', e)
        })
    }
  },
})
</script>

<style scoped>
button {
  width: 10px;
  height: 10px;
}
</style>