import { React } from "react";
import "./Button.css";

function Button(props) {
  const style = {
    btnText: "Default",
    variant: null,
    disableShadow: null,
    disabled: false,
    size: null,
    color: null,
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
      style.color === "primary"
        ? "primary"
        : style.color === "secondary"
        ? "secondary"
        : style.color === "danger"
        ? "danger"
        : ""
    }
    `}
      disabled={style.disabled ? true : false}
    >
      <div className="btn-text">
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
