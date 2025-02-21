import styles from '../Styles/addfriends.module.css';
import Search from './Search';
import Usersearch from './Usersearch';
export default function AddfrdComp() {
    return (
        <div className={styles.addfrd}>
            <Search />
            <Usersearch />
        </div>
    );
}