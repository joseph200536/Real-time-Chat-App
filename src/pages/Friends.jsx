import FriendComp from '../Components/FriendComp.jsx'
import Menu from '../Components/Menu.jsx'
import styles from '../Styles/friends.module.css'
import { bgImg } from '../asset/bg.js'
export default function Friends() {
    return(
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
                <FriendComp />
            </div>
        </div>
    )
}