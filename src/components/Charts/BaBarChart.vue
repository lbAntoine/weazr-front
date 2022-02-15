<template>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { BarChart } from "vue-chart-3"
import { CHART_COLORS } from '../../utils/utils'
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"
Chart.register(BarController, CategoryScale, LinearScale, BarElement)
const dataValues = ref([
  [12, 14, 10, 11, 11, 15, 16],
  [68, 71, 72, 58, 53, 52, 60]
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