import React from 'react';
import { Link } from 'react-router-dom';
import MyComponent from '../index';

export class Fotter extends React.Component {
    render() {
        return (
            <footer className="footer page-footer font-small bg-dark text-white footer-border">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <MyComponent.NewsLetter />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright text-center py-3">© 2019 Copyright: <Link to="/">hpstrades.com</Link></div>
            </footer>
        );
    }
}