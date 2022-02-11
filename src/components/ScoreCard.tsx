import React from 'react'
import { ScorePropstype } from './../types/quiz_types'

const ScoreCard:React.FC<ScorePropstype> = ({score, callback}) => {

    
    return (
        <div className='score-card'>
           <h4>Quiz is completed...</h4>
           <h3>Your Score is {score} out of 5</h3> 
           <button onClick={callback}>RESTART QUIZ</button>
        </div>
    )
}

export default ScoreCard;
