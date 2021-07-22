import React from 'react';
import { CTA } from '../styled/CTA';
import { Accent, StyledTitle } from '../styled/Random';

export default function Home() {
    return (
        <div>
            <StyledTitle>Готовы печатать?!</StyledTitle>
            <CTA to="/game">
                Нажмите, чтобы начать!
            </CTA>
        </div>
    );
}
