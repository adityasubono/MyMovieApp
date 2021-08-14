import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row" data-testid="header-1">
          {/*<div className="col-2 col-md-2 d-flex justify-content-center align-items-center">*/}
          {/*  <Link to="/" data-testid="header-2">*/}
          {/*    <button className="btn btn-default">*/}
          {/*      <i className="bi bi-house"></i>*/}
          {/*      </button>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div className="col-8 col-md-8 d-flex justify-content-center p-3">*/}
          {/*  <h1>Pilih Movie Databases</h1>*/}
          {/*</div>*/}

            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Hello, perkenalkan saya mymovie.com merupakan situs pencarian
                                film yang membantu dalam mencari film favorit kesukaan anda.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <i className="bi bi-camera-reels"  style={{color: '#ffc107'}}/>
                            <strong className='ms-3' style={{color: '#ffc107'}}>MyMovie.com </strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
