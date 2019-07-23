import React from 'react';
import { Link } from 'react-router-dom';

export function Fotter(props) {
    return (
        <footer className="footer page-footer font-small bg-light footer-border">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <Link to="/">hpstrades.com</Link>
            </div>
        </footer>
    );
}