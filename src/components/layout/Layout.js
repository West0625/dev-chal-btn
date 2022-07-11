import "./layout.css";
import { NavLink, Outlet } from "react-router-dom";
// import { useLocation } from "react";

const Layout = () => {
  const selColor = "selectColor";

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo">
          <NavLink to="/">
            <h1>
              <span>Dev</span>Challenge.io
            </h1>
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink
              to="/colors"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/typography"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spaces"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Spaces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buttons"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inputs"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Inputs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grid"
              className={({ isActive }) => (isActive ? selColor : undefined)}
            >
              Grid
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="main-page">
        <main>
          <div className="contents">
            <Outlet />
          </div>
        </main>

        <footer>
          <p>
            icons:{" "}
            <span>
              <a href=" https://google.github.io/material-design-icons/">
                {" "}
                https://google.github.io/material-design-icons/
              </a>
            </span>
          </p>

          <p>
            create by{" "}
            <span>
              <a href="/">Westm0625</a>
            </span>{" "}
            - devChallenge.io
          </p>
        </footer>
      </div>
    </div>
  );
};
export default Layout;
