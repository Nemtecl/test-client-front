export interface FormValues {
  budget: number
  surface: number
  typology: number
  exposures: string[]
}

export interface FormError {
  [key: string]: string
}
