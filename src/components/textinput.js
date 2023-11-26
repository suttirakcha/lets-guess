import { forwardRef } from "react"

export const TextInput = forwardRef(function(props, ref){
  return (<input type="text" className={`text-input ${props.className || ''}`} ref={ref} {...props}/>)
})