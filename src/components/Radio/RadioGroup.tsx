import { Radio } from "./Radio";
import "./RadioGroup.css";

type OptionType = {
    label?: string;
    value: string;
    disabled?: boolean;
};

type RadioGroupPropsType = {
    options: Array<OptionType>;
    selected: string;
    groupName: string;
    onChange: (value: string) => void;
};

export const RadioGroup = ({
    options,
    selected,
    groupName,
    onChange,
}: RadioGroupPropsType) => {
    const isSelectedDisabled = options.some(
        (option) => option.value === selected && option.disabled
    );

    return (
        <div className="radio-group">
            {options.map(({ label, value, disabled }) => {
                const onChangeHandler = () => {
                    if (isSelectedDisabled) return;
                    onChange(value);
                };
                return (
                    <Radio
                        key={value}
                        label={label}
                        value={value}
                        selected={selected}
                        disabled={!!disabled}
                        groupName={groupName}
                        onChange={onChangeHandler}
                    />
                );
            })}
        </div>
    );
};
