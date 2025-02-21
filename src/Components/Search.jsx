import styles from '../Styles/addfriends.module.css';
export default function Search() {
    return (
        <div>
            <div className={styles.search}>
                <input type="text" placeholder='Enter Username or Email'/>
                <img src="../src/asset/images/send 2.png" alt="" />
            </div>
        </div>
    );
}