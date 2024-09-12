import styles from './WalletCreationPage.module.css'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';
import { useContext } from 'react';
import { WalletDataContext } from '../../components/context/walletContext';


const today = dayjs()

export interface WalletData {
    date: Date | null; 
    name: string;
    description: string;
}


const CreateWallet = () => {
const walletContext=useContext(WalletDataContext)
if(!walletContext){
    return(
        <div>Loading...</div>
    )
}


const {setWalletDate,setWalletName,setWalletDescription, walletData} = walletContext
const handleWallet = ():void =>{ 
   
}

const handleDateChange = (newDate: Dayjs|null) => {
    newDate?setWalletDate(newDate.toDate()):setWalletDate(null)
}
    return (
        <>
            <div className={styles.parentDiv}>
                <div></div>
                <div>
                    <h1 className={styles.header}> Enter data for your Wallet</h1>
                    <div className={styles.row}>
                        <div className={styles.rowDiv}>
                            <form>
                                <input 
                                    className={styles.input} 
                                    placeholder="Wallet Name" 
                                    value={walletData.name}
                                    onChange={(e)=>setWalletName(e.target.value)}
                                />
                            </form>
                        </div>
                        <div className={styles.rowDiv}>
                            <div className={styles.datePicker}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker 
                                        label='Choose the date' 
                                        maxDate={today}
                                        onChange={handleDateChange}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>    
                    <div className={styles.textArea}>
                        <textarea 
                            value={walletData.description}
                            onChange={(e)=> setWalletDescription(e.target.value)}
                            className={styles.textField}>
                            Please describe the wallet here 
                        </textarea>
                        <button type="button" className={styles.acceptButton} onClick={handleWallet}>
                            Add wallet
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreateWallet