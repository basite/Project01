import React from 'react';
import Breadcrumbs from './../components/Breadcrumbs';

class ConfirmPayment extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs path={this.props.match.url} />
                <div className="container text-center">
                    <form className="border p-3 m-5">
                        <h3 className="text-uppercase">Konfirmasi Pembayaran</h3>
                        {/* <div className="sm-line"></div> */}
                        <div className="form-group">
                            <label for="exampleInputEmail1">No. Invoice</label>
                            <input type="text" className="form-control" id="invoice-no"
                                placeholder="Your Invoice Number.. " />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Tanggal Bayar</label>
                            <input type="date" className="form-control" id="payment-date"
                                placeholder="Payment Date" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Akun Bank Transfer</label>
                            <input type="text" className="form-control" id="invoice-no"
                                placeholder="Your Bank Account Name.." />
                        </div>
                        <div className="form-group">
                            <label for="proof-of-payment">Upload Bukti Transfer</label>
                            <input type="file" className="form-control-file" id="proof-of-payment" />
                        </div>
                        <button type="submit" className="btn btn-primary">Konfirmasi</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default ConfirmPayment;