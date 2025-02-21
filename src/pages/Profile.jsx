import Menu from '../Components/Menu';
import { bgImg } from '../asset/bg';
import ProfileComp from '../Components/ProfileComp';
import styles from '../Styles/Profile.module.css';
export default function Profile() {
    return (
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
                <ProfileComp />
                   </div>
                   </div>
    );
}