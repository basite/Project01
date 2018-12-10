import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <form className="border p-3 m-5">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Alamat Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Masukkan Email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Masukkan Password" />
                    </div>
                    <div className="form-group">
                        <p>Lupa password? <a href="">Atur Ulang Password</a></p>
                    </div>
                    <button type="button" className="btn btn-primary">Masuk</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;