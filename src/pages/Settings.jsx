import { bgImg } from "../asset/bg"
import Menu from "../Components/Menu"
import SettingsComp from "../Components/SettingsComp"
import styles from '../Styles/settings.module.css'
export default function Settings() {
    return (
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className={styles.bg2}>
                <Menu />
                <SettingsComp />
            </div>
        </div>
    )
}