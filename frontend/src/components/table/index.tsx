import { useEffect, useState } from "react"
import { BodyDataType, BodyType, HeaderType, SORT_TYPE, TableProps } from "../../types"
import ChevronIcon from "../icons/chevron-icon"
import { ActionButton, ActionWrapper, ButtonWrapper, TBody, THead, TableContainer } from "./styled"
import { sortData } from "../../utils"
import TrashIconWhite from "../icons/trash-icon-white"
import EditIcon from "../icons/edit-icon"
import EyeIconWhite from "../icons/eye-icon-white"

interface SortType {
  id: string
  sort: SORT_TYPE
}

const Table = ({ headers, body, action, onClick }: TableProps) => {  
  const [sort, setSort] = useState<SortType[]>([])
  const [bodyData, setBodyData] = useState<BodyType[]>([])

  useEffect(() => {
    if (body) {
      setBodyData(() => body)
    }
  }, [body])

  useEffect(() => {
    if (headers) {
      const sortList: SortType[] = []
      headers.forEach((item) => {
        if(item.sortAble) {
          sortList.push({
            id: item.id,
            sort: SORT_TYPE.ASC
          })
        }
      })

      setSort(() => sortList)
    }
  }, [])

  const getSort = (id: string) => {
     const sortValue = sort.find((item) => item.id === id)

    return sortValue && sortValue.sort
  }

  const handleSort = (id: string) => {
    const sorting = sort.find((item) => item.id === id)
    if (sorting && bodyData.length > 0) {
      const newData = sortData([...bodyData], id, sorting.sort)
      const newSort = [...sort]
      newSort.forEach((item) => {
        const newObj = item;
        if (item.id === id) {
          if (item.sort === SORT_TYPE.ASC) {
            newObj.sort = SORT_TYPE.DESC
          } else {
            newObj.sort = SORT_TYPE.ASC
          }
        } else {
          if (item.sort === SORT_TYPE.DESC) {
            newObj.sort = SORT_TYPE.ASC
          }
        }

        return newObj
      })
      setBodyData(() => newData)
      setSort(() => newSort)
    }

  }
  return(
    <TableContainer>
      <THead>
        <tr>
          {
            headers.map((item: HeaderType) => (
              <th key={item.id}>
                {
                  item.sortAble && (
                    <button onClick={() => handleSort(item.id)}>
                      <ButtonWrapper sort={getSort(item.id)}>
                        <span>{item.label}</span>
                        <ChevronIcon />
                      </ButtonWrapper>
                    </button>
                  )
                }
                { !item.sortAble && item.label}
              </th>
            ))
          }
          {
            action && action.print && (
              <th/>
            )
          }
          {
            action && action.view && (
              <th/>
            )
          }
          {
            action && action.edit && (
              <th/>
            )
          }
          {
            action && action.delete && (
              <th/>
            )
          }
        </tr>
      </THead>
      <TBody>
        {
          bodyData.map((item: BodyType) => (
            <tr key={item.id}>
              {
                item.data.map((data: BodyDataType) => (
                  <td key={data.id}>
                    {data.label}
                  </td>
                ))
              }
              {
                action && (
                  <td>
                    <ActionWrapper>
                    {
                      action.view && (
                        <ActionButton
                          variant='view'
                          onClick={() => onClick && onClick('view', item.id)}
                        >
                          <EyeIconWhite />
                        </ActionButton>
                      )
                    }
                    {
                      action.edit && (
                        <ActionButton 
                          variant='edit'
                          onClick={() => onClick && onClick('edit', item.id)}
                        >
                          <EditIcon />
                        </ActionButton>
                      )
                    }
                    {
                      action.delete && (
                        <ActionButton
                            variant='delete'
                            onClick={() => onClick && onClick('delete', item.id)}
                          >
                            <TrashIconWhite />
                          </ActionButton>
                      )
                    }
                    </ActionWrapper>
                  </td>
                )
              }
            </tr>
          ))
        }
      </TBody>
    </TableContainer>
  )
}

export default Table