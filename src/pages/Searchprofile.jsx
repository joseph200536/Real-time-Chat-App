import AddfrdComp from "../Components/AddfrdComp";
import { bgImg } from "../asset/bg";
import Menu from "../components/Menu";
import styles from "../Styles/addfriends.module.css";
import SearchprofComp from "../Components/SearchprofComp";
export default function Searchprofile() {
    return (
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
            <Menu/>
            <AddfrdComp/>
            <SearchprofComp/>
        </div>
        </div>
    );
}