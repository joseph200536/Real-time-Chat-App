import Menu from '../Components/Menu.jsx'
import styles from '../Styles/home.module.css'
import { bgImg } from '../asset/bg.js'
export function Home() {
    return (
        <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
            </div>
        </div>
    )
}