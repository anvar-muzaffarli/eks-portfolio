import logo from '../logo.png'
//  CTRL + D
const Navbar = () => {
  return (
      // XML <br /> <hr> <img /> <input> <source>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="IT Brains Academy" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Contact me</a>
      </li>
    
     
    </ul>
   
  </div>
</nav>
  )
}

export default Navbar