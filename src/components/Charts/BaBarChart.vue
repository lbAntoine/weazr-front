<template>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup lang="ts">
import pattern from "patternomaly"
import { ref, computed, defineComponent } from "vue"
import { BarChart } from "vue-chart-3"
import { CHART_COLORS, transparentize } from '../../utils/utils'
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"
Chart.register(BarController, CategoryScale, LinearScale, BarElement)
const dataValues = ref([
  [1, 3, 5, 7, 2, 4, 6],
  [1, 5, 2, 6, 3, 7, 4]
])
const data = computed(() => ({
  labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  datasets: [
    {
      label: "Température (°C)",
      data: dataValues.value[0],
      backgroundColor: CHART_COLORS.red
    },
    {
      label: "Humidité (%)",
      data: dataValues.value[1],
      backgroundColor: CHART_COLORS.blue
    }
  ]
}))
const options = ref({
  plugins: {
    title: {
      text: "Bar"
    }
  }
})
</script>