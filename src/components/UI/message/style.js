import styled from 'styled-components';
import colors from '../../../common/colors';

export const MessageStyle = styled.div`
    color: ${colors.darkerGrey};
    padding: 15px 20px;
    display: flex;
    font-size: 16px;

    &.user-message {
        flex-direction: row-reverse;
        text-align: right;
    }

    span {
        display: inline-block;
        margin: auto 10px auto 10px;
    }

    .fa-robot, .fa-user {
        color: ${colors.darkBlue};
        width: 30px;
        height: 22px;
    }
`;