import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const openDetail = (id) => {
    setIsDetailOpen(true);
    setCurrentId(id);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isDetailOpen,
        openDetail,
        closeDetail,
        currentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
