import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faCloudSun, faHome, faShareAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'animate.css'
import './plugins/chart.js'

import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

library.add(faHome, faChartLine, faUser, faCloudSun, faShareAlt)

const app = createApp(App)

// app.component('BannerLink', BannerLink)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount("#app")
