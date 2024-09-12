import { FC,ChangeEvent } from "react";
import styles from './index.module.css'

interface inputMoneyProps {
    label: string,
    placeholder?: string,
    value: string,
    onChange:(e: ChangeEvent<HTMLInputElement>)=> void;
}

const InputMoney: FC<inputMoneyProps> = ({ label,value,placeholder,onChange }) => {
    return (
        <div className={styles.sumInput}>
            <label>
                {label}
                <input 
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default InputMoney;