import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './../components/Breadcrumbs';
import Faker from 'faker';

class FAQ extends React.Component {

    // supaya pagenya scroll keatas saat di klik
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.haha)
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default FAQ;