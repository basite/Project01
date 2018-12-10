import React from 'react';
import Breadcrumbs from './../components/Breadcrumbs';

class Contact extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs path={this.props.match.url} />
                <section id="contact" className="my-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>Hubungi Kami</h2>
                                <p id="emailHelp" class="form-text"> </p>
                                <span>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span class="lead inl"> &ensp; Alamat</span>
                                </span>
                                <p class="lnhei"><b>SINARMAS MSIG TOWER Lantai 40</b><br/>
                                Jl. Jend. Sudirman No.Kav. 21, RT.10/RW.1, <br/>
                                Kuningan, Karet, Kecamatan Setiabudi, <br/>
                                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
                                </p>

                                <span>
                                    <i class="fas fa-phone"></i>
                                    <span class="lead inl">&ensp; Telepon </span>
                                </span>
                                <p>(+62) 812-3456-7890</p>
                                <span>
                                    <i class="far fa-envelope"></i>
                                    <span class="lead inl">&ensp; Email</span>
                                </span>
                                <p><a href="" href="mailto:cs@tokoku.id?Subject=Hello%20again" target="_top">cs@tokoku.id</a></p>
                            </div>

                            <div class="col-lg-6 col-sm-12 mx-auto">
                                <h2 class="text-center">Kirim Pesan</h2>
                                <form class="border p-3 m-5">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Masukkan Email" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control text-dark" rows="5" placeholder="Apa yang bisa kami bantu ?"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Kirim</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.401605694459!2d106.82010061534095!3d-6.210644795504063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e324564963%3A0xb876e32ffae855e4!2sSinarmas+MSIG+Tower!5e0!3m2!1sid!2sid!4v1543475789763"
                        width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                </div>
            </React.Fragment>

        )
    }
}

export default Contact;