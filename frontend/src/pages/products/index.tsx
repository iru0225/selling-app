import { useEffect, useState } from "react"
import Table from "../../components/table"
import { Container, Header, ImageWrapper, ProductDetail, ProductWrapper, TextTitle } from "./styled"
import FormComponent from "../../components/form"
import Button from "../../components/button"
import { FORM_INPUT, PRODUCT_HEADER } from "./constants"
import { mapBodyTable } from "../../utils"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { productAction, productSelector } from "../../redux/products.slice"
import Modal from "../../components/modal"
import { ProductType } from "../../types"
import Image from "../../components/image-component"

const Products = () => {
  const { products } = useAppSelector(productSelector)
  const dispatch = useAppDispatch()
  const [addNew, setAddNew] = useState(false)
  const [inputForm, setInputForm] = useState(FORM_INPUT)
  const [productId, setProductId] = useState('')
  const [product, setProduct] = useState<ProductType | undefined>()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(productAction.getAllItems())
  }, [])

  const setButtonVariant = () => {
    if (addNew) return 'cancel'
    return 'submit'
  }

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

  const deleteProduct = (id: string) => {
    if (id) {
      dispatch(productAction.deleteProduct({id}))
    }
  }

  const submitProduct = () => {
    if (!productId) {
      const payload: {
        [key: string]: string
      } = {
        name: '',
        price: '',
        description: '',
        image_link: ''
      }

      const payloadData = [...inputForm]
      payloadData.forEach((item) => {
        const key = item.id.split('-')[1]
        payload[key] = item.value
      })

      dispatch(productAction.createProduct(payload))
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
        id: productId
      }

      const payloadData = [...inputForm]
      payloadData.forEach((item) => {
        const key = item.id.split('-')[1]
        if (item.value !== product[key]) {
          payload[key] = item.value
        }
      })
      dispatch(productAction.updateProduct(payload))
    }

    setProduct(() => undefined)
    setAddNew((prevState) => !prevState)
  }

  const editProduct = (id: string) => {
    if (id) {
      setProductId(() => id)
      setInputForm((prevState) => {
        const newState = [...prevState]
        const productData = products.find(({ id: prodId }) => prodId === id)
        newState.forEach((item) => {
          const key = item.id.split('-')[1]
          if (productData) {
            item.value = productData[key]
          }
        })
        return newState
      })
      setAddNew((prevState) => !prevState)
    }
  }

  const viewProduct = (id: string) => {
    if (id) {
      return setShowModal((prevState) => !prevState)
    }
  }

  const handleClick = (id: string, value?: string) => {
    switch (id) {
      case 'submit':
        return submitProduct()
      case 'delete':
        return deleteProduct(value || '')
      case 'edit':
        setProduct(() => products.find((item) => item.id === value))
        return editProduct(value || '')
      case 'view':        
        setProduct(() => products.find((item) => item.id === value))
        return viewProduct(value || '')
    }
  }

  const showCurrency = (data?: number) => {
    let currency = ''

    if (data) {
      currency = `Rp. ${new Intl.NumberFormat('id-ID').format(data)}`
    }

    return currency
  }

  const convertPrice = (data: ProductType[]) => {
    const productsData = mapBodyTable(data, 'id', ['name', 'price', 'description'])

    productsData.forEach((item) => {
      const newItem = {...item}
      newItem.data.forEach((element) => {
        if (element.id === 'price') {
          element.label = showCurrency(+element.label)
        }
      })
      return newItem
    })    

    return productsData
  }

  const showForm = () => {
    setInputForm((prevState) => {
      prevState.forEach((item) => {
        item.value = ''
      })
      return prevState
    })
    setProductId(() => '')
    setProduct(() => undefined)
    setAddNew((prevState) => !prevState)
  }

  return(
    <>
      {
        showModal && (
          <Modal
            onCloseModal={() => {
              setShowModal((prevState) => !prevState)
              setProduct(() => undefined)
            }}
          >
            <ProductWrapper>
              <Image src={product?.image_link} alt={`${product?.name} image`} width={250} height={250}/>
              <ProductDetail>
                <span><b>{product?.name}</b></span>
                <span>{showCurrency(product?.price)}</span>
                <span>{product?.description}</span>
              </ProductDetail>
            </ProductWrapper>
          </Modal>
        )        
      }
      <Container>
        <Header>
          <TextTitle>Products</TextTitle>
          <Button
            variant={setButtonVariant()}
            onClick={showForm}
            id='product-button'
          >
            {
              addNew ? 'Cancel' : 'Add new product'
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
              headers={PRODUCT_HEADER}
              body={convertPrice(products)}
              action={{
                delete: true,
                edit: true,
                view: true
              }}
              onClick={handleClick}
            />
          )
        }
      </Container>
    </>
  )
}

export default Products