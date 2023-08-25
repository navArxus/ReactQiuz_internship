import React, { useContext } from "react"
import QuestionContext from "../store/question_context"
import styles from './Overlay.module.css'


const Result = (props) => {
    const questionCtx = useContext(QuestionContext)
    return (
        <div className={styles.overlay_confirm_cont}>
            <h1>Are you sure?</h1>
            <p>After confirming the message you can not change the answer. You redirect to evaulation or showed the result  </p>
            <div className={styles.overlay_button}>
                <button className={styles.disagreebutton} onClick={questionCtx.closeModal} >Disagree</button>
                <button className={styles.agreebutton} onClick={props.agreeHandler}>Agree</button>
            </div>
        </div>
    )
}

export default Result