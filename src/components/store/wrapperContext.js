import React, { useReducer, useState } from 'react'
import WrapperContext from "./question_context"

const DUMMY_QUESTION = [
    {
        id: 1,
        question: "Which of the following is NOT an example of Intellectual Property rights?",
        option: {
            one: "Patent",
            two: "Trademark",
            three: "Password",
            four: " Industrial Design",
        },
        answer: 3,
    },
    {
        id: 2,
        question: "Computerized railway reservation system is an example of",
        option: {
            one: "Offline application",
            two: "Online application",
            three: "Both a and b",
            four: "None of the above",
        },
        answer: 2,
    },
    {
        id: 3,
        question: "While you are using Internet, you must be aware of",
        option: {
            one: "How to conduct ourselves",
            two: "How best to relate with others",
            three: "What ethics, morals & values to maintain",
            four: "All of these",
        },
        answer: 4,
    },
    {
        id: 4,
        question: "Using the material without the permission of the owner or creator is called",
        option: {
            one: "Law Violation",
            two: " Copyright Violation",
            three: "Cyber Law Violation",
            four: "None of these",
        },
        answer: 3,
    },
    {
        id: 5,
        question: " ______ implies repeatedly targeting someone with intentions to hurt or embrass ",
        option: {
            one: "Cybercrime",
            two: "CyberBulling",
            three: "Plagiarism",
            four: "Intellectual Property Rights",
        },
        answer: 2,
    },
    {
        id: 6,
        question: "Which of the following is a valid file extension for Notepad file?",
        option: {
            one: ".jpg",
            two: ".doc",
            three: ".text (POST) starts",
            four: ".txt",
        },
        answer: 4,
    },
    {
        id: 7,
        question: "How can an antivirus protect your device?",
        option: {
            one: "It can protect it from overheating.",
            two: "It can increase its performance.",
            three: "It can prevent data from getting corrupt.",
            four: "It can backup data.",
        },
        answer: 3,
    },
    {
        id: 8,
        question: "Which one of the following shortcut keys is used to paste a file?",
        option: {
            one: "Ctrl + c",
            two: "Ctrl + p",
            three: "Ctrl + v",
            four: "Ctrl + x",
        },
        answer: 3,
    },
    {
        id: 9,
        question: "Which of the following trap small children into inappropriate relations?",
        option: {
            one: "Online predators",
            two: "Worms",
            three: "Trojan Horse",
            four: "Anti-Virus",
        },
        answer: 1,
    },
    {
        id: 10,
        question: "Which of the following is the correct way to create a list using the lowercase letters? ",
        option: {
            one: "<ol alpha = 'a' >",
            two: "<ol type = 'a'>",
            three: "<ol letter = 'a'>",
            four: "None of the above",
        },
        answer: 2,
    }
]

const defaultUserAnswer = {
    answer: [],
}


const Wrapper = (props) => {
    const [currentQues, setcurrentQues] = useState(1)
    const [totalAnsweredM, settotalAnsweredM] = useState(0)
    const [showModalM, setshowModalM] = useState(false)

    const [userAnswer, setuserAnswer] = useReducer((state, action) => {
        if (action.type === "USER_ANSWER") {

            let newArr = [...state.answer]
            newArr[action.quesNo] = action.answer
            let countAns = 0;
            newArr.map((val) => {
                if (val === undefined || val === 0) {
                    return 0
                }
                else {
                    countAns++
                    return 0
                }
            })
            settotalAnsweredM(countAns)
            return { answer: newArr };
        }
    }, defaultUserAnswer)

    const questionChangeHandlerM = val => {
        setcurrentQues(val)
    }

    const user_answer_handlerM = val => {
        setuserAnswer({ type: "USER_ANSWER", quesNo: val[0], answer: val[1] })
    }

    const resetHandlerM = () => {
        window.location.reload();
    }
    const closeModalM = () => {
        setshowModalM(false);
    }
    const openModalM = () => {
        setshowModalM(true);
    }
    const submitHandlerM = () => {
        // setshowModalM(!showModalM);
    }
    let defaultValue = {
        totalans: totalAnsweredM,
        question: DUMMY_QUESTION,
        answered: userAnswer.answer,
        currentShow: currentQues,
        user_answer_handler: user_answer_handlerM,
        questionChangeHandler: questionChangeHandlerM,
        resetHandler: resetHandlerM,
        submitHandler: submitHandlerM,
        showModal: showModalM,
        closeModal: closeModalM,
        openModal:openModalM
    }

    return (
        <WrapperContext.Provider value={defaultValue} >
            {props.children}
        </WrapperContext.Provider>
    )
}

export default Wrapper;