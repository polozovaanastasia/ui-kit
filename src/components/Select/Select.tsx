import classNames from "classnames";
import "./Select.css";
import { useState } from "react";

export type SelectOptionType = {
    value: string;
    label: string;
};

type SingleSelectPropsType = {
    multiple?: false;
    selectedOption?: SelectOptionType;
    onChange: (value: SelectOptionType | undefined) => void;
};

type MultipleSelectPropsType = {
    multiple: true;
    selectedOption: Array<SelectOptionType>;
    onChange: (value: Array<SelectOptionType>) => void;
};

type SelectPropsType = {
    options: Array<SelectOptionType>;
    size?: number;
    placeholder?: string;
    disabled?: boolean;
} & (SingleSelectPropsType | MultipleSelectPropsType);

export const Select = ({
    multiple,
    selectedOption,
    options,
    size = options.length,
    placeholder,
    disabled,
    onChange,
}: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectClasses = classNames("select", {
        select_single: !multiple,
        select_multiple: multiple,
        select_disabled: disabled,
    });
    const selectOptionsClasses = classNames("select-options", {
        "select-options_is-open": isOpen,
    });

    const onClickHandler = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const onBlurHandler = () => {
        setIsOpen(false);
    };

    const onChangeHandler = (option: SelectOptionType) => {
        if (multiple) {
            if (selectedOption.includes(option)) {
                onChange(selectedOption.filter((o) => o !== option));
            } else {
                onChange([...selectedOption, option]);
            }
        } else {
            onChange(option);
        }
    };

    const onClickClearOptionsHandler = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation();
        multiple ? onChange([]) : onChange(undefined);
        setIsOpen(false);
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
                        {multiple ? (
                            selectedOption.length ? (
                                selectedOption.map((option) => {
                                    const onClickRemoveOptionHandler = (
                                        e: React.MouseEvent<HTMLDivElement>
                                    ) => {
                                        e.stopPropagation();
                                        onChange(
                                            selectedOption.filter(
                                                (o) => o !== option
                                            )
                                        );
                                        setIsOpen(false);
                                    };
                                    return (
                                        <span
                                            key={option.value}
                                            className="selected-option__label"
                                        >
                                            <span className="selected-option__label-text">
                                                {option.label}
                                            </span>
                                            <span
                                                className="select-control__remove-btn btn"
                                                onClick={
                                                    onClickRemoveOptionHandler
                                                }
                                            ></span>
                                        </span>
                                    );
                                })
                            ) : (
                                <span>{placeholder}</span>
                            )
                        ) : selectedOption ? (
                            <span className="selected-option__label">
                                {selectedOption.label}
                            </span>
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </span>
                </div>
                <div className="select-control__btn">
                    <div
                        className="select-control__clear-btn btn"
                        onClick={onClickClearOptionsHandler}
                    ></div>
                    <div className="select-control__caret-btn btn"></div>
                </div>
            </div>
            <ul className={selectOptionsClasses}>
                {options.map((option, i) => {
                    const optionClasses = classNames("select-option", {
                        "select-option_is-selected": multiple
                            ? selectedOption.includes(option)
                            : selectedOption === option,
                    });

                    return (
                        i < size && (
                            <li
                                key={option.value}
                                className={optionClasses}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onChangeHandler(option);
                                    setIsOpen(false);
                                }}
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
