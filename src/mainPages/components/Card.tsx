import { useNavigate } from "react-router-dom";

interface CardCateProps {
  href: string
  category: string
  onSelect: () => void
}

interface CardCateWithTitleProps {
  title: string
  data: any[]
  onSelect: () => void
}

export function CardCate({ href, category, onSelect } : CardCateProps){
  const navigate = useNavigate()

  const clickCate = () => {
    onSelect && onSelect()

    const setLink = () => navigate(href, { replace: true })
    setTimeout(setLink, 5000);
  }

  return (
    <div className="card" onClick={clickCate}>
      <h2>{category}</h2>
    </div>
  )
}

export function CardCateWithTitle({ title, data, onSelect } : CardCateWithTitleProps){
  return (
    <>
      <h2 className="list-titles">{title}</h2>
      <div className="select-lists">
        {data.map(d => <CardCate key={d.category} href={d.link} category={d.category} onSelect={onSelect}/>)}
      </div>
    </>
  )
}