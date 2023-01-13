import { Link } from '@remix-run/react'
import  logo  from '~/assets/images/krageroskolekorps-banner.png'

const Header = () => {
    return (
        <header className='d-flex flex-column'>
        <img src={logo} className="logo mx-auto"/>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav gap-5">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/about">Om oss</Link>
                <Link className="nav-link" to="/photos">Bilder</Link>
                <Link className="nav-link" to="/organization">Styret</Link>
                <Link className="nav-link" to="/nmf">NMS</Link>
              </div>
            </div>
          </div>
        </nav>
        </header>
    )
}

export default Header