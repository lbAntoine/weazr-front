// import { CronJob } from "cron"
// import { releveDaily, releveMinute } from '../controllers/releveController'

// export class dailyConnect {
//   cronJob: CronJob

//   constructor() {
//     this.cronJob = new CronJob('0 0 0 * * *', async () => {
//       try {
//         await this.dailyReleve();
//       }
//       catch (e) {
//         console.log('Erreur dans le cron dailyConnect : ', e)
//       }
//     })

//     // Start job
//     if (!this.cronJob.running) {
//       this.cronJob.start()
//     }
//   }

//   async dailyReleve(): Promise<any> {
//     let result: { temp: number, hum: number }
//     const date = Date.toString()
    
//     releveDaily(date)
//     return result
//   }
// }

// export class allMinutes {
//   cronJob: CronJob

//   constructor() {
//     this.cronJob = new CronJob('* * * * * *', async () => {
//       try {
//         await this.minuteReleve();
//       }
//       catch (e) {
//         console.log('Erreur dans le cron dailyConnect : ', e)
//       }
//     })

//     // Start job
//     if (!this.cronJob.running) {
//       this.cronJob.start()
//     }
//   }

//   async minuteReleve(): Promise<any> {
//     let result: { temp: number, hum: number } = { temp: 1, hum: 2 }
//     const date = new Date()
//     const minute = date.getMinutes.toString()
    
//     releveMinute(minute)
//     return result
//   }
// }