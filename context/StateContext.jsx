import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const themes = ["light", "dark", "synthwave",  "cyberpunk"];
  const [theme, setTheme] = useState("synthwave");
  return (
    <Context.Provider value={{ themes, theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
