import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navbar">
      <div className="full-width-container nav-flex">
        <Link to="/" className="logo">Prop<span>Manage</span></Link>
        <nav className="nav-links">
          <Link to="/">About Us</Link>
          <Link to="/">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}