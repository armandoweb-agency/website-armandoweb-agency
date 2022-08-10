import React from 'react';
import { createContext, useState } from "react";

const ButtonColorContext = createContext();


export const ButtonColorContextProvider = ({ children }) => {

  const [value, setValue] = useState("#ffa700");

  console.log(value)

  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <ButtonColorContext.Provider value={{
      value,
      handleChange
    }}>
      { children }
    </ButtonColorContext.Provider>

  )
}

export default ButtonColorContext