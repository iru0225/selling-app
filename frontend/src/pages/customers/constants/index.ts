export enum INPUT_TYPE {
  TEXT = 'text',
  NUMBER = 'number'
}

export const FORM_INPUT = [
  {
    id: 'customer-name',
    label: 'Customer name',
    value: ''
  },
  {
    id: 'customer-address',
    label: 'Customer address',
    value: ''
  },
  {
    id: 'customer-phone',
    label: 'Customer phone',
    value: '',
    type: INPUT_TYPE.NUMBER
  }
]

export const CUSTOMER_TABLE = [
  {
    id: 'name',
    label: 'Customer name',
    sortAble: true
  },
  {
    id: 'address',
    label: 'Customer address',
  },
  {
    id: 'phone',
    label: 'Customer phone',
  }
]