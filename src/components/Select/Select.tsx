import classNames from "classnames";
import "./Select.css";

type SelectOptionType = {
    value: string;
    label: string;
};

type SelectPropsType = {
    value?: SelectOptionType | undefined;
    options: Array<SelectOptionType>;
    size?: number;
    placeholder?: string;
    // onChange: () => void;
};

export const Select = ({
    value,
    options,
    size = options.length,
    placeholder,
}: // onChange,
SelectPropsType) => {
    const selectClasses = classNames("select");
    return (
        <div className={selectClasses}>
            <div className="select-control">
                <div className="select-control__selected-options">
                    <span className="selected-option">
                        <span className="selected-option__label">
                            {value ? value.label : placeholder}
                        </span>
                        <span className="selected-option__icon"></span>
                    </span>
                </div>
                <div className="select-control__btn">
                    {/* <div className="select-control__clear-btn btn">{"×"}</div> */}
                    <div className="select-control__clear-btn btn"></div>
                    {/* <div className="select-control__arrow-btn btn">{"▼"}</div> */}
                    <div className="select-control__arrow-btn btn"></div>
                </div>
            </div>
            <ul className="select-options">
                {options.map((option) => (
                    <li className="select-option">{option.label}</li>
                ))}
            </ul>
        </div>
    );
};
