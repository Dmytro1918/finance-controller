import styles from './index.module.css'

const Sidebar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <p> Item 1 </p>
                    <p> Item 2 </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar