import React from 'react';
export const ModalPopUp = (props) => (
    <>
        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal"
        data-backdrop="static" data-keyboard="false"
            data-target="#modalPopUp">
            {props.btnLabel}
        </button>
        <div className="modal fade" id="modalPopUp" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.heading}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    </>
);