import React from 'react';
import Hero from '../Shared/Hero';
import MyComponents from '..';

class Home extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <MyComponents.Quote />
                <MyComponents.AboutUs />
                <MyComponents.SlideMasters />
                <MyComponents.SlideWriteUps />
            </>
        );
    }
}

export { Home };