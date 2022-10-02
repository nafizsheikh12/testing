import React, { useState } from "react";
import 'rsuite/styles/index.less'
import { DatePicker, Stack } from 'rsuite';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import './InputDatePicker.scss'

const predindRange = [
 
]

const InputDatePicker = () => {
  const [value, setvalue] = useState(null);
  console.log(value)
  return (
  
      <>
       <DatePicker className="date__input"
                           fullWidth/>
      </> 
  
  );
};

export default InputDatePicker;
