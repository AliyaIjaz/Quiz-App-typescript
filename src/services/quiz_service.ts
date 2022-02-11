import {QuestionType, Quiz} from './../types/quiz_types';

const shuffleArray = (array:any[]) => 
[...array].sort(() => Math.random() - 0.5);


export const getQuizDetails = async(totalQuestions:number, level:String):Promise<Quiz[]>=>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}`);
    let { results } = await res.json();
    //return results;
    const quiz:Quiz[] = results.map((questionObj:QuestionType)=>{
        return {
            question:questionObj.question,
            answer:questionObj.correct_answer,
            option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}