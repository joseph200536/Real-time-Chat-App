import styles from '../Styles/chat.module.css'
export default function Head({name,img}) {
    return(
        <div className={styles.head}>
                <img src={img} alt="" />
                <p>{name}</p>
                <p></p>
        </div>
    )
}