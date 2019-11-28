import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';
import { PageTemplate } from '_controls/index'


export const Error404 = () => (<PageTemplate heading="Error">
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>Oops!</h1>
                <h2>404 - The Page can't be found</h2>
            </div>
            <Link to="/" className="navbar-brand">Go TO Homepage</Link>
        </div>
    </div>
</PageTemplate>)
