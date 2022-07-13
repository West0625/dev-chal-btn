import { React } from "react";
import { css } from "@emotion/react";

//////////////////////////////////////////////////////////
//?button style
const styles = {
  btnText: css`
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    display: flex;

    p {
      margin: 5px 10px 0 10px;
    }
  `,
  default: css`
    color: #3f3f3f;
    background-color: #e3e3e3;
    /* width: 81px; */
    border: 1px solid #e3e3e3;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);

    padding: 8px 16px;

    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;

    &:hover,
    &:focus {
      background-color: #aeaeae;
    }
  `,
  outline: css`
    color: #3d5afe;
    border: 1px solid #3d5afe;
    background-color: #ffffff;
    &:hover,
    &:focus {
      background-color: rgba(41, 98, 255, 0.1);
    }
  `,
  text: css`
    color: #3d5afe;
    border: none;
    background-color: #ffffff;
    box-shadow: none;
    &:hover,
    &:focus {
      background-color: rgba(41, 98, 255, 0.1);
    }
  `,
  disabled: css`
    color: #9e9e9e;
    background: #e0e0e0;
    &:hover,
    &:focus {
      color: #9e9e9e;
      background: #e0e0e0;
    }
  `,
  disableShadow: css`
    color: #fff;
    background-color: #2962ff;
    box-shadow: none;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #2962ff;
      opacity: 0.7;
    }
  `,
  sm: css`
    width: 70px;
    color: #fff;
    background-color: #2962ff;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #2962ff;
      opacity: 0.7;
    }
  `,
  md: css`
    width: 90px;
    color: #fff;
    background-color: #2962ff;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #2962ff;
      opacity: 0.7;
    }
  `,
  lg: css`
    width: 120px;
    color: #fff;
    background-color: #2962ff;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #2962ff;
      opacity: 0.7;
    }
  `,
  primary: css`
    color: #fff;
    background-color: #2962ff;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #0039cb;
    }
  `,
  secondary: css`
    color: #fff;
    background-color: #455a64;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #1c313a;
    }
  `,
  danger: css`
    color: #fff;
    background-color: #d32f2f;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #9a0007;
    }
  `,
};
/////////////////////////////////////////////////////////

function Button(props) {
  const style = {
    btnText: "Default",
    variant: null,
    disableShadow: null,
    size: null,
    color: null,
    startIcon: null,
    endIcon: null,
    ...props,
  };

  return (
    <button
      css={[
        styles.default,

        style.variant === "outline"
          ? styles.outline
          : style.variant === "text"
          ? styles.text
          : "",
        style.disableShadow && styles.disableShadow,
        style.disabled && styles.disabled,

        style.size === "sm"
          ? styles.sm
          : style.size === "md"
          ? styles.md
          : style.size === "lg"
          ? styles.lg
          : "",
        style.color === "primary"
          ? styles.primary
          : style.color === "secondary"
          ? styles.secondary
          : style.color === "danger"
          ? styles.danger
          : "",
      ]}
      disabled={style.disabled ? true : false}
    >
      <div css={styles.btnText}>
        <i className={style.startIcon && "material-icons"}>
          {style.startIcon && style.startIcon}
        </i>
        <p>{style.btnText}</p>
        <i className={style.endIcon && "material-icons"}>
          {style.endIcon && style.endIcon}
        </i>
      </div>
    </button>
  );
}

export default Button;
