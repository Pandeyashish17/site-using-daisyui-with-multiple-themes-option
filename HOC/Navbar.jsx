import React from "react";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { themes, setTheme, theme } = useStateContext();
  return (
    <>
      <div className="navbar bg-base-100" data-theme={theme}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Ashish</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
               Theme
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {themes.map((theme, i) => {
                return (
                  <li key={i} className="m-1">
                    <button
                      className="btn btn-outline btn-accent"
                      onClick={() => {
                        setTheme(theme);
                      }}
                    >
                      {theme}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
