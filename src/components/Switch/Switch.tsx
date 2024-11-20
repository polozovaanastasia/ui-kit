import classNames from "classnames";
import "./Switch.css";

type SwitchPropsType = {
    label?: string;
    startLabel?: string;
    endLabel?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export const Switch = ({
    label,
    startLabel,
    endLabel,
    checked,
    onChange,
}: SwitchPropsType) => {
    const switchClass = classNames("switch", { "switch-checked": checked });

    const onChangeHandler = () => {
        if (!startLabel && !endLabel) {
            onChange(!checked);
        }
    };
    return (
        <div className={switchClass}>
            <label>
                {startLabel && <span>{startLabel}</span>}
                <span className="switch-control">
                    <input
                        className="switch-input"
                        type="checkbox"
                        checked={checked}
                        onChange={onChangeHandler}
                    />
                </span>
                {label || (endLabel && <span>{label || endLabel}</span>)}
            </label>
        </div>
    );
};
