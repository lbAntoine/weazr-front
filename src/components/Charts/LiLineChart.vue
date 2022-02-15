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
import { Releve } from '../../../types/releve'
import releveDataService from "../../services/releveDataService";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

// function getGraphData(): [Releve] {
//   console.log('Récup data pour graph')
//   setInterval(() => {
//     releveDataService.getMultiple()
//       .then(response => {
//         const releves = response.data
//         console.log(releves)
//         return releves
//       }).catch(e => {
//         console.log('erreur dans la récup de données pour le graph.. ', e)
//       })
//   }, 12000)
// }

// const releves = getGraphData()
// let tempList: [number] = []
// let humList: [number] = []
// let dateList: [number] = []
// for (const releve of releves) {
//   tempList.push(Math.round(parseInt(releve.temp)))
//   humList.push(Math.round(parseInt(releve.hum)))
//   const essaie = releve.date?.match(/\d\d+?(?=:)/g)
//   if (essaie[0] != null) {
//     dateList.push(parseInt(essaie[0]))
//   }
// }

// const tempValues = ref(tempList)
// const humValues = ref(humList)
// const labels = ref(dateList)
const tempValues = ref([23, 22, 24, 21, 22, 22, 22, 23, 24, 24, 24, 23, 23, 22, 21])
const humValues = ref([49, 49, 49, 49, 49, 49, 50, 50, 49, 49, 48, 49, 49, 49, 50])
const labels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
const data = computed(() => ({
  labels: labels.value,
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
  animation: false,
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
  },
  
})
</script>