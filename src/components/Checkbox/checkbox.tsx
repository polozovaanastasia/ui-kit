import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import "./checkbox.css";

type CheckboxPropsType = {
    label?: string;
    checked: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
};

export const Checkbox = memo(
    ({
        label,
        checked,
        indeterminate = false,
        disabled,
        onChange,
    }: CheckboxPropsType) => {
        console.log("Checkbox rerender", checked);
        const [isIndeterminate, setIsIndeterminate] =
            useState<boolean>(indeterminate);

        const checkboxClass = classNames(
            "checkbox",
            `checkbox-${
                isIndeterminate
                    ? "indeterminate"
                    : checked
                    ? "checked"
                    : "unchecked"
            }`,
            { "checkbox-disabled": disabled }
        );

        useEffect(() => {
            if (indeterminate) {
                setIsIndeterminate(true);
            } else {
                setIsIndeterminate(false);
            }
        }, [indeterminate]);

        const onChangeHandler = () => {
            if (disabled) return;
            setIsIndeterminate(false);
            onChange(!checked);
        };

        return (
            <div className={checkboxClass}>
                <label>
                    <span className="checkbox-control">
                        <input
                            className="checkbox-input"
                            type="checkbox"
                            checked={checked}
                            disabled={disabled}
                            onChange={onChangeHandler}
                        />
                    </span>
                    {label && <span className="checkbox-label">{label}</span>}
                </label>
            </div>
        );
    }
);
