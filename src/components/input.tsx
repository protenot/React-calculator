import React, { useState } from 'react';

export type OnInputChange = (inputValue: string) => void;

export interface InputProps {
   onInputChange: OnInputChange;
    placeholderText: string;
    labelText:string;
  }

export const Input =({onInputChange, placeholderText, labelText}:InputProps)=>{
 const [inputValue,setInputValue] = useState('');
 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInputValue(newValue);

    onInputChange(newValue);
  };
return(
<label> {labelText}
<
    input
    type="text"
    className="input-value"
    placeholder={placeholderText}
    onChange={handleInputChange}
    value={inputValue}

/>
</label>)
}

