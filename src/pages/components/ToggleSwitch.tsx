import { ChangeEvent } from "react"

interface ToggleSwitchProps {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  id: string
  valueOne: string
  valueTwo: string
}

export default function ToggleSwitch({ checked, onChange, id, valueOne, valueTwo } : ToggleSwitchProps){
  return (
    <>
      <label className="switch" htmlFor={id}>
        <input type="checkbox" className="switch-input" id={id} checked={checked} onChange={onChange}/>
        <span className="switch-toggle"></span>
        <div className="switch-texts">
          <p className="switch-text">{valueOne}</p>
          <p className="switch-text">{valueTwo}</p>
        </div>
      </label>

      <div className={`switch-block${checked ? " active" : ""}`} />
    </>
  )
}