import Button from "../../functions/Button.js";
import "./Buttons.css";

const Inputs = () => {
  return (
    <>
      <div className="container">
        <h1>Buttons</h1>

        {/* default-btn */}
        <div className="default-btn btn">
          <div className="btn-style">
            <h3 className="button-type">{`<Button />`}</h3>
            <Button />
          </div>
        </div>

        <div className="variant-btn">
          {/* outline-btn */}
          <div className="outline-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button variant="outline" />`}</h3>
              <Button variant="outline" />
            </div>
          </div>

          {/* text-btn */}
          <div className="text-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button variant="text" />`}</h3>
              <Button variant="text" />
            </div>
          </div>
        </div>

        {/* disableShadow-btn */}
        <div className="disableShadow-btn btn">
          <div className="btn-style">
            <h3 className="button-type">{`<Button disableShadow />`}</h3>
            <Button disableShadow />
          </div>
        </div>

        {/* disabled-btn */}
        <div className="disabled-btn btn">
          <div className="btn-style">
            <h3 className="button-type">{`<Button disabled />`}</h3>
            <Button disabled btnText={"Disabled"} />
          </div>
        </div>

        <div className="icon-btn">
          {/* startIcon-btn */}
          <div className="startIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button startIcon="key" />`}</h3>
              <Button startIcon="key" />
            </div>
          </div>
          {/* startIcon-btn */}
          <div className="startIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button startIcon="local_grocery_store" />`}</h3>
              <Button startIcon="local_grocery_store" />
            </div>
          </div>
          {/* startIcon-btn */}
          <div className="startIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button startIcon="keyboard_voice" />`}</h3>
              <Button startIcon="keyboard_voice" />
            </div>
          </div>

          {/* endIcon-btn */}
          <div className="endIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button endIcon="downloading" />`}</h3>
              <Button endIcon="downloading" />
            </div>
          </div>

          {/* endIcon-btn */}
          <div className="endIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button endIcon="edit" />`}</h3>
              <Button endIcon="edit" />
            </div>
          </div>

          {/* endIcon-btn */}
          <div className="endIcon-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button endIcon="info" />`}</h3>
              <Button endIcon="info" />
            </div>
          </div>
        </div>

        <div className="size-btn">
          {/* size-sm-btn */}
          <div className="size-sm-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button size="sm" />`}</h3>
              <Button size="sm" btnText={"Small"} />
            </div>
          </div>

          {/* size-md-btn */}
          <div className="size-md-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button size="md" />`}</h3>
              <Button size="md" btnText={"Middle"} />
            </div>
          </div>

          {/* size-lg-btn */}
          <div className="size-lg-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button size="lg" />`}</h3>
              <Button size="lg" btnText={"Large"} />
            </div>
          </div>
        </div>

        <div className="color-btn">
          {/* default-color-btn */}
          <div className="default-color-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button color="default" />`}</h3>
              <Button color="default" />
            </div>
          </div>

          {/* primary-color-btn */}
          <div className="primary-color-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button color="primary" />`}</h3>
              <Button color="primary" btnText={"Primary"} />
            </div>
          </div>

          {/* secondary-color-btn */}
          <div className="secondary-color-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button color="secondary" />`}</h3>
              <Button color="secondary" btnText={"Secondary"} />
            </div>
          </div>

          {/* danger-color-btn */}
          <div className="danger-color-btn btn">
            <div className="btn-style">
              <h3 className="button-type">{`<Button color="danger" />`}</h3>
              <Button color="danger" btnText={"Danger"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Inputs;
