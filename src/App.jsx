import { useEffect, useState } from 'react'
import './App.css'

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
    <div className="layout"> 
      <header className="navbar">
        <div className="full-width-container nav-flex">
          <div className="logo">Prop<span>Manage</span></div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="full-width-container content-area">
          <h1 className="title">Our Services</h1>
          
          {loading ? (
            <div className="status">Loading services...</div>
          ) : (
            <div className="services-grid" id="services">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <h3>{service.title || "Management Service"}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="full-width-container footer-flex">
          <div className="footer-info">
            <div className="logo" style={{fontSize: '1.2rem'}}>Prop<span>Manage</span></div>
            <p>Professional property management solutions.</p>
          </div>
          <div className="footer-copyright">
            &copy; 2026 PropManage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
