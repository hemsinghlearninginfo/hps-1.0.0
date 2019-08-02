import React from 'react';
export const InfoBox = (props) => (
    <div className={"w-100 alert alert-" + (props.type ? props.type : "info")} role="alert">
        <h4 className="alert-heading">{props.heading ? props.heading : "Well done!"}</h4>
        <p>{props.children}</p>
    </div>
);