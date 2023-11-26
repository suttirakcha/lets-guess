export function BlockSpace({text, isActive}){
  return (
    <div className={`block-space${isActive ? ' active' : ' inactive'}`}>
      <h1>{text}</h1>
    </div>
  )
}