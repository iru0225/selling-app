import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { customerAction, customerSelector } from "../../redux/customer.slice"
import { CUSTOMER_TABLE, FORM_INPUT } from "./constants"
import Table from "../../components/table"
import { mapBodyTable } from "../../utils"
import { Container, Header, TextTitle } from "./styled"
import FormComponent from "../../components/form"
import Button from "../../components/button"
import { CustomerType } from "../../types"

const Customers = () => {
  const { customers } = useAppSelector(customerSelector)
  const dispatch = useAppDispatch()
  const [inputForm, setInputForm] = useState(FORM_INPUT)
  const [addNew, setAddNew] = useState(false)
  const [customerId, setCustomerId] = useState('')
  const [customer, setCustomer] = useState<CustomerType | undefined>()

  useEffect(() => {
    dispatch(customerAction.getAllCustomers())
  }, [])

  const handleChange = (value: string, key?: string) => {
    setInputForm((prevState) => {
      const newState = [...prevState]
      newState.forEach((element) => {
        if (element.id === key) {
          element.value = value
        }

        return element
      })
      return newState
    })
  }

  const submitCustomer = () => {
    if (!customerId) {
      const payload: {
        [key: string]: string
      } = {
        name: '',
        address: '',
        phone: ''
      }
  
      const payloadData = [...inputForm]
      payloadData.forEach((item) => {
        const key = item.id.split('-')[1]
        payload[key] = item.value
      })
  
      dispatch(customerAction.createCustomer(payload))
      setInputForm((prevState) => {
        prevState.forEach((item) => {
          item.value = ''
        })
        return prevState
      })
    } else {
      const payload: {
        [key: string]: string
      } = {
        id: customerId
      }

      const payloadData = [...inputForm]
      payloadData.forEach((item) => {
        const key = item.id.split('-')[1]
        if (item.value !== customer[key]) {
          payload[key] = item.value
        }
      })
      dispatch(customerAction.updateCustomer(payload))
    }

    setAddNew((prevState) => !prevState)
    setCustomer(() => undefined)
  }
  

  const editCustomer = (id: string) => {    
    if (id) {
      setCustomerId(() => id)
      setInputForm((prevState) => {        
        const newState = [...prevState]
        const customerData = customers.find(({ id: custId }) => custId === id)
        newState.forEach((item) => {
          const key = item.id.split('-')[1]
          if (customerData) {
            item.value = customerData[key]
          }
        })
        
        return newState
      })
      setAddNew((prevState) => !prevState)
    }
  }

  const deleteCustomer = (id: string) => {
    if (id) {
      dispatch(customerAction.deleteCustomer({id}))
    }
  }

  const handleClick = (id: string, value?: string) => {
    switch (id) {
      case 'submit':
        return submitCustomer()
      case 'delete':
        return deleteCustomer(value || '')
      case 'edit':
        setCustomer(() => customers.find((item) => item.id === value))
        return editCustomer(value || '')
    }
  }

  const setButtonVariant = () => {
    if (addNew) return 'cancel'
    return 'submit'
  }

  const showForm = () => {
    setInputForm((prevState) => {
      prevState.forEach((item) => {
        item.value = ''
      })
      return prevState
    })
    setCustomerId(() => '')
    setCustomer(() => undefined)
    setAddNew((prevState) => !prevState)
  }

  return(
    <Container>
      <Header>
        <TextTitle>Customers</TextTitle>
        <Button
          variant={setButtonVariant()}
          onClick={showForm}
          id='button'
        >
          {
            addNew ? 'Cancel' : 'Add new customer'
          }
        </Button>
      </Header>
      {
        addNew && (
          <FormComponent
            input={inputForm}
            onChange={handleChange}
            onClick={handleClick}
          />
        )
      }
      {
        !addNew && (
          <Table
          headers={CUSTOMER_TABLE}
          body={mapBodyTable(customers, 'id', ['name', 'address', 'phone'])}
          action={{
            edit: true,
            delete: true
          }}
          onClick={handleClick}
        />
        )
      }
    </Container>
  )
}

export default Customers