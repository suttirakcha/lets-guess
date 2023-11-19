import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button({children, size, ...props}){
  return (
    <button className={`${size === 'small' ? 'small-btn' : 'btn'}`} {...props}>{children}</button>
  )
}

export function ButtonWithIcon({children, icon, text, ...props}){
  return (
    <button className="btn btn-with-icon" {...props}>
      <FontAwesomeIcon icon={icon} className="icon-prefix-btn"/>
      {text}
    </button>
  )
}