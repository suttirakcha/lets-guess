import { useNavigate } from "react-router-dom";

export function CardCate({link, category, onSelect}){
  const navigate = useNavigate()

  const clickCate = () => {
    if (onSelect){
      onSelect()
    }
    const setLink = () => navigate(link, {replace:true})
    setTimeout(setLink, 5000);
  }
  return (
    <div className="card" onClick={clickCate}>
      <h2>{category}</h2>
    </div>
  )
}

export function CardCateWithTitle({title, data, onSelect}){
  return (
    <>
      <h2 className="list-titles">{title}</h2>
      <div className="select-lists">
        {data.map(d => <CardCate link={d.link} category={d.category} onSelect={onSelect}/>)}
      </div>
    </>
  )
}