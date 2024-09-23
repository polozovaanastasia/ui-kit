import "./App.css";
import { Button } from "./components/Button/button";
import ArrowRightIcon from "../src/icons/arrowRight";
import { Checkbox } from "./components/Checkbox/checkbox";

const App = () => {
    const onButtonClick = () => {
        console.log("onButtonClick");
    };
    const onCheckboxChange = (isChecked: boolean) => {
        console.log(`Event onCheckboxChange. CheckboxIsChecked: ${isChecked}`);
    };
    return (
        <div className="app">
            <div>
                <h4>Primary</h4>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="text"
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
            </div>
            <div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="text"
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
            </div>
            <div>
                <h4>Secondary</h4>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="text"
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="text"
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
            </div>
            <div>
                <h4>Outline</h4>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="text"
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="text"
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
            </div>
            <div>
                <h4>Link</h4>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="text"
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="text"
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
            </div>

            <div>
                <div className="row">
                    <Checkbox checked={false} onChange={onCheckboxChange} />
                </div>
                <div className="row">
                    <Checkbox
                        label="Checkbox"
                        checked
                        onChange={onCheckboxChange}
                    />
                </div>

                <div className="row">
                    <Checkbox
                        checked={false}
                        onChange={onCheckboxChange}
                        disabled
                    />
                </div>
                <div className="row">
                    <Checkbox
                        label="Checkbox"
                        checked
                        onChange={onCheckboxChange}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
