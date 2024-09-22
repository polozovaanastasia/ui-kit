import "./App.css";
import { Button } from "./components/Button/button";
import ArrowRightIcon from "../src/icons/arrowRight";

const App = () => {
    return (
        <div className="app">
            <div>
                <h4>Primary</h4>
                <div className="row">
                    <Button label="Primary" variant="primary" type="text" />
                </div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={<ArrowRightIcon />}
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
                    />
                </div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
            </div>
            <div>
                <h4>Secondary</h4>
                <div className="row">
                    <Button label="Secondary" variant="secondary" type="text" />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="text"
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
            </div>
            <div>
                <h4>Outline</h4>
                <div className="row">
                    <Button label="Outline" variant="outline" type="text" />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="text"
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
            </div>
            <div>
                <h4>Link</h4>
                <div className="row">
                    <Button label="Link" variant="link" type="text" />
                </div>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={<ArrowRightIcon />}
                    />
                </div>
                <div className="row">
                    <Button label="Link" variant="link" type="text" disabled />
                </div>
                <div className="row">
                    <Button
                        label="Link"
                        variant="link"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
