import { React } from "react";
import { css } from "@emotion/react";
/////////////////////////////////////////////////
const styles = {
  default: css`
    font-size: 1rem;
    width: 200px;
    height: 56px;
    border: 1px solid #828282;
    border-radius: 8px;
    &:hover {
      border: 1px solid #333333;
    }
    &:focus {
      border: 1px solid #2962ff;
      outline: 2px solid #2962ff;
    }
  `,
  error: css`
    border: 1px solid #d32f2f;
    &:focus {
      border: 1px solid #d32f2f;
      outline: 2px solid #d32f2f;
    }
  `,
  errorFont: css`
    color: #d32f2f;
  `,
  disabled: css`
    background: #f2f2f2;
    border: 1px solid #e0e0e0;
    &:hover {
      border: 1px solid #e0e0e0;
    }
  `,
  sm: css`
    width: 200px;
    height: 40px;
  `,
  md: css`
    width: 200px;
    height: 56px;
  `,
  fullWidth: css`
    width: 100%;
  `,
  inputContainer: css`
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 4px;
    }
    small {
      margin-top: 4px;
    }
  `,
  startIcon: css`
    &::placeholder {
      text-align: left;
      padding-left: 10px;
      font-size: 1.5rem;
    }
  `,
  endIcon: css`
    &::placeholder {
      text-align: right;
      padding-right: 10px;
      font-size: 1.5rem;
    }
  `,
  nonStyle: css`
    &:focus {
      outline: none;
    }
  `,
};

/////////////////////////////////////////////////

const Input = (props) => {
  const style = {
    label: "label",
    type: "text",
    value: "Placeholder",
    ...props,
  };

  return (
    <form css={styles.inputContainer}>
      <label for={style.label} css={[style.error && styles.errorFont]}>
        {style.label}
      </label>
      {style.multiline ? (
        <textarea
          rows={style.row}
          css={[
            styles.default,
            style.error && styles.error,
            style.disabled && styles.disabled,
            style.startIcon && styles.startIcon,
            style.endIcon && styles.endIcon,
            style.size === "sm"
              ? styles.sm
              : style.size === "md"
              ? styles.md
              : "",
            style.fullWidth && styles.fullWidth,
            (style.type === "radio" || style.type === "checkbox") &&
              styles.nonStyle,
          ]}
          id={style.label}
          name={style.label}
          disabled={style.disabled ? true : false}
          className={style.startIcon || style.endIcon ? "material-icons" : ""}
          placeholder={`${style.startIcon ? style.startIcon : ""} ${
            style.startIcon || style.endIcon ? "" : style.value
          } ${style.endIcon ? style.endIcon : ""}`}
        ></textarea>
      ) : (
        <input
          css={[
            styles.default,
            style.error && styles.error,
            style.disabled && styles.disabled,
            style.startIcon && styles.startIcon,
            style.endIcon && styles.endIcon,
            style.size === "sm"
              ? styles.sm
              : style.size === "md"
              ? styles.md
              : "",
            style.fullWidth && styles.fullWidth,
            (style.type === "radio" || style.type === "checkbox") &&
              styles.nonStyle,
          ]}
          type={style.multiline ? "textarea" : style.type}
          id={style.label}
          name={style.label}
          disabled={style.disabled ? true : false}
          className={style.startIcon || style.endIcon ? "material-icons" : ""}
          placeholder={`${style.startIcon ? style.startIcon : ""} ${
            style.startIcon || style.endIcon ? "" : style.value
          } ${style.endIcon ? style.endIcon : ""}`}
        />
      )}
      <small css={[style.error && styles.errorFont]}>
        {style.helperText && style.helperText}
      </small>
    </form>
  );
};

export default Input;
