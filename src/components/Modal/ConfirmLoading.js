import React from 'react'
import styles from './ConfirmLoading.module.css'

const Circularloading = (props) => {
    const homePageHandler = () =>{
        window.location.reload()
    }
    return (
        <div className={styles.container}>
            <h1>You got,</h1>
            <p><span> <i>{props.correctAnsM}</i> </span> out of {props.totalques}</p> 
            <button onClick={homePageHandler}>Go to home page</button>
        </div>
    )
}

export default Circularloading