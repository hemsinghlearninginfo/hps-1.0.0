import React from 'react';
export const PageTemplate = (props) => (
    <section className="page-content">
        <div className="container-fluid container-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="pagetemplate-title">
                        <h2>{props.heading}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
    
);