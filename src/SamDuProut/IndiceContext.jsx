// IndiceContext.js
import React, { createContext, useState } from 'react';

export const IndiceContext = createContext();

export const IndiceProvider = ({ children }) => {
  const [Indice, setIndice] = useState(0);

  return (
    <IndiceContext.Provider value={{ Indice, setIndice }}>
      {children}
    </IndiceContext.Provider>
  );
};