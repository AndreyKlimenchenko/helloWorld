import React from 'react';
import { CTA } from '../styled/CTA';
import { GifImg, StyledTitle } from '../styled/Random';
import typing from '../assets/typing-fast.gif';

export default function Home() {
    return (
        <div>
            <StyledTitle>Готовы печатать?!</StyledTitle>
            <CTA to="/game">
                Нажмите, чтобы начать!
            </CTA>
             <GifImg src={typing} alt="typing"/>
        </div>
    );
}
