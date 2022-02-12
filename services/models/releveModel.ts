import { RowDataPacket } from 'mysql2'
import db from '../config/db'

export async function getReleveDaily(date: string): Promise<{ temp: number, hum: number }> {
  // const connection = await db.getConnection()
  try {
    const sqlParams = []
    const params = []
    console.log('REMIIIIII')
    sqlParams.push('WHERE r.date LIKE ?')
    params.push(date)

    const sql = `
    SELECT r.temp, r.hum
    FROM Releves r
    ${sqlParams.join(' AND ')}
    `

    const [releves] = await db.query<RowDataPacket[]>(sql, params)
    let totalTemp = 0
    let totalHum = 0
    releves.forEach(releve => {
      totalTemp += releve.temp
      totalHum += releve.hum
    })
    const tempDailyMoyenne = totalTemp%releves.length
    const humDailyMoyenne = totalHum%releves.length

    const result = { temp: tempDailyMoyenne, hum: humDailyMoyenne }
    console.log('Résultat getReleveDaily : ', result)
    return result
  } catch (e) {
    console.log('Erreur getReleveDaily : ', e)
    return
  }
}