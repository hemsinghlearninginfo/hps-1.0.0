import React from 'react';
import $ from 'jquery';

export const ModalConfirm = (props) => (
    <div className="modal fade hide" id="modalPopUpConfirm" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body text-left">
                    {props.message}
                </div>
                <div className="modal-footer modal-footer-confirm">
                    <button type="submit" className="btn btn-primary btn-sm" onClick={() => { props.callBack(); $("#closeConfirm").click() }}>
                        {props.actionButtonText}
                    </button>
                    <button id="closeConfirm" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                        Close
                                </button>
                </div>
            </div>
        </div>
    </div>
);
