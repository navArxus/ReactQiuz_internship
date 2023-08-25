import React from 'react';

const QuestionContext = React.createContext({
    question: [],
    currentShow: {},
    answered: [],
    totalans: 0,
    user_answer_handler: () => { },
    questionChangeHandler: () => { },
    resetHandler: () => { },
    submitHandler: () => {},
    showModal: false,
    closeModal : () =>{},
    openModal : () =>{}
})
export default QuestionContext