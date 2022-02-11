import React, { useEffect, useState } from 'react';
import { getQuizDetails } from './services/quiz_service';
import './App.css';
import { Quiz } from './types/quiz_types';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';


function App() {

  let [quiz, setQuiz] = useState<Quiz[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [restart, setRestart] = useState(true);
  let [isActive, setActive] = useState(true);

 

  useEffect(() => {
    async function fetchData() {
      const questions: Quiz[] = await getQuizDetails(5, 'easy');
      setQuiz(questions);
    }
    fetchData();
  }, [restart]);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currentQuestion: Quiz = quiz[currentStep];
    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length-1)
      setCurrentStep(++currentStep);
    else {
      setCurrentStep(0);
      setActive(!isActive);
    }
  }

  const handleRestart = (e:any) => {
    e.preventDefault();
    setCurrentStep(0);
    setScore(0);
    setQuiz([]);
    setRestart(!restart);
    setActive(!isActive);
  }
    if (!quiz.length)
      return (
        <div className="App">
        <h2>Loading....</h2>
        </div>
      )
    return (
      <div className="App">
        <h2>Quiz App</h2>
        <div className={isActive ? 'show' : 'hide'} >
          <QuestionCard
            options={quiz[currentStep].option}
            question={quiz[currentStep].question}
            callBack={handleSubmit}
          />
        </div>
        <div className={isActive ? 'hide' : 'show'}>
          <ScoreCard
            score={score}
            callback={handleRestart}
          />
        </div>
      </div>
    );
}

  export default App;
