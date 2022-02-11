
export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}


export type Quiz = {
    question:string
    answer:string
    option:string[]
}

export type QuizPropsType = {
    question:string
    options:string[]
    callBack:(e:React.FormEvent<EventTarget>, ans:string)=>void
}

export type ScorePropstype = {
    score:number
    callback:(e:any)=> void
  }