<template>
  <div class="chart-container">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script lang="ts">
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { LinesChart } from "echarts/charts"
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components"
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent } from "vue"

use([
  CanvasRenderer,
  LinesChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

export default defineComponent({
  name: 'DoubleLine',
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'dark'
  },
  setup() {
    const option = ref({
      title: {
    text: 'Temperature Change in the Coming Week'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
    })
    return { option }
  }
})
</script>