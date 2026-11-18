import { useEffect, useState } from 'react'
import { healthApi } from './api/health'
import { ApiError } from './api/client'
import type { HealthResponse } from './types/api'

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    healthApi.check()
      .then(setHealth)
      .catch((err: unknown) => {
        if (err instanceof ApiError) {
          setError(`${err.message} (${err.statusCode})`)
        } else {
          setError('A backend nem érhető el.')
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <h1>MyDashboard</h1>

      {loading && <p>Kapcsolódás...</p>}

      {health && (
        <div>
          <h2>Sikeres kapcsolat</h2>
          <p>{health.message}</p>
          <p>PHP verzió: {health.php_version}</p>
        </div>
      )}

      {error && (
        <div>
          <h2>Sikertelen kapcsolat</h2>
          <p>{error}</p>
        </div>
      )}
    </main>
  )
}

export default App