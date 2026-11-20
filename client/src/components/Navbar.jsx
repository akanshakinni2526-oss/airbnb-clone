import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        StayNest
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>

      <Link to="/create-property" className="host-button">
  Become a Host
</Link>
    </nav>
  );
}

export default Navbar;