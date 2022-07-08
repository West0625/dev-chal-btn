import { React } from "react";
import "./Button.css";

function Button(props) {
  const style = {
    variant: null,
    disableShadow: null,
    disabled: null,
    size: null,
    btn_color: null,
    startIcon: null,
    endIcon: null,
    ...props,
  };

  return (
    <button
      className={`default
    ${style.variant && style.variant}
    ${style.disableShadow && "disableShadow"}
    ${style.disabled && "disabled"}
    ${
      style.size === "sm"
        ? "sm"
        : style.size === "md"
        ? "md"
        : style.size === "lg"
        ? "lg"
        : ""
    }
    ${
      style.btn_color === "primary"
        ? "primary"
        : style.btn_color === "secondary"
        ? "secondary"
        : style.btn_color === "danger"
        ? "danger"
        : ""
    }
    `}
    >
      <div className="btn-text">
        <i className={style.startIcon && style.startIcon}></i>
        <p>Default</p>
        <i className={style.endIcon && style.endIcon}></i>
      </div>
    </button>
  );
}

export default Button;
