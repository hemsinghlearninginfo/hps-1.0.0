import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from './Icon';
import $ from 'jquery';

class ModalConfirm extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="modalPopUpConfirm" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-left">
                                {this.props.message}
                            </div>
                            <div className="modal-footer modal-footer-confirm">
                                <button type="submit" className="btn btn-primary btn-sm" onClick={() => { this.props.callBack(); $("#closeConfirm").click() }}>
                                    {this.props.actionButtonText}
                                </button>
                                <button id="closeConfirm" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { modalAlert } = state;
    return {
        modalAlert
    };
}

const connectedModalConfirm = connect(mapStateToProps)(ModalConfirm);
export { connectedModalConfirm as ModalConfirm }; 
