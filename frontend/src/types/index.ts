export enum INPUT_TYPE {
  TEXT = 'text',
  NUMBER = 'number'
}

export enum SORT_TYPE {
  ASC = 'asc',
  DESC = 'desc'
}

export interface CustomerReqBodyType {
  name: string
  address: string
  phone: string
}

export interface OrderReqBodyType {
  name: string
  address: string
  phone: string
}

export interface BagReqBodyType {
  order_id?: string
  customer_id: string
  product?: {
    id: string
    qty: number
  }
}

export interface ProductReqBodyType {
  name: string
  description: string
  price: number
  image_link: string
}

export interface HeaderType {
  id: string
  label: string
  sortAble?: boolean
}

export interface BodyDataType {
  id: string
  label: string
}

export interface BodyType {
  id: string
  data: BodyDataType[]
}

export interface TableProps {
  headers: HeaderType[]
  body: BodyType[]
  action?: {
    view?: boolean
    print?: boolean
    edit?: boolean
    delete?: boolean
  }
  onClick?: (key: string, id: string) => void
}

export interface ProductType {
  id: string
  name: string
  price: number
  description: string
  image_link: string
}

export interface CustomerType {
  id: string
  name: string
  address: string
  phone: string
}