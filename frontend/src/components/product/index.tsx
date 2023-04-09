import MinusIcon from "../icons/minus-icon"
import PlusIconWhite from "../icons/plus-icon-white"
import { Image } from "../image-component/styled"
import Input from "../input"
import { Button, Container, InputWrapper, Text, TextContainer, Wrapper } from "./styled"

interface ProductItemProps {
  id: string
  src: string
  label: string
  price: number
  qty: number
  onClick: (id: string, qty: number) => void
}

const ProductItem = ({
  id,
  src,
  label,
  price,
  qty,
  onClick
}: ProductItemProps) => {

  const showCurrency = (data: number) => {
    let currency = ''

    if (data) {
      currency = `Rp. ${new Intl.NumberFormat('id-ID').format(data)}`
    }

    return currency
  }

  return(
    <Container>
      <Wrapper>
        <Image
          src={src}
          height={255}
          alt={label}
        />
        <TextContainer>
          <Text variant='title'>{ label }</Text>
          <Text variant='price'>{ showCurrency(price) }</Text>
        </TextContainer>
        <InputWrapper>
          <Button
            id='minus-button'
            onClick={() => onClick(id, qty - 1)}
            disabled={qty < 1}
          >
            <MinusIcon />
          </Button>
          <Text variant='qty'>
            {qty || 0}
          </Text>
          <Button
            id='plus-button'
            onClick={() => onClick(id, qty + 1)}
          >
            <PlusIconWhite />
          </Button>
        </InputWrapper>
      </Wrapper>
    </Container>
  )
}

export default ProductItem