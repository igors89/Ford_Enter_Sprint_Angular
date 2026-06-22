export interface Veiculos {
  id?: number
  vehicle: string
  volumetotal: number
  connected: number
  softwareUpdates: number
  img: string
}

export interface ApiResponseVeiculos {
  vehicles: Veiculos[];
}
