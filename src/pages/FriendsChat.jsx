import Chat from "../Components/Chat.jsx";
import FriendComp from "../Components/FriendComp";
import Menu from "../Components/Menu";
import styles from "../Styles/chat.module.css";
import { bgImg } from '../asset/bg.js'
export default function FriendsChat() {
    return(
        <div>
            <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
                <FriendComp />
                <Chat />
            </div>
        </div>
        </div>
    );
}