import React from 'react';
export const Loading = () => (
    <div className="loading-spinner">
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
);