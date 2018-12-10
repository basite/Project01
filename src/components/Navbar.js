import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a href="/" className="navbar-brand" >TOKOKU.ID</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link" >Beranda <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/productList"><a href="productList" className="nav-link">Produk Kami</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Pesanan
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/confirmPayment"><a href="" className="dropdown-item" >Konfirmasi Pembayaran</a></Link>
                                        <a href="" className="dropdown-item" >Status Pesanan</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Informasi
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="" className="dropdown-item" >Tentang Kami</a>
                                        <Link to="/contact"><a href="" className="dropdown-item" >Hubungi Kami</a></Link>
                                    </div>
                                </li>
                            </ul>

                            <form className="form-inline my-2 my-lg-0 mr-5">
                                <input className="form-control mr-sm-2" type="search" placeholder="Cari Produk.." aria-label="Search" style={{ width: "11rem" }} />
                                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Cari</button>
                            </form>

                            <Link to="/login"><a href="" type="button" className="btn btn-outline-secondary mr-3 login" href="login.html"><i className="fas fa-sign-in-alt"></i>
                                Masuk</a></Link>

                            <a href="" type="button" className="btn btn-light"><i className="fas fa-shopping-cart fa-sm m-1"></i>Keranjang (<span>{this.props.cart}</span>)</a>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;