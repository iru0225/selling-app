import { BodyDataType, BodyType, SORT_TYPE } from "../types";

type DataType = {
  [_key: string]: string
}

export const inputUtils = (type: 'text' | 'number', value: string) => {
  if (type === 'text') return value;
  if (type === 'number') {
    return value.replace(/\D/g, '')
  }
}

export const mapBodyTable = (data: DataType[], key:string, body: string[]) => {
  const newData:BodyType[] = [];
  
  data.forEach((item) => {
    const bodyData: {
      id: string
      data: BodyDataType[]
    } = {
      id: item[key],
      data: []
    }
    
    body.forEach((_key) => {      
      const dataTable = {
        id: _key,
        label: item[_key]
      }

      bodyData.data.push(dataTable)
    })

    newData.push(bodyData)
  })

  return newData;
}

export const sortData = (data: BodyType[], key: string, sort: SORT_TYPE) => {
  const newData = data
  const idx = newData[0].data.findIndex(({ id }) => id === key);
  if (idx < 0) return newData
  newData.sort((a, b) => {
    const aLabel = a.data.find((item) => item.id === key)?.label
    const bLabel = b.data.find((item) => item.id === key)?.label
    if (sort === SORT_TYPE.ASC) {
      if ( aLabel < bLabel ){
        return -1;
      }
      if ( aLabel > bLabel ){
        return 1;
      }
    } else {
      if ( aLabel > bLabel ){
        return -1;
      }
      if ( aLabel < bLabel ){
        return 1;
      }
    }
    
    return 0;
  })
  return newData
}