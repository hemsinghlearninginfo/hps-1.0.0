import React from 'react';
import { Icon } from './Icon';
export const ModalPopUpButton = (props) => (
    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal"
        data-backdrop="static" data-keyboard="false"
        data-target="#modalPopUp" onClick={props.action}>
        {props.iconType ? <Icon type={props.iconType} /> : ''}{props.children}
    </button>
);

