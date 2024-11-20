import classNames from "classnames";
import "./Switch.css";

type SwitchPropsType = {
    onLabel?: string;
    offLabel?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export const Switch = ({
    onLabel,
    offLabel,
    checked,
    onChange,
}: SwitchPropsType) => {
    const switchClass = classNames("switch", { "switch-checked": checked });

    const onChangeHandler = () => {
        onChange(!checked);
    };
    return (
        <div className={switchClass}>
            <label>
                {onLabel && offLabel && <span>{onLabel}</span>}
                <span className="switch-control">
                    <input
                        className="switch-input"
                        type="checkbox"
                        checked={checked}
                        onChange={onChangeHandler}
                    />
                </span>
                {offLabel && <span>{offLabel}</span>}
            </label>
        </div>
    );
};
