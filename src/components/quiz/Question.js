import React, { useContext, useReducer, useEffect, useState } from 'react'
import QuestionContext from '../store/question_context';
import styles from "./Question.module.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const defaultValue = {
    id: 0,
    question: "",
    option_1: "",
    option_2: "",
    option_3: "",
    option_4: "",
}

const Question = props => {
    const questionCtx = useContext(QuestionContext);
    const [option, setoption] = useState(0);
    const [ques, setques] = useReducer((state, action) => {
        return {
            id: action.id,
            question: action.question,
            option_1: action.option_1,
            option_2: action.option_2,
            option_3: action.option_3,
            option_4: action.option_4,
        }
    }, defaultValue)
    useEffect(() => {
        let temp = questionCtx.question.filter((ques) => Number(ques.id) === Number(questionCtx.currentShow))
        setques({
            id: temp[0].id,
            question: temp[0].question,
            option_1: temp[0].option.one,
            option_2: temp[0].option.two,
            option_3: temp[0].option.three,
            option_4: temp[0].option.four,
        })
        setoption(questionCtx.answered[questionCtx.currentShow])
    }, [questionCtx])

    const optionclickHandler = (val) => {
        setoption(val)
    }
    const resetHandler = () => {
        setoption(0)
    }
    const changeHandler = val => {
        questionCtx.questionChangeHandler(val)
    }
    const submitClickHandler = (val) => {
        questionCtx.user_answer_handler(val)
        if (questionCtx.currentShow === questionCtx.question.length) {
            // console.log(questionCtx.user_answer)
            toast.success('Saved you can submit now', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            changeHandler(questionCtx.currentShow + 1)
        }
    }

    return (
        <React.Fragment>
            <ToastContainer/>
            <div className={styles.question_container}>
                <h2>Question {ques.id} &nbsp; {ques.question}</h2>
                <h3 className={(option === 1) ? styles.clicked : ""} onClick={optionclickHandler.bind(null, 1)} >{ques.option_1}</h3>
                <h3 className={(option === 2) ? styles.clicked : ""} onClick={optionclickHandler.bind(null, 2)} >{ques.option_2}</h3>
                <h3 className={(option === 3) ? styles.clicked : ""} onClick={optionclickHandler.bind(null, 3)} >{ques.option_3}</h3>
                <h3 className={(option === 4) ? styles.clicked : ""} onClick={optionclickHandler.bind(null, 4)} >{ques.option_4}</h3>
            </div>
            <section>
                {(questionCtx.currentShow === 1) ? <div></div> : <button className={styles.prev} onClick={changeHandler.bind(null, questionCtx.currentShow - 1)} ><KeyboardBackspaceIcon />Prev</button>}

                <div className={styles.nav_ques_right}>
                    <button className={styles.reset} onClick={resetHandler} >Reset</button>
                    {(questionCtx.currentShow === questionCtx.question.length) ? "" : <button className={styles.skip} onClick={changeHandler.bind(null, questionCtx.currentShow + 1)}>Skip</button>}
                    <button className={styles.confirm} onClick={submitClickHandler.bind(null, [ques.id, option])} >{(questionCtx.question.length === questionCtx.currentShow) ? "Save All" : "Save and Next"}</button>
                </div>
            </section>
        </React.Fragment>
    )
}
// on click confirm show_current +1 answered ma push ho jayega 
// skip ma bus show_current + 1 hoga
// prev ma show_current -1 
// agar -1 -1 karta karta starting ma pouch gya tho toast sa notify kar dega  
// agar +1 +1 karta karta end ma pouch gya tho toast sa notify kar dega  
// bind kr ka bhi bhej sakta hai like jo Allquestion ma karega aur phir vo value jo bind ka sth ahege use set kar da ga like 
// confirm ma .bind(null,ctx.id+1) 
// prev ma .bind(null,ctx.id-1) 
// Allquestion ma .bind(null,ctx.id ya props.id jo is show ho rahi hai )
export default Question;