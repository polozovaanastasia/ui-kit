import "./App.css";
import { Button } from "./components/Button/button";
import ArrowRightIcon from "../src/icons/arrowRight";

function App() {
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
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Primary"
                        variant="primary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled={true}
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
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Secondary"
                        variant="secondary"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled={true}
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
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        label="Outline"
                        variant="outline"
                        type="iconText"
                        icon={<ArrowRightIcon />}
                        disabled={true}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={<ArrowRightIcon />}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="row">
                <Button label="Text" variant="text" type="text" />
            </div>
        </div>
    );
}

export default App;
