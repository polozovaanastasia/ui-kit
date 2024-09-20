import classNames from "classnames";
import "./button.css";

type ButtonVariantValuesType = "primary" | "secondary" | "outline" | "text";
type ButtonTypeValuesType = "text" | "iconText" | "icon";

type BaseButtonPropsType = {
    label?: string;
    variant: ButtonVariantValuesType;
    type?: ButtonTypeValuesType;
    disabled?: boolean;
};

type ButtonPropsType =
    | (BaseButtonPropsType & {
          type: "text";
          iconUrl?: never;
      })
    | (BaseButtonPropsType & {
          type: "iconText";
          iconUrl: string;
      })
    | (BaseButtonPropsType & {
          type: "icon";
          iconUrl: string;
      });

export const Button = (props: ButtonPropsType) => {
    const buttonClass = classNames(
        "button",
        `button-${props.variant}`,
        `button-${props.type ? props.type : "text"}`,
        { "button-disabled": props.disabled }
    );

    return (
        <button className={buttonClass}>
            <span className="button_label">{props.label}</span>
            {props.type === "icon" || props.type === "iconText" ? (
                <span className="button_icon">
                    <img src={props.iconUrl} />
                </span>
            ) : null}
        </button>
    );
};
