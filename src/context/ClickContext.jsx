import { createContext, useState, useContext } from "react";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const [click, setClick] = useState(1);

  return (
    <ClickContext.Provider value={{ click, setClick }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
