export default function Loading({text}){
  return (
    <div id="loading">
      <div className="loading-icon">
        <div className="inner-icon" />
      </div>
      <h2>{text}</h2>
    </div>
  )
}