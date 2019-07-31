import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from './Icon';
import $ from 'jquery';

class ModalConfirm extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="modalPopUpConfirm" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.heading}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-left">
                                {this.props.message}
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary btn-sm" onClick={()=> {this.props.callBack();$("#closeConfirm").click()}}>
                                    <Icon type='save' /> Save FAQ
                                </button>
                                <button id="closeConfirm" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                                    <Icon type='close' /> Close
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
