import styled from 'styled-components';
import colors from '../../../common/colors';

export const SpinnerStyle = styled.div`
    .lds-dual-ring {
    display: inline-block;
    width: 45px;
    height: 45px;
    }

    .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.darkBlue};
    border-color: ${colors.darkBlue} transparent ${colors.darkBlue} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

    }

`;