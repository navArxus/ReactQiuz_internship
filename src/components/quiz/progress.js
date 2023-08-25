import React, { useContext } from 'react'
import styles from './progress.module.css'
import QuestionContext from '../store/question_context';



const Progress = (props) => {
    const questionCtx = useContext(QuestionContext)


    return (
        <div className={styles.progress}>
            <div className={styles.progress_up}>
                <p><i>Total time avaiable <br /> 10 Minutes </i></p>
                <p><i>Total question : {questionCtx.question.length}</i></p>
                <p><i>Answered : {questionCtx.totalans}</i></p>
                <p><i>Note : Submit when you have done </i></p>
            </div>
            <div className={styles.progress_down}>
                <button className={styles.reset}  onClick={questionCtx.resetHandler} >Reset all</button>
                <button className={styles.submit} onClick={questionCtx.openModal}>Submit</button>
            </div>
        </div>
    )
}
export default Progress