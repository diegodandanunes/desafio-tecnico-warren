import React from 'react';

import { SuccessBoxStyle } from './style';

export const SuccessBox = props => {
    return (
        <SuccessBoxStyle className={`${props.active ? 'z-5 fade-in' : ''}`}>
            <div>
                <h1>Obrigado, <span>{props.profile.name}</span></h1>
                <h3>O perfil identificado foi: <span>{props.profile.investmentProfile.riskToleranceProfile}</span></h3>
                <h3>Sua tolerância para riscos é: <span>{props.profile.investmentProfile.computedRiskTolerance}</span></h3>
            </div>
        </SuccessBoxStyle>
    )
}
