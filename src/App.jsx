import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ServiceShow from './components/ServiceShow'
import Contact from './components/Contact'
import { APP_CONFIG } from './config'
import './App.css'

function App() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(APP_CONFIG.api.services)
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
    <div className="layout"> 
      <Header />
      <main className="main-content">
        <div className="full-width-container content-area">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="title">Our Services</h1>
                {loading ? (
                  <div className="status"><h3>Loading...</h3></div>
                ) : (
                  <div className="services-grid">
                    {services.map(service => (
                      <Link to={`/services/${service.id}`} key={service.id} className="service-card-link">
                        <div className="service-card">
                          <h3>{service.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceShow />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App