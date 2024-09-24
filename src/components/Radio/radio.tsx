import classNames from "classnames";
import "./radio.css";

type RadioPropsTypes = {
    label?: string;
    value: string;
    checked: string;
    groupName: string;
    onChange: (value: string) => void;
};

export const Radio = ({
    label,
    value,
    checked,
    groupName,
    onChange,
}: RadioPropsTypes) => {
    const isChecked = value === checked;
    const radioClass = classNames("radio", { "radio-checked": isChecked });

    const onChangeHandler = () => {
        onChange(value);
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
                        checked={isChecked}
                        onChange={onChangeHandler}
                    />
                </span>
                {label && <span className="radio-label">{label}</span>}
            </label>
        </div>
    );
};
