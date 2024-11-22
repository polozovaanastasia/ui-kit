import classNames from "classnames";
import "./Switch.css";

type SwitchPropsType = {
    onLabel?: string;
    offLabel?: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
};

export const Switch = ({
    onLabel,
    offLabel,
    checked,
    disabled,
    onChange,
}: SwitchPropsType) => {
    const switchClasses = classNames(
        "switch",
        { "switch-checked": checked },
        { "switch-disabled": disabled }
    );

    const onChangeHandler = () => {
        onChange(!checked);
    };
    return (
        <div className={switchClasses}>
            <label>
                {onLabel && offLabel && <span>{onLabel}</span>}
                <span className="switch-control">
                    <input
                        className="switch-input"
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={onChangeHandler}
                    />
                </span>
                {offLabel && <span>{offLabel}</span>}
            </label>
        </div>
    );
};
