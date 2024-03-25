interface BlockSpaceProps {
  text: string
  isActive: boolean
}

export function BlockSpace({ text, isActive } : BlockSpaceProps){
  return (
    <div className={`block-space${isActive ? ' active' : ' inactive'}`}>
      <h1>{text}</h1>
    </div>
  )
}