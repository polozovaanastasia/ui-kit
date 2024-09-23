import classNames from "classnames";
import { useState } from "react";
import "./checkbox.css";

type CheckboxPropsType = {
    label?: string;
    checked: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
};

export const Checkbox = ({
    label,
    checked,
    indeterminate,
    disabled,
    onChange,
}: CheckboxPropsType) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const checkboxClass = classNames(
        "checkbox",
        `checkbox-${isChecked ? "checked" : "unchecked"}`,
        { "checkbox-indeterminate": indeterminate },
        { "checkbox-disabled": disabled }
    );

    const onChangeHandler = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };
    return (
        <div className={checkboxClass}>
            <label>
                <span className="checkbox-control">
                    <input
                        className="checkbox-input"
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChangeHandler}
                    />
                </span>
                {label && <span className="checkbox-label">{label}</span>}
            </label>
        </div>
    );
};
