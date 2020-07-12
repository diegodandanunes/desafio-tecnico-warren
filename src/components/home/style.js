import styled from 'styled-components';
import colors from '../../common/colors';
import breakpoints from '../../common/breakpoints';

export const HomeForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;

    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }

    form {
        width: 70%;
        margin: auto;

    }

    .fa-comment {
        color: ${colors.darkGrey};
        position: absolute;
        top: 17px;
        left: 17px;
    }

    .submit-button {
        position: absolute;
        top: 17px;
        right: 17px;
        cursor: pointer;
        color: ${colors.darkerBlue};
        border: none;
        background-color: transparent;
        padding: 0;
    }

    .submit-button:disabled {
        opacity: 0.3;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    input[type="text"], input[type="number"] {
        display: block;
        width: 100%;
        border-radius: 0 0 12px 12px;
        border: 1px solid #ccc;
        background-color: ${colors.lighterGrey};
        padding: 15px 0px;
        color: ${colors.darkGrey};
        transition: all 0.3s;
        text-indent: 40px;
        box-shadow: 0px 14px 29px -4px rgba(0,0,0,0.32);

        @media (max-width: 540px) {
            width: 100%;
            padding: 15px 0;
            text-indent: 36px;
        }

        ::placeholder {
            color: #918E9F;
            opacity: 1;
        }

        :focus {
            border-bottom: 3px solid ${colors.darkBlue};
            outline: none;
            background-color: #f2f2f2;
        }
    }
`;

export const DiegoNunes = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;

    @media(max-width: ${breakpoints.sm}) {
        display: none;
    }

    .background {
        height: 100%;
        width: 100%;
        position: absolute;
        background: linear-gradient(135deg, ${colors.darkerBlue} 0%, #9DC6E4 100%); 
        z-index: 0;
        transform: scale(1.1,1.3);
        transform: translateX(-10px);
        border-radius: 0 96% 0% 0;
    }

    .text {
        z-index: 2;
        margin-left: 12%;

        @media(min-width: ${breakpoints.lg}) {
            margin-left: 40%;
        }
    }

    img {
        max-width: 100px;
    }

    h3 {
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-weight: lighter;
    }

    h3 span {
        font-weight: 800;
    }
`;

export const MessageBox = styled.div`
    border-radius: 12px 12px 0 0 ;
    border: 1px solid #ccc;
    border-bottom: none;
    height: 500px;
    width: 70%;
    overflow: auto;
    box-shadow: 0px 14px 29px -4px rgba(0,0,0,0.32);
    margin: auto;
`

export const ContainerRadio = styled.div`
    background-color: ${colors.lighterGrey};
    box-shadow: 0px 14px 29px -4px rgba(0,0,0,0.32);
    border-radius: 0 0 12px 12px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    min-height: 47px;
    justify-content: space-around;

    label {
        color: ${colors.darkGrey}
    }

    div {
        width: 70%;
        text-align: center;
        margin: auto;
    }
`