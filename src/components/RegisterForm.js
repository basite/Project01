import React from 'react';

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            classDisplay: "d-none"
        }
    }

    onHandleChange = () => {
        if (this.state.classDisplay === "d-none") {
            this.setState({ classDisplay: "d-block" })
        }
        else {
            this.setState({ classDisplay: "d-none" })
        }

    }
    render() {
        return (
            <div className="col-lg-6">
                <form className="border p-3 m-5">
                    <h4>Belum Punya Akun ? </h4>
                    <div className="sm-line"></div>
                    <p>Daftar Sekarang ! </p>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="registerCheck" autoComplete="off" onChange={this.onHandleChange} />
                        <label className="form-check-label" for="registerCheck">Daftar </label>
                    </div>
                    <div id="regis" className={this.state.classDisplay}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nama </label>
                            <input type="" className="form-control" id="name"
                                placeholder="Masukkan Nama mu" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="text" className="form-control" id="email"
                                placeholder="Masukkan email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Masukkan Password" />
                            <label for="exampleInputPassword1">Ketik-Ulang Password</label>
                            <input type="password" className="form-control" placeholder="Ketik-Ulang Password" />
                        </div>
                        <div className="form-group">
                            <label for="nohp">No. HP </label>
                            <input type="number" className="form-control" id="phone-no"
                                placeholder="Masukkan No. HP mu" />
                        </div>
                        <button type="submit" className="btn btn-primary">Daftar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm;