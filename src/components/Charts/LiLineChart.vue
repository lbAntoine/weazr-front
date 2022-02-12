<template>
  <LineChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { CHART_COLORS, transparentize } from '../../utils/utils'
import { LineChart } from "vue-chart-3"
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js"
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)
const tempValues = ref([12, 14, 16, 18, 11, 13, 15])
const humValues = ref([1, 3, 7, 2, 5, 3, 4])
const data = computed(() => ({
  labels: ["1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h","24h"],
  datasets: [
    {
      label: 'Température (°C)',
      data: tempValues.value,
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
      yAxisID: 'y',
    },
    {
      label: 'Humidité (%)',
      data: humValues.value,
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
      yAxisID: 'y1',
    }
  ]
}))
const options = ref({
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis'
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',

      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  }
})
</script>