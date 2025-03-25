import ThreeDots from "./ThreeDots"

interface LoadingProps {
  text: string
}

export default function Loading({ text } : LoadingProps){
  return (
    <div className="loading">
      <div className="loading-icon">
        <div className="inner-icon" />
      </div>
      <h2>{text}<ThreeDots/></h2>
    </div>
  )
}