import React, { createContext, useState, useContext } from "react";

const KycContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <KycContext.Provider value={{ data, setValues }}>
      {children}
    </KycContext.Provider>
  );
};

export const useData = () => useContext(KycContext);
