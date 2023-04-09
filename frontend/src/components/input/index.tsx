import { INPUT_TYPE } from "../../types"
import { inputUtils } from "../../utils"
import { InputField, Label } from "./styled"

interface InputProps {
  id: string
  label: string
  type?: INPUT_TYPE
  placeholder?: string
  onChange: (value:string, id?: string) => void
  value: string
}

const Input = ({
  id,
  label,
  type = INPUT_TYPE.TEXT,
  placeholder,
  onChange,
  value
}: InputProps) => {  
  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement    
    const newValue = inputUtils(type, value)    
    onChange(newValue || '', id)
  }
  return(
    <Label id="id">
      {label}
      <InputField value={value} onChange={handleChange} placeholder={placeholder}/>
    </Label>
  )
}

export default Input