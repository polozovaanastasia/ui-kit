import "./App.css";
import { useCallback, useMemo, useState } from "react";
import { Button } from "./components/Button/Button";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { RadioGroup } from "./components/Radio/RadioGroup";
import ArrowRightIcon from "../src/icons/arrowRight";

const App = () => {
    const arrowRightIcon = useMemo(() => <ArrowRightIcon />, []);

    // const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
    let [selectedValue, setSelectedValue] = useState<string>("orange");
    let [selectedBerriesValue, setSelectedBerriesValue] = useState<string>("");

    let fruits = [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Orange", value: "orange", disabled: true },
        { label: "Mango", value: "mango" },
    ];
    let berries = [
        { label: "Blueberry", value: "blueberry" },
        { label: "Cherry", value: "cherry" },
        { label: "Strawberry", value: "strawberry" },
    ];

    const onButtonClick = useCallback(() => {
        console.log("onButtonClick");
    }, []);

    const onChange = useCallback((value: string) => {
        setSelectedValue(value);
    }, []);

    const onCheckboxChange = useCallback((isChecked: boolean) => {
        setIsChecked(isChecked);
    }, []);

    const onChangeBerries = useCallback((value: string) => {
        setSelectedBerriesValue(value);
    }, []);

    const changeIndeterminateStatus = useCallback(() => {
        setIsIndeterminate(!isIndeterminate);
    }, [isIndeterminate]);

    return (
        <div className="app">
            <div className="row">
                <RadioGroup
                    options={fruits}
                    selected={selectedValue}
                    groupName="Fruits"
                    onChange={onChange}
                />
            </div>
            <div className="row">
                <RadioGroup
                    options={berries}
                    selected={selectedBerriesValue}
                    groupName="Berries"
                    onChange={onChangeBerries}
                />
            </div>
            <Button
                label="Primary"
                variant="primary"
                type="text"
                onClick={changeIndeterminateStatus}
            />
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
                        icon={arrowRightIcon}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="primary"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="secondary"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="outline"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={arrowRightIcon}
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
                        icon={arrowRightIcon}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
                <div className="row">
                    <Button
                        variant="link"
                        type="icon"
                        icon={arrowRightIcon}
                        disabled
                        onClick={onButtonClick}
                    />
                </div>
            </div>

            <div>
                <h4>Checkbox</h4>
                <div className="row">
                    <Checkbox checked={isChecked} onChange={onCheckboxChange} />
                </div>
                <div className="row">
                    <Checkbox
                        label="Checkbox"
                        checked={isChecked}
                        onChange={onCheckboxChange}
                    />
                </div>

                <div className="row">
                    <Checkbox
                        checked={isChecked}
                        onChange={onCheckboxChange}
                        disabled
                    />
                </div>
                <div className="row">
                    <Checkbox
                        label="Checkbox"
                        checked={isChecked}
                        onChange={onCheckboxChange}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
