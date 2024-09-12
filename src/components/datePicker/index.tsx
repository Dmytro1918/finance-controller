import DatePicker from "react-date-picker";
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import styles from'./index.module.css'



type ValuePiece = Date|null;

type Value = ValuePiece|[ValuePiece, ValuePiece]

 const DatePicker_ = () => {
   
    const [value, setValue] = useState<Value>(new Date())
    const handleDateChange = (newDate: Value) => {
        setValue(newDate)
    }
    return (
        <div className={styles.datePicker}>
            <DatePicker 
            value={value}
            onChange={handleDateChange}
            locale='en-US'/>
        </div>
    )
}

export default DatePicker_