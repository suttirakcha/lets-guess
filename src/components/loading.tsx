interface LoadingProps {
  text: string
}

export default function Loading({ text } : LoadingProps){
  return (
    <div className="loading">
      <div className="loading-icon">
        <div className="inner-icon" />
      </div>
      <h2>{text}</h2>
    </div>
  )
}