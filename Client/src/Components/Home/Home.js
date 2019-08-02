import React from 'react';
import { connect } from 'react-redux';
import Hero from '../Shared/Hero';
import MyComponents from '..';

class Home extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <MyComponents.AboutUs />
                <MyComponents.SlideMasters />
                <MyComponents.SlideWriteUps />
            </>
        );
    }
}

export { Home };