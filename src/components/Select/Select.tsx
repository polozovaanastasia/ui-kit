import classNames from "classnames";
import "./Select.css";
import { useState } from "react";

export type SelectOptionType = {
    value: string;
    label: string;
};

type SelectPropsType = {
    selectedOption?: SelectOptionType | undefined;
    options: Array<SelectOptionType>;
    size?: number;
    placeholder?: string;
    onChange: (value: SelectOptionType | undefined) => void;
};

export const Select = ({
    selectedOption,
    options,
    size = options.length,
    placeholder,
    onChange,
}: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectClasses = classNames("select");
    const selectOptionsClasses = classNames("select-options", {
        "select-options_is-open": isOpen,
    });

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const onBlurHandler = () => {
        setIsOpen(false);
    };

    const onChangeHandler = (option: SelectOptionType | undefined) => {
        onChange(option);
    };

    const onClickClearHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onChange(undefined);
    };

    return (
        <div
            className={selectClasses}
            tabIndex={0}
            onClick={onClickHandler}
            onBlur={onBlurHandler}
        >
            <div className="select-control">
                <div className="select-control__selected-options">
                    <span className="selected-option">
                        <span className="selected-option__label">
                            {selectedOption
                                ? selectedOption.label
                                : placeholder}
                        </span>
                        <span className="selected-option__icon"></span>
                    </span>
                </div>
                <div className="select-control__btn">
                    <div
                        className="select-control__clear-btn btn"
                        onClick={onClickClearHandler}
                    ></div>
                    <div className="select-control__caret-btn btn"></div>
                </div>
            </div>
            <ul className={selectOptionsClasses}>
                {options.map((option, i) => {
                    const optionClasses = classNames("select-option", {
                        "select-option_is-selected":
                            option.value === selectedOption?.value,
                    });

                    const onChange = () => {
                        onChangeHandler(option);
                    };
                    return (
                        i < size && (
                            <li
                                key={option.value}
                                className={optionClasses}
                                onClick={onChange}
                            >
                                {option.label}
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
};
