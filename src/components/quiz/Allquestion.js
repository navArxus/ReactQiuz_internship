import React, { useContext} from 'react'
import QuestionContext from '../store/question_context';
import styles from './Allquestion.module.css'

const Allquestion = props => {
    const questionCtx = useContext(QuestionContext)
    const clickHandler = (val) => {
        questionCtx.questionChangeHandler(val)
    }
    // let answereQues = [] ;
    // useEffect(()=>{
    //     answereQues = questionCtx.answered
    //     console.log(questionCtx.answered)
    // },[questionCtx])
    return (
        <div className={styles.overall}>
            <div className={styles.container} >
                {questionCtx.question.map((ques) => {
                    return (
                        <h2
                            key={ques.id}
                            
                            className={(questionCtx.answered[ques.id] >0) ? styles.green  : ""}
                            onClick={clickHandler.bind(null, ques.id)}
                        >{ques.id}</h2>
                    )
                })}
            </div>
            <div className={styles.instruction}>
                <div className={styles.colorins}></div>
                <p> : Answered</p>
            </div>
        </div>
    )
}

export default Allquestion;