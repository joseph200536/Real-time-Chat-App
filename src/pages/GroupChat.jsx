import Chat from "../Components/Chat";
import GroupComp from "../Components/GroupComp";
import Menu from "../Components/Menu";
import styles from '../Styles/chat.module.css'
import { bgImg } from '../asset/bg.js'
export default function GroupChat() {
    return(
        <div>
            <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
                <GroupComp />
                <Chat />
            </div>
        </div>
        </div>
    )
}