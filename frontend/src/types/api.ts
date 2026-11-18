export interface HealthResponse {
  status: string
  message: string
  php_version: string
}

export interface ApiErrorResponse {
  status: 'error'
  message: string
}