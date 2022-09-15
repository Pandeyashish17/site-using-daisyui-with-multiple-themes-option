import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  const [theme, setTheme] = useState("synthwave");
  return (
    <Context.Provider value={{ themes, theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
