export default function TextInput({className, ...props}){
  return (
    <input type="text" className={`text-input ${className}`} {...props}/>
  )
}