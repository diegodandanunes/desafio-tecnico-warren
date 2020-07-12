import React from 'react';
import { SpinnerStyle } from './style';

export const Spinner = () => {

    return (
        <SpinnerStyle>
            <div className="lds-dual-ring"></div>
        </SpinnerStyle>
    )
}

