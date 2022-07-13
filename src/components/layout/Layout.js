import { Link, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

///////////////////////////////////////////////////
//? css code
const styles = {
  logo: css`
    font-size: 0.75rem;
    h1 {
      text-align: center;
      padding: 50px;
      color: #333;
    }
    span {
      color: orangered;
    }
    a {
      text-decoration: none;
    }
  `,
  // selectColor: css`
  //   color: #333;
  // `,
  wrapper: css`
    display: flex;
    justify-content: space-between;
  `,
  sidebar: css`
    width: 20%;
    background-color: #fafbfd;
    ul {
      list-style-type: none;
      margin-top: 50px;
    }
    ul li {
      font-weight: bold;
      margin-top: 30px;
      margin-left: 20px;
    }
    ul li a {
      text-decoration: none;
      color: #9e9e9e;
      &:hover,
      &:focus,
      &:active {
        color: #333;
      }
    }
  `,
  contents: css`
    background-color: #ffffff;
    padding: 0 5%;
  `,
  mainPage: css`
    width: 80%;
    display: flex;
    flex-direction: column;
  `,
  footer: css`
    height: 135px;
    color: rgb(110, 110, 110);
    padding: 60px;
    a {
      text-decoration: underline;
      color: rgb(110, 110, 110);
      text-align: center;
    }
  `,
};

///////////////////////////////////////////////////////

const Layout = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.sidebar}>
        <div css={styles.logo}>
          <Link to="/">
            <h1>
              <span>Dev</span>Challenge.io
            </h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link
              to="/colors"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Colors
            </Link>
          </li>
          <li>
            <Link
              to="/typography"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              to="/spaces"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Spaces
            </Link>
          </li>
          <li>
            <Link
              to="/buttons"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Buttons
            </Link>
          </li>
          <li>
            <Link
              to="/inputs"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Inputs
            </Link>
          </li>
          <li>
            <Link
              to="/grid"
              // css={({ isActive }) =>
              //   isActive ? styles.selectColor : undefined
              // }
            >
              Grid
            </Link>
          </li>
        </ul>
      </div>

      <div css={styles.mainPage}>
        <main>
          <div css={styles.contents}>
            <Outlet />
          </div>
        </main>

        <footer css={styles.footer}>
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
