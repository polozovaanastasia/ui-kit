import { Radio } from "./radio";
import "./radio-group.css";

type OptionType = {
    label?: string;
    value: string;
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
    return (
        <div className="radio-group">
            {options.map(({ label, value }) => {
                const onChangeHandler = () => {
                    onChange(value);
                };
                return (
                    <Radio
                        key={value}
                        label={label}
                        value={value}
                        checked={selected}
                        groupName={groupName}
                        onChange={onChangeHandler}
                    />
                );
            })}
        </div>
    );
};
