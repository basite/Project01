import React from 'react';
import Banner from './../components/Banner';
import NewsLetter from '../components/NewsLetter';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Banner />
                <NewsLetter />
            </React.Fragment>
        )
    }
}

export default Home;