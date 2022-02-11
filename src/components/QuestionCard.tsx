import React, { useState } from 'react'
import { QuizPropsType } from '../types/quiz_types'
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";


const QuestionCard: React.FC<QuizPropsType> = ({ question, options, callBack}) => {

    let [selectedAns, setSelectedAns] = useState('');

    const handleSelection = (ev: any) => {

        setSelectedAns(ev.target.value);
    }
    const { ref } = useWebAnimations<HTMLDivElement>({ ...zoomIn });

    return (
        <div className='question-container'ref={ref} >
            <div className='question'>
                <h4>{question}</h4>
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callBack(e, selectedAns)}>
            
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type='radio'
                                        name='opt'
                                        required
                                        value={opt}
                                        checked={selectedAns === opt}
                                        onChange={handleSelection}
                                        
                                    />
                                    {opt}
                                </label>

                            </div>
                        )

                    })
                }
                <input id='bt' type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard



