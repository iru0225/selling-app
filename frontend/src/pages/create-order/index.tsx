import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { productAction, productSelector } from '../../redux/products.slice';
import { Container, Wrapper } from './styled';
import ProductItem from '../../components/product';
import { bagAction, bagSelector } from '../../redux/bag.slice';
import { useLocation } from 'react-router-dom';

const CreateOrder = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { products } = useAppSelector(productSelector)
  const { bag } = useAppSelector(bagSelector)

  useEffect(() => {
    dispatch(productAction.getAllItems())
  }, [])

  useEffect(() => {
    if (location.state) {
      const id = location.state.order_id
      dispatch(bagAction.getBagById({ id }))
    }
  }, [location])

  const handleClick = (id: string, qty: number) => {
    const payload: {
      [key: string]: string | object
    } = {}

    payload.product = {
      id,
      qty
    }
    payload.customer_id = location.state.customer_id || '98e397a1-ca1b-4832-98cf-b8b3d9efaadb'
    
    payload.id = location.state.order_id || bag && bag.id || ''

    dispatch(bagAction.createOrUpdateBag(payload))
  }


  const setQty = (id: string, data: object) => {
    let qty = 0;
    
    if (Object.keys(data).length > 0) {
      qty = data.products?.find((item) => item.item_id === id)?.qty
    }
    
    return qty || 0
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
              qty={setQty(item.id, bag)}
            />
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default CreateOrder