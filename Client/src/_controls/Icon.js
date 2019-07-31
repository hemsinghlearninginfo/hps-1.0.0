import React from 'react';
import {
    FaRegEdit, FaPlusSquare, FaSave, FaWindowClose, FaEnvelope, FaUserTie,
    FaSignOutAlt, FaSignInAlt, FaAddressCard, FaUserCog, FaQuestion, FaHeart,
    FaTrash
} from 'react-icons/fa';
export const Icon = (props) => (
    <>{getIcon(props.type)}</>
);

function getIcon(type) {
    switch (type.toUpperCase()) {
        case 'EDIT':
            return <FaRegEdit />;
        case 'ADD':
            return <FaPlusSquare />;
        case 'SAVE':
            return <FaSave />;
        case 'CLOSE':
            return <FaWindowClose />;
        case 'EMAIL':
            return <FaEnvelope />;
        case 'LOGGEDINUSER':
            return <FaUserTie />
        case 'LOGIN':
            return <FaSignInAlt />
        case 'LOGOUT':
            return <FaSignOutAlt />
        case 'PROFILE':
            return <FaAddressCard />
        case 'USERSETTING':
            return <FaUserCog />
        case 'FAQ':
            return <FaQuestion />
        case "HEART":
            return <FaHeart />
        case 'DELETE':
            return <FaTrash />
        default:
            return <></>;
    }
}
