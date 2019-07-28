import React from 'react';
import { Link } from 'react-router-dom';
import MyComponent from '../index';

export function Fotter(props) {
    return (
        <footer className="footer page-footer font-small bg-light footer-border">
            <div className="container">
                <div className="row">
                    <div className="col-sm text-center"></div>
                    <div className="col-sm">
                        <MyComponent.NewsLetter />
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-copyright text-center py-3">© 2019 Copyright: <Link to="/">hpstrades.com</Link></div>
        </footer>
    );
}