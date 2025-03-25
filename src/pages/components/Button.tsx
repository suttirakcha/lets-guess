import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonProps extends ButtonAttributes {
  className?: string
  size?: string
}

interface ButtonWithIconProps extends ButtonAttributes {
  animation?: string
  className?: string
  icon: IconProp
  text: string
}

enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Icon = "icon"
}

export function Button({ className, children, size, ...props } : PropsWithChildren<ButtonProps>){
  return (
    <button 
      className={`${size === ButtonSize.Small ? 'small-btn' : size === ButtonSize.Medium ? 'medium-btn' : size === ButtonSize.Icon ? 'icon-btn' : 'btn'} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonWithIcon({ animation, className, icon, text, ...props } : ButtonWithIconProps){
  return (
    <button className={`btn btn-with-icon ${className}`} {...props}>
      <FontAwesomeIcon icon={icon} className="icon-prefix-btn"/>
      {text}
    </button>
  )
}