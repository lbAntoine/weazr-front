export interface BasicReleve {
  id: number
}

export interface Releve extends BasicReleve {
  id: number,
  temp?: string,
  hum?: string,
  date?: string
}