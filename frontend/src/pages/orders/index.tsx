import { useNavigate } from 'react-router-dom'
import Table from '../../components/table'
import { mapBodyTable } from '../../utils'
import { Button } from '../products/styled'
import { ORDERS_TABLE } from './constants'
import { Container, Header, TextTitle } from './styled'

const Orders = () => {
  const navigate = useNavigate()

  const createOrder = () => {
    navigate('/create-order')
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
          body={mapBodyTable([], 'id', ['code', 'name', 'subtotal', 'discount', 'total'])}
          action={{
            edit: true,
            delete: true
          }}
          onClick={() => null}
        />
    </Container>
  )
}

export default Orders