import React from 'react';
export const PageTemplate = (props) => (
    <div className="container-fluid container-content">
        <div className="row page-content">
            <div className="col">
                <div className="row heading"><div className="col"><h5>{props.heading}</h5><hr /></div></div>
                <div className="row content"><div className="col">{props.children}</div></div>
            </div>
        </div>
    </div>
);