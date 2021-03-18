/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextWrapper = props => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LanguageContext.Provider
      value={{
        isChecked,
        setIsChecked,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextWrapper;
