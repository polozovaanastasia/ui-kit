import "./App.css";
import { Button } from "./components/Button/button";
import caretIcon from "../src/assets/icons/CaretCircleRight.png";

function App() {
    return (
        <div className="app">
            <div className="row">
                <Button label="Primary" variant="primary" type="text" />
            </div>
            <div className="row">
                <Button
                    label="Primary"
                    variant="primary"
                    type="iconText"
                    iconUrl={caretIcon}
                />
            </div>
            <div className="row">
                <Button variant="primary" type="icon" iconUrl={caretIcon} />
            </div>
            <div className="row">
                <Button
                    label="Primary"
                    variant="primary"
                    type="text"
                    disabled={true}
                />
            </div>

            <Button label="Secondary" variant="secondary" type="text" />
            <Button label="Outline" variant="outline" type="text" />
            <Button label="Text" variant="text" type="text" />
        </div>
    );
}

export default App;
