import React, { useContext, useState } from "react"
import styles from './Overlay.module.css'
import QuestionContext from "../store/question_context"
import Overlayconfirm from "./Overlay_result"
import ConfirmLoading from './ConfirmLoading'

const Confirm = (props) => {
    const questionCtx = useContext(QuestionContext)
    const [agree, setAgree] = useState(false)
    let [correctAns, setcorrentAns] = useState(0)
    let [resultModal, setresultModal] = useState(false)


    const solutionCheck = () =>{
        let useranswer = questionCtx.answered
        let answerQues = questionCtx.question.map((item)=>{
            return item.answer
        })
        answerQues.unshift(undefined)

        for (let i = 1; i <= questionCtx.question.length; i++) {
            if (Number(useranswer[i]) === Number(answerQues[i])) {
                setcorrentAns(++correctAns)
            }
        }
    }

    const agreehandlerM = () => {
        setAgree(true);
        solutionCheck()
        console.log(correctAns)
        setresultModal(true)
    }


    return (
        <div className={styles.overlay_confirm_cont}>
            {(agree)?"":<Overlayconfirm agreeHandler={agreehandlerM}/>}
            {(resultModal)?<ConfirmLoading totalques={questionCtx.question.length} correctAnsM={correctAns}/>:""}
        </div>
    )
}

export default Confirm