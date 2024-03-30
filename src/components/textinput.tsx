import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function TextInput(props : InputProps){
  const { className, ...rest } = props

  return (<input type="text" className={`text-input ${className}`} {...rest}/>)
}