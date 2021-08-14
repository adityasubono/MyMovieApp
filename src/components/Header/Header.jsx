import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row" data-testid="header-1">
            <header>
                <div className="collapse bg-warning" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-dark">About</h4>
                                <p className="text-dark" style={{fontSize: 15, fontWeight: 'bold'}}>
                                    Hello, perkenalkan saya MyMovie.com merupakan situs pencarian
                                film yang membantu anda dalam mencari film favorit kesukaan anda dan anda
                                    juga dapat melihat film anda disini.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-dark text-dark">Follow Kami</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-white"> <i className="bi bi-twitter me-3"  style={{color: '#313131', fontSize: 50}}/></a>
                                        <a href="#" className="text-white"> <i className="bi bi-facebook  me-3"  style={{color: '#313131', fontSize: 50}}/></a>
                                        <a href="#" className="text-white"> <i className="bi bi-instagram  me-3"  style={{color: '#313131', fontSize: 50}}/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="/" className="navbar-brand d-flex align-items-center">
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
