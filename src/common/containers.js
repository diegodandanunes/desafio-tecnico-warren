import styled from 'styled-components';
import breakpoints from './breakpoints';

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: ${breakpoints.sm}) {
        max-width: 100%;
    }

    @media (min-width: ${breakpoints.md}) {
        max-width: 720px;
    }

    @media (min-width: ${breakpoints.lg}) {
        max-width: 960px;
    }

    @media (min-width: ${breakpoints.xl}) {
        max-width: 1140ppx;
    }
`;

export const ContainerFluid = styled.div`
    width: 100%;
`;

export const ContainerInput = styled.div`
    position: relative;
    /* margin-top: -158px; */
`;