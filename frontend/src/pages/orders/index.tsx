import { useNavigate } from 'react-router-dom'
import Table from '../../components/table'
import { mapBodyTable, showCurrency } from '../../utils'
import { Button } from '../products/styled'
import { ORDERS_TABLE } from './constants'
import { Container, Header, TextTitle } from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { orderAction, orderSelector } from '../../redux/order.slice'
import { customerAction, customerSelector } from '../../redux/customer.slice'
import { useEffect } from 'react'

const Orders = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector(orderSelector)
  const { customers } = useAppSelector(customerSelector)

  console.log(orders);

  useEffect(() => {
    dispatch(customerAction.getAllCustomers())
    dispatch(orderAction.getOrders())
  }, [])
  

  const createOrder = () => {
    navigate('/create-order')
  }

  const convertPrice = (data: []) => {
    const ordersData = mapBodyTable(data, 'id', ['code', 'name', 'subtotal', 'discount', 'total'])

    ordersData.forEach((item) => {
      const newItem = {...item}
      newItem.data.forEach((element) => {
        const { id } = element
        if (id === 'subtotal' || id === 'total') {
          element.label = showCurrency(+element.label)
        }
      })
      return newItem
    })    

    return ordersData
  }

  const handleClick = (id: string, value?: string) => {
    if (id === 'edit') {
      const state = {
        order_id: value,
        customer_id: orders.find((item) => item.id === value).customer_id
      }
      
      navigate('/create-order', { state })
    }
  }

  return(
    <Container>
      <Header>
        <TextTitle>Orders</TextTitle>
        <Button
          variant='submit'
          onClick={createOrder}
          id='create-order-button'
        >
          Create Order
        </Button>
      </Header>
        <Table
          headers={ORDERS_TABLE}
          body={convertPrice(orders)}
          action={{
            edit: true,
            delete: true
          }}
          onClick={handleClick}
        />
    </Container>
  )
}

export default Orders