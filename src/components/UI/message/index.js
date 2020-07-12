import React from 'react';

import { MessageStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

export const Message = props => {
    return (
        <MessageStyle className={props.isUser ? 'user-message' : ''}>
            <FontAwesomeIcon icon={props.isUser ? faUser : faRobot} /><span>{props.message}</span>
        </MessageStyle>
    );
};