import React from "react";
import { useStateContext } from "../context/StateContext";

const Portfolio = () => {
  const { theme } = useStateContext();
  return (
    <>
      <div data-theme={theme}></div>
    </>
  );
};

export default Portfolio;
