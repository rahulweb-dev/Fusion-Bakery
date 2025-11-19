'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [select, setSelect] = useState('Chocolate');

  useEffect(() => {
    const saved = sessionStorage.getItem('selectedState');
    if (saved) setSelect(saved);
  }, []);

  const updateSelect = (value) => {
    setSelect(value);
    sessionStorage.setItem('selectedState', value);
  };

  return (
    <SelectContext.Provider value={{ select, updateSelect }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  return useContext(SelectContext);
}
