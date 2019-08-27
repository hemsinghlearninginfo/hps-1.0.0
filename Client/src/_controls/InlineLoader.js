import React from 'react';
export const InlineLoader = (props) => (
    <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        {props.message ? " " + props.message : " Loading..."}
    </button>
);