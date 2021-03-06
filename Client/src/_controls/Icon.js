import React from 'react';
import {
    FaRegEdit, FaPlusSquare, FaSave, FaWindowClose, FaEnvelope, FaUserTie,
    FaSignOutAlt, FaSignInAlt, FaAddressCard, FaUserCog, FaQuestion, FaHeart,
    FaTrash, FaCaretSquareUp, FaUserPlus, FaFacebook, FaLinkedin, FaUpload,
    FaFile, FaTimesCircle, FaTools, FaCloudUploadAlt, FaKey, FaInfo, FaEnvelopeSquare,
    FaPaperPlane, FaCaretUp, FaCaretDown, FaSearchPlus, FaToolbox, FaMoneyBill
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
        case 'REGISTER':
            return <FaUserPlus />
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
        case 'UP':
            return <FaCaretSquareUp />
        case 'FACEBOOK':
            return <FaFacebook />
        case 'LINKEDIN':
            return <FaLinkedin />
        case 'UPLOAD':
            return <FaUpload />
        case 'FILE':
            return <FaFile />
        case 'CIRCLECLOSE':
            return <FaTimesCircle />
        case 'TOOLS':
            return <FaTools />
        case 'CLOUDUPLOAD':
            return <FaCloudUploadAlt />
        case 'KEY':
            return <FaKey />
        case 'INFO':
            return <FaInfo />
        case 'MESSAGE':
            return <FaEnvelopeSquare />
        case 'SENDMESSAGE':
            return <FaPaperPlane />
        case 'ASC':
            return <FaCaretUp />
        case 'DESC':
            return <FaCaretDown />
        case 'SEARCHADD':
            return <FaSearchPlus />
        case 'SETTING':
            return <FaToolbox />
        case 'TRADE':
            return <FaMoneyBill />
        default:
            return <></>;
    }
}
