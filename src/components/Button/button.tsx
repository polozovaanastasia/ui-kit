import classNames from "classnames";
import "./Button.css";
import { memo } from "react";

type ButtonVariantValuesType = "primary" | "secondary" | "outline" | "link";
type ButtonTypeValuesType = "text" | "iconText" | "icon";

type BaseButtonPropsType = {
    label?: string;
    variant: ButtonVariantValuesType;
    type?: ButtonTypeValuesType;
    disabled?: boolean;
    onClick: () => void;
};

type ButtonPropsType =
    | (BaseButtonPropsType & {
          type: "text";
          icon?: never;
      })
    | (BaseButtonPropsType & {
          type: "iconText";
          icon: JSX.Element;
      })
    | (BaseButtonPropsType & {
          type: "icon";
          icon: JSX.Element;
      });

export const Button = memo(
    ({ label, variant, type, disabled, icon, onClick }: ButtonPropsType) => {
        console.log("Button rerender");
        const buttonClass = classNames(
            "button",
            `button-${variant}`,
            `button-${type ? type : "text"}`,
            { "button-disabled": disabled }
        );

        return (
            <button
                className={buttonClass}
                disabled={disabled}
                onClick={onClick}
            >
                <span className="button_label">{label}</span>
                {(type === "icon" || type === "iconText") && (
                    <span className="button_icon">{icon}</span>
                )}
            </button>
        );
    }
);
