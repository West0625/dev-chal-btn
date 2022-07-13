import Button from "../../functions/Button/Button.js";
import { css } from "@emotion/react";

////////////////////////////////////////////////////////
const styles = {
  variantBtn: css`
    display: flex;
  `,
  startIcon: css`
    display: flex;
  `,
  endIcon: css`
    display: flex;
  `,
  sizeBtn: css`
    display: flex;
    button p {
      margin: 0 auto;
    }
  `,
  colorBtn: css`
    display: flex;
  `,
  btn: css`
    margin-right: 20px;
    display: flex;
  `,
};

//////////////////////////////////////////////////////////////

const Buttons = () => {
  return (
    <>
      <div css={[styles.container]}>
        <h1>Buttons</h1>

        {/* defaultBtn */}
        <div css={[styles.defaultBtn, styles.btn]}>
          <div css={[styles.btnStyle]}>
            <h3 css={[styles.buttonType]}>{`<Button />`}</h3>
            <Button />
          </div>
        </div>

        <div css={[styles.variantBtn]}>
          {/* outlineBtn */}
          <div css={[styles.outlineBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3
                css={[styles.buttonType]}
              >{`<Button variant="outline" />`}</h3>
              <Button variant="outline" />
            </div>
          </div>

          {/* textBtn */}
          <div css={[styles.textBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button variant="text" />`}</h3>
              <Button variant="text" />
            </div>
          </div>
        </div>

        {/* disableShadowBtn */}
        <div css={[styles.disableShadowBtn, styles.btn]}>
          <div css={[styles.btnStyle]}>
            <h3 css={[styles.buttonType]}>{`<Button disableShadow />`}</h3>
            <Button disableShadow />
          </div>
        </div>

        {/* disabledBtn */}
        <div css={[styles.disabledBtn, styles.btn]}>
          <div css={[styles.btnStyle]}>
            <h3 css={[styles.buttonType]}>{`<Button disabled />`}</h3>
            <Button disabled btnText={"Disabled"} />
          </div>
        </div>

        <div css={[styles.startIcon]}>
          {/* startIconBtn */}
          <div css={[styles.startIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button startIcon="key" />`}</h3>
              <Button startIcon="key" />
            </div>
          </div>
          {/* startIconBtn */}
          <div css={[styles.startIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3
                css={[styles.buttonType]}
              >{`<Button startIcon="local_grocery_store" />`}</h3>
              <Button startIcon="local_grocery_store" />
            </div>
          </div>
          {/* startIconBtn */}
          <div css={[styles.startIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3
                css={[styles.buttonType]}
              >{`<Button startIcon="keyboard_voice" />`}</h3>
              <Button startIcon="keyboard_voice" />
            </div>
          </div>
        </div>

        <div css={[styles.endIcon]}>
          {/* endIconBtn */}
          <div css={[styles.endIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3
                css={[styles.buttonType]}
              >{`<Button endIcon="downloading" />`}</h3>
              <Button endIcon="downloading" />
            </div>
          </div>

          {/* endIconBtn */}
          <div css={[styles.endIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button endIcon="edit" />`}</h3>
              <Button endIcon="edit" />
            </div>
          </div>

          {/* endIconBtn */}
          <div css={[styles.endIconBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button endIcon="info" />`}</h3>
              <Button endIcon="info" />
            </div>
          </div>
        </div>

        <div css={[styles.sizeBtn]}>
          {/* sizeSmBtn */}
          <div css={[styles.sizeSmBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button size="sm" />`}</h3>
              <Button size="sm" btnText={"Small"} />
            </div>
          </div>

          {/* sizeMdBtn */}
          <div css={[styles.sizeMdBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button size="md" />`}</h3>
              <Button size="md" btnText={"Middle"} />
            </div>
          </div>

          {/* sizeLgBtn */}
          <div css={[styles.sizeLgBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button size="lg" />`}</h3>
              <Button size="lg" btnText={"Large"} />
            </div>
          </div>
        </div>

        <div css={[styles.colorBtn]}>
          {/* defaultColorBtn */}
          <div css={[styles.defaultColorBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button color="default" />`}</h3>
              <Button color="default" />
            </div>
          </div>

          {/* primaryColorBtn */}
          <div css={[styles.primaryColorBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button color="primary" />`}</h3>
              <Button color="primary" btnText={"Primary"} />
            </div>
          </div>

          {/* secondaryColorBtn */}
          <div css={[styles.secondaryColorBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3
                css={[styles.buttonType]}
              >{`<Button color="secondary" />`}</h3>
              <Button color="secondary" btnText={"Secondary"} />
            </div>
          </div>

          {/* dangerColorBtn */}
          <div css={[styles.dangerColorBtn, styles.btn]}>
            <div css={[styles.btnStyle]}>
              <h3 css={[styles.buttonType]}>{`<Button color="danger" />`}</h3>
              <Button color="danger" btnText={"Danger"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buttons;
