export enum INPUT_TYPE {
  TEXT = 'text',
  NUMBER = 'number'
}

export const FORM_INPUT = [
  {
    id: 'product-image_link',
    label: 'Image link',
    value: ''
  },
  {
    id: 'product-name',
    label: 'Product name',
    value: ''
  },
  {
    id: 'product-price',
    label: 'Product price',
    value: '',
    type: INPUT_TYPE.NUMBER
  },
  {
    id: 'product-description',
    label: 'Product description',
    value: ''
  }
]

export const PRODUCT_HEADER = [
  {
    id: 'name',
    label: 'Product name',
    sortAble: true
  },
  {
    id: 'price',
    label: 'Price',
    sortAble: true
  },
  {
    id: 'description',
    label: 'Product phone',
  }
]