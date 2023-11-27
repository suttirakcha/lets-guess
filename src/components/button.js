import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button({className, children, size, ...props}){
  return (
    <button className={`${size === 'small' ? 'small-btn' : size === 'medium' ? 'medium-btn' : size === 'icon' ? 'icon-btn' : 'btn'} ${className || ''}`} {...props}>{children}</button>
  )
}

export function ButtonWithIcon({animation, className, children, icon, text, ...props}){
  return (
    <button className={`btn btn-with-icon ${className}`} {...props}>
      <FontAwesomeIcon icon={icon} className="icon-prefix-btn"/>
      {text}
    </button>
  )
}