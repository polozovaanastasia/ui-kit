import classNames from "classnames";
import "./radio.css";

type RadioTypes = {
    label?: string;
    value: string;
    checked: boolean;
    groupName: string;
    onChange: (isChecked: boolean) => void;
};

export const Radio = ({
    label,
    value,
    checked,
    groupName,
    onChange,
}: RadioTypes) => {
    const radioClass = classNames("radio", { "radio-checked": checked });

    const onChangeHandler = () => {
        onChange(!checked);
    };
    return (
        <div className={radioClass}>
            <label>
                <span className="radio-control">
                    <input
                        className="radio-input"
                        type="radio"
                        value={value}
                        name={groupName}
                        checked={checked}
                        onChange={onChangeHandler}
                    />
                </span>
                {label && <span className="radio-label">{label}</span>}
            </label>
        </div>
    );
};
