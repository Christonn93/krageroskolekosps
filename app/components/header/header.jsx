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
                <div className='d-flex gap-3'>
                <Link className="btn button-navigation" aria-current="page" to="/">Hjem</Link>
                <Link className="btn button-navigation" to="/member">Medlem</Link>
                <Link className="btn button-navigation" to="/photos">Bilder</Link>
                <Link className="btn button-navigation" to="/nmf">NMF</Link>
                </div>
                <div className=''>
                <div className="dropdown">
                  <button className="btn button-navigation dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Om oss
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><Link className="dropdown-item" to="/band">Om Korpset</Link></li>
                    <li><Link className="dropdown-item" to="/organization">Om Styret</Link></li>
                    <li><Link className="dropdown-item" to="/contact">Kontakt oss</Link></li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </header>
    )
}

export default Header