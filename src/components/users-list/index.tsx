import { useState, useEffect } from 'react'
import {
  Pagination,
  AddNewUser,
  RemoveUser,
  PreviewUser,
  EditUser,
} from '../index'
import './styles.css'
import type { userType } from './types'

export const UsersList = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [userList, setUserList] = useState([])
  const [allPages, setAllPages] = useState(0)
  const [localState, setLocalState] = useState(false)
  const localChange = () => {
    setLocalState((prvValue) => {
      return !prvValue
    })
  }
  const handlePageChange = (page: number) => {
    setPageIndex(page)
  }
  console.log(userList)

  useEffect(() => {
    setUserList(JSON.parse(localStorage.getItem('users') || '[]'))
    setAllPages(Math.ceil(userList.length / 5))
  }, [pageIndex, localState])
  console.log(allPages)
  return (
    <section>
      <div className='user-table'>
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>تصویر‌نمایه</th>
              <th>عملیات‌ها</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: userType) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>
                  <div className='user-table__image__mask'>
                    <img
                      src={user.picture}
                      alt={`${user.name} ${user.lastName}`}
                    />
                  </div>
                </td>
                <td className='user-table__actions'>
                  <PreviewUser id={user.id} />
                  <RemoveUser updateLocal={localChange} id={user.id} />
                  <EditUser updateLocal={localChange} id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Pagination onPageChange={handlePageChange} pagesDetails={pagesDetails} /> */}
      <AddNewUser updateLocal={localChange} />
    </section>
  )
}
