import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ScoresList, ScoreLI } from '../styled/HighScores';
import { StyledTitle, SpinnerContainer, Number } from '../styled/Random';

export default function HighScores() {

    const [highScores, setHighScores] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadHighScores = async () => {
            try {
                setLoading(true);
                const res = await fetch('/.netlify/functions/getHighScores');
                const scores = await res.json();
                setHighScores(scores);
                setLoading(false);
            }catch(err){
                setLoading(false);
                console.error(err);
            }
        };
        loadHighScores();
    }, [highScores.length]);
    return (
        <div>
            <StyledTitle>HighScores</StyledTitle>
            {loading ? <SpinnerContainer><CircularProgress /></SpinnerContainer> : (
                <ScoresList>
                {highScores?.length ? highScores?.map((score, index) => (
                    <ScoreLI key={score.id}>
                        <Number>{index + 1}.</Number> {score.fields.name} - {score.fields.score}
                    </ScoreLI>
                )) : null}
            </ScoresList>
            )}
        </div>
    );
}