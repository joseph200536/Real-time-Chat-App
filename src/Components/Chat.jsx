import {useLocation } from 'react-router-dom'
import styles from '../Styles/chat.module.css'
import Head from './Head'
import TypeBar from './TypeBar'
export default function Chat() {
    const location = useLocation();
    const {name,img} = location.state || {};
    return(
        <div className={styles.chat}>
            <Head name={name} img={img} />
            <TypeBar />
        </div>
    )
}