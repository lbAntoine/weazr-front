import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faCloudSun, faHome, faShareAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'animate.css'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LinesChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

library.add(faHome, faChartLine, faUser, faCloudSun, faShareAlt)

const app = createApp(App)

use([
  CanvasRenderer,
  LinesChart,
  BarChart,
  GridComponent,
  TooltipComponent
])

// app.component('BannerLink', BannerLink)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-chart', ECharts)

app.use(router).mount("#app")
