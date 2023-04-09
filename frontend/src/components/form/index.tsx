import Input from "../input"
import { INPUT_TYPE } from "../../types"
import { ButtonWrapper, Container } from "./styled"
import Button from "../button"

interface FormType {
  id: string
  label: string
  type?: INPUT_TYPE
  value: string
}

interface AddCustomerFormProps {
  input: FormType[]
  onChange: (value: string, id?: string) => void
  onClick: (id: string) => void
}

const FormComponent = ({
  input,
  onChange,
  onClick
}: AddCustomerFormProps) => {
  return(
    <Container>
      {
        input.map((element: FormType) => (
          <Input
            key={element.id}
            id={element.id}
            label={element.label}
            value={element.value}
            type={element.type}
            onChange={onChange}
          />
        ))
      }
      <ButtonWrapper>
        <Button
          id='submit'
          onClick={onClick}
        >
          Submit
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

export default FormComponent