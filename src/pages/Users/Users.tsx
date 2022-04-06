import React, { useEffect } from 'react'
import { IUsersProps } from './Users.props'
import { useNavigate } from 'react-router-dom'
import styles from './Users.styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha'
import Loader from '../../components/Loader/Loader'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const Users: React.FunctionComponent<IUsersProps> = (): JSX.Element => {
  const { users, error, isFetching, fetched, selectedUsers } = useTypedSelector(
    (state) => state.usersState
  )
  const { fetchUsers, sortUsers, selectUser, deleteUser } = useActions()
  useEffect(() => {
    if (!fetched) {
      fetchUsers()
    }
  }, [])
  const handleSortUsers = () => {
    sortUsers()
  }
  const handleSelectUser = (userId: number) => {
    selectUser(userId)
  }
  const handleDeleteUser = () => {
    deleteUser()
  }
  const classes = styles()
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.icons}>
          <ArrowBackIosIcon />
          <p onClick={() => navigate('/companies')}>companies</p>
          <DarkModeIcon />
        </div>
      </div>
      <div className={classes.sidebar}>213</div>
      <div className={classes.body}>
        <div className={classes.container}>
          <h2 className={classes.heading}>Заголовок карточки</h2>
          <p className={classes.notes}>Примечание к карточке</p>
          <input
            type="text"
            className={classes.search}
            placeholder="Найти..."
          />
          <div className={classes.tableRow}>
            <div className={classes.table}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <span></span>
                <span></span>
                <tbody>
                  {isFetching ? (
                    <Loader />
                  ) : (
                    users.map((user, i) => (
                      <tr
                        key={i}
                        onClick={() => handleSelectUser(user.id)}
                        className={
                          selectedUsers.includes(user.id)
                            ? classes.selectedUserRow
                            : undefined
                        }
                      >
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))
                  )}
                  {error && <p style={{ padding: '15px' }}>{error}</p>}
                </tbody>
              </table>
            </div>
            <div className={classes.tableButtons}>
              <div className={classes.tableButton}>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
              <div className={classes.tableButton}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
              <div className={classes.tableButton}>
                {selectedUsers.length === 0 ? (
                  <DeleteForeverIcon className={classes.disabledButton} />
                ) : (
                  <IconButton onClick={handleDeleteUser}>
                    <DeleteForeverIcon />
                  </IconButton>
                )}
              </div>
              <div className={classes.tableButton}>
                <IconButton onClick={handleSortUsers}>
                  <SortByAlphaIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
