import styled from 'styled-components';

import colors from '../../../common/colors';

export const SuccessBoxStyle = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: ${colors.darkestBlue};
    display: none;
    color: ${colors.lighterBlue};

    h1 span, h3 span {
        color: #fff;
    }

    &.fade-out {
        animation: fadeOut .5s linear;
    }

    &.fade-in {
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn .5s linear;
    }


    @keyframes fadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

`