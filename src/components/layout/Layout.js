import "./layout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <h1>
              <span>Dev</span>Challenge.io
            </h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/typography">Typography</Link>
          </li>
          <li>
            <Link to="/spaces">Spaces</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs</Link>
          </li>
          <li>
            <Link to="/grid">Grid</Link>
          </li>
        </ul>
      </div>

      <main>
        {/* <div className="sidebar">
          <div className="logo">
            <Link to="/">
              <h1>
                <span>Dev</span>Challenge.io
              </h1>
            </Link>
          </div>

          <ul>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/spaces">Spaces</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/inputs">Inputs</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
          </ul>
        </div>
 */}
        <div className="contents">
          <Outlet />
        </div>

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
      </main>
    </div>
  );
};
export default Layout;
