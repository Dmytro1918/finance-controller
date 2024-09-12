import styles from './AddNewWallet.module.css'
import PayIcon from '..//../assets/PayIcon.svg'
import MenuIcon from '..//../assets/MenuIcon.svg'
import { useContext } from 'react'
import { WalletDataContext } from '../../components/context/walletContext'
import { Link } from 'react-router-dom'


const AddNewWallet = () => {
    const walletContext = useContext(WalletDataContext)
    if(!walletContext){
        return(
            <div>Loading...</div>
        )
    }
    const { walletData } = walletContext
    console.log(walletData);
    return (
        <>
            <div className={styles.parentDiv}>  
                <div className={styles.sidebar}>
                    <div className={styles.menuIcon}>
                        <div className={styles.listHeader}> Wallet List </div>
                        <img src={MenuIcon}  alt='icon' className={styles.icon}/>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.walletText}>
                                {walletData.name}
                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.walletText}>

                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.walletText}>
                                
                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.walletText}>
                            
                            </div>
                    </div>
                </div >
                <div className={styles.divForElement}>
                    <div className={styles.bgrndImage}></div>
                    <div className={styles.divButton}>
                        <Link to='/new'  className={styles.aLink}>
                            <img src={PayIcon} alt='wallet logo' className={styles.svgWallet}/>
                            <span>
                            Create wallet 
                            </span>
                        </Link>
                    </div>
                    <div className={styles.quote}>
                        The money you make is a symbol of the value you create.
                    </div>
                </div>
            </div>    
        </>
    )
}

export default AddNewWallet