import React ,{useContext} from 'react'
import styles from './quiz.module.css'
import Allquestion from "./Allquestion"
import Question from './Question'
import Progress from './progress'
import Modal from '../Modal/Modal';
import QuestionContextS from '../store/question_context'

const Quiz = props => {
    // const [isModalopen,setisModalopen] = useState(false)

    // const openModal = () => {
    //     setisModalopen(true)
    // }
    // const closeModal = (val) => {
    //     setisModalopen(false)
    // }

    const questionCtx = useContext(QuestionContextS)

    return (
        <React.Fragment>
                {questionCtx.showModal?<Modal/>:""}
                <div className={styles.quiz_container}>
                    <div className={styles.ALLquestion}>
                        <Allquestion />
                    </div>
                    <div className={styles.question}>
                        <Question />
                    </div>
                    <div className={styles.progress}>
                        <Progress />
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Quiz;