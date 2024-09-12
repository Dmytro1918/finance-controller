/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';
import styles from'./App.module.css';
import DatePicker_ from './components/datePicker/index.tsx';
import InputMoney from './components/inputMoney/index.tsx'
import AddNewWallet from './pages/addNewWalletPage/AddNewWallet.tsx';
import { WalletProvider } from './components/context/walletContext.tsx';

function App() {
 
  const[inputValue, setInputValue] = useState<string>('')
  const[descrText, setdescrText] = useState<string>('')

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value)}
  const onDescrChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdescrText(e.target.value)}

  return (
    <>

        <div className={styles.container}>
          <div>
            <DatePicker_ ></DatePicker_>
          </div>
          <div>
            <InputMoney
              label='amount' 
              value={inputValue}
              onChange={onHandleChange}
              placeholder='Type here needed amount'
            />
          </div>
          <div>
            <InputMoney
              label='description'
              value={descrText}
              onChange={onDescrChange}
              placeholder='Put description for your expenses'
            />
          </div>
  
          <div>
            <AddNewWallet/>
          </div>
        </div>
    </>
  )
}

export default App
