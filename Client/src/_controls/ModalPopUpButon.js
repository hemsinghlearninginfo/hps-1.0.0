import React from 'react';
import { Icon } from './Icon';
export const ModalPopUpButton = (props) => (
    <button type="button" className={'btn btn-sm btn-' + (props.buttonType ? props.buttonType : 'primary')}
        data-toggle="modal"
        data-backdrop="static" data-keyboard="false"
        data-target={props.modalPopUp ? props.modalPopUp : "#modalPopUp"}
        onClick={props.action}>
        {props.iconType ? <Icon type={props.iconType} /> : ''}{props.children}
    </button>
);

