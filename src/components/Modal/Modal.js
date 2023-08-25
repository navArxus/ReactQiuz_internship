import React from "react"
import ReactDOM from "react-dom"
import styles from "./Modal.module.css"
import OverlayConfirm from "./Overlay_confirm"

const MsgBox = (props) => {
    
    return (
        <React.Fragment>
             <div className={styles.Backdrop}></div> 
             <OverlayConfirm/> 
        </React.Fragment>
    )
}

const Modal = () => {
    return (
        <div>
            {ReactDOM.createPortal(<MsgBox />, document.getElementById("overlay"))}
        </div>
    )
}
export default Modal