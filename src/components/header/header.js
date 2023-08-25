import React from "react";
import SwitchIcon from "./SwitchIcon"
import styles from "./header.module.css"
import SearchIcon from '@mui/icons-material/Search';



const Header = props => {

    const checkinghandler = () => {
        console.log("working")
    }


    return (
        <nav>
            <div className={styles.nav_left}>
                <h2>ReactQuiz</h2>
                <div className={styles.secound_comp}>
                    <small> &nbsp;v1.0.1</small>
                </div>
            </div>
            <div className={styles.nav_right}>
                <SwitchIcon onclick={checkinghandler} />
                <div className={styles.nav_left_search}>
                    <SearchIcon />
                    <input type="text" placeholder="Search ..." />
                </div>
                <button>Create own</button>
            </div>
        </nav>
    )
}
export default Header