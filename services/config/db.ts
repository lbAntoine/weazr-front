import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
})







// EXPERT NET VERSION
// import { createPool, Pool } from "mysql2/promise";

// function connection (): Pool {
//   try {
//     const pool = createPool({
//       host: '192.168.71.115',
//       user: 'root',
//       password: 'root',
//       database: 'Atmos_Weazr_DB',
//       connectionLimit: 10,
//       multipleStatements: true
//     })
    
//     pool.on('connection', function (connection: any) {
//       connection.query('SET SESSION groupe_concat_max_len = 4096')
//     })

//     return pool
//   } catch (e) {
//     console.log(`Erreur lors de la connection à la base de donnée ${JSON.stringify(e)}`)
//   }
// }

// const pool = connection()
// export default pool