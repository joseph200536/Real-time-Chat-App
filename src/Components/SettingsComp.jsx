import styles from '../Styles/settings.module.css'
export default function SettingsComp() {
    return(
        <div className={styles.outer}>
            <div className={styles.settings}>
                <div className={styles.email}>
                    <p>Edit your Email</p>
                    <input type="text" />
                </div>
                <div className={styles.email}>
                    <p>Edit your Username</p>
                    <input type="text" />
                </div>
                <div className={styles.email}>
                    <p>Enable Dark Mode</p>
                    <button><img src="../src/asset/images/switch.png" alt="" /></button>
                </div>
            </div>
                <div className={styles.delete}>
                    <button>Delete Account</button>
                </div>
        </div>
    )
}