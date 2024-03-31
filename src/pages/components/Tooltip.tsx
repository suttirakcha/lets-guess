interface TooltipProps {
  text: string
  appear: boolean
}

export default function Tooltip({ text, appear } : TooltipProps){
  return (
    <div className={`tooltip ${appear ? 'active' : 'inactive'}`}>
      {text}
    </div>
  )
}