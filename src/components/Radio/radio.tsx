import classNames from "classnames";
import "./Radio.css";

type RadioPropsTypes = {
    label?: string;
    value: string;
    selected: string;
    disabled: boolean;
    groupName: string;
    onChange: (value: string) => void;
};

export const Radio = ({
    label,
    value,
    selected,
    disabled,
    groupName,
    onChange,
}: RadioPropsTypes) => {
    const isSelected = value === selected;
    const radioClasses = classNames(
        "radio",
        { "radio-selected": isSelected },
        { "radio-disabled": disabled }
    );

    const onChangeHandler = () => {
        onChange(value);
    };
    return (
        <div className={radioClasses}>
            <label>
                <span className="radio-control">
                    <input
                        className="radio-input"
                        type="radio"
                        value={value}
                        name={groupName}
                        checked={isSelected}
                        disabled={!!disabled}
                        onChange={onChangeHandler}
                    />
                </span>
                {label && <span className="radio-label">{label}</span>}
            </label>
        </div>
    );
};
