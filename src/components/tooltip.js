export default function Tooltip({text, appear}){
  return (<div className={`tooltip ${appear ? 'active' : 'inactive'}`}>{text}</div>)
}