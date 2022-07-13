import Input from "../../functions/Input/Input.js";
import { css } from "@emotion/react";

/////////////////////////////////////////////////
const styles = {
  defaultInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  errorInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  disabledInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  helperTextInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  startIconInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  endIconInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  valueInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  sizeInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  fullWidth: css``,
  typeInput: css`
    display: flex;
    flex-wrap: wrap;
  `,
  inputContent: css`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  `,
  inputTitle: css``,
};

/////////////////////////////////////////////////

const Inputs = () => {
  return (
    <>
      <h1>Inputs</h1>
      {/* default input */}
      <div css={[styles.defaultInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input />`}</h3>
          <Input />
        </div>
      </div>

      {/* error input */}
      <div css={[styles.errorInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input error />`}</h3>
          <Input error label="error" value="error" />
        </div>
      </div>

      {/* disabled input */}
      <div css={[styles.disabledInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input disabled />`}</h3>
          <Input disabled label="disabled" value="disabled" />
        </div>
      </div>

      {/* helperText input */}
      <div css={[styles.helperTextInput]}>
        <div css={[styles.inputContent]}>
          <h3
            css={[styles.inputTitle]}
          >{`<Input helperText="Some interesting text" />`}</h3>
          <Input
            helperText="Some interesting text"
            label="helperText"
            value="helperText"
          />
        </div>
        <div css={[styles.inputContent]}>
          <h3
            css={[styles.inputTitle]}
          >{`<Input helperText="Some interesting text" error />`}</h3>
          <Input
            helperText="Some interesting text"
            error
            label="helperTextError"
            value="helperTextError"
          />
        </div>
      </div>

      {/* startIcon input */}
      <div css={[styles.startIconInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input startIcon="key" />`}</h3>
          <Input startIcon="key" label="key" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input startIcon="search />`}</h3>
          <Input startIcon="search" label="search" />
        </div>
        <div css={[styles.inputContent]}>
          <h3
            css={[styles.inputTitle]}
          >{`<Input startIcon=keyboard_voice />`}</h3>
          <Input startIcon="keyboard_voice" label="keyboard_voice" />
        </div>
      </div>

      {/* endIcon input */}
      <div css={[styles.endIconInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input endIcon="visibility" />`}</h3>
          <Input endIcon="visibility" label="visibility" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input endIcon="send" />`}</h3>
          <Input endIcon="send" label="send" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input endIcon="mail" />`}</h3>
          <Input endIcon="mail" label="mail" />
        </div>
      </div>

      {/* value input */}
      <div css={[styles.valueInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input value="text" />`}</h3>
          <Input value="text" label="text" />
        </div>
      </div>

      {/* size input */}
      <div css={[styles.sizeInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input size="sm" />`}</h3>
          <Input size="sm" label="size-sm" value="size-sm" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input size="md" />`}</h3>
          <Input size="md" label="size-md" value="size-md" />
        </div>
      </div>

      {/* fullWidth */}
      <div css={[styles.fullWidth]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input fullWidth />`}</h3>
          <Input fullWidth label="fullWidth" value="fullWidth" />
        </div>
      </div>

      {/* type  input */}
      <div css={[styles.typeInput]}>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input multiline row="4" />`}</h3>
          <Input multiline row="4" label="multiline" value="multiline" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input type="password" />`}</h3>
          <Input type="password" label="password" value="password" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input type="email" />`}</h3>
          <Input type="email" label="email" value="email" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input type="radio" />`}</h3>
          <Input type="radio" label="radio" value="radio" />
        </div>
        <div css={[styles.inputContent]}>
          <h3 css={[styles.inputTitle]}>{`<Input type="checkbox" />`}</h3>
          <Input type="checkbox" label="checkbox" value="checkbox" />
        </div>
      </div>
    </>
  );
};
export default Inputs;
