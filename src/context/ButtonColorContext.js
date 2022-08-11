import React from 'react';
import { createContext, useState } from "react";

const ButtonColorContext = createContext();

export const ButtonColorContextProvider = ( { children } ) => {

  const [color, setColor] = useState("#ffa700");

  const handleChangeColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <ButtonColorContext.Provider value={{
      color,
      handleChangeColor
    }}>
      {children}
    </ButtonColorContext.Provider>
  )
}

export default ButtonColorContext