import { useEffect, useState } from 'react'

function App() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/services")
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("API Error:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="app-container">
      <header className="hero">
        <h1>Premium Property Management</h1>
        <p>Expert care for your real estate portfolio.</p>
      </header>

      <section className="services-section">
        <h2>Our Services</h2>
        {loading ? (
          <p>Loading services...</p>
        ) : (
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.description}</h3>
              </div>
            ))}
            
          </div>
        )}
      </section>
    </div>
  )
}

export default App