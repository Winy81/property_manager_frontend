import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <h1 className="title">Contact Us</h1>
      
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Email: info@propmanage.com</p>
        <p>Phone: (123) 123-4567</p>
        <p>Address: 123 Property Lane, Real Estate City</p>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Services
      </button>
    </div>
  );
}