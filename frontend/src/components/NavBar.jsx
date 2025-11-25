import "./NavBar.css";
import logo from "../assets/cuet_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-left">
      <img src={logo} className="logo" />
      <h2 className="uni-name">CUET Smart Education</h2>
    </div>

    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/ask">Ask CUET</a></li>
      <li><a href="/">Academic</a></li>
      <li><a href="/about">Admission</a></li>
      <li><a href="/ask">Facilities</a></li>
      <li><a href="/login" className="login-btn">Login</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
