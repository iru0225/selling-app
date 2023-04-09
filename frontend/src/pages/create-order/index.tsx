import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { productAction, productSelector } from '../../redux/products.slice';
import { Container, Wrapper } from './styled';
import ProductItem from '../../components/product';
import { bagAction, bagSelector } from '../../redux/bag.slice';

const CreateOrder = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(productSelector)
  const { bag } = useAppSelector(bagSelector)

  console.log(bag);

  useEffect(() => {
    dispatch(productAction.getAllItems())
  }, [])

  const handleClick = (id: string, qty: number) => {
    const payload: {
      [key: string]: string | object
    } = {}

    payload.product = {
      id,
      qty
    }
    payload.customer_id = '98e397a1-ca1b-4832-98cf-b8b3d9efaadb'
    console.log(bag.id);
    
    payload.id = bag ? bag.id : ''

    dispatch(bagAction.createOrUpdateBag(payload))
  }


  return(
    <Container>
      <Wrapper>
        {
          products.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              src={item.image_link}
              label={item.name}
              price={item.price}
              onClick={handleClick}
              qty={0}
            />
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default CreateOrder