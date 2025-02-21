import { bgImg } from "../asset/bg";
import styles from "../Styles/addfriends.module.css";
import Menu from "../components/Menu";
import AddfrdComp from "../Components/AddfrdComp";
export default function AddFriends() {
    return (
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu/>
                <AddfrdComp/>
                </div>
        </div>
    );
}