import React, { useEffect, useState } from 'react'
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
import EditUserModal from './EditUserModal/EditUserModal'

const Users: React.FunctionComponent<IUsersProps> = (): JSX.Element => {
  // REDUX
  const { users, error, isFetching, fetched, selectedUsers, editModal } =
    useTypedSelector((state) => state.usersState)
  const {
    fetchUsers,
    sortUsers,
    selectUser,
    deleteUser,
    // EDIT MODAL
    setEditModal,
    changeFirstName,
    changeLastName,
    changeEmail,
    changePhone,
    editUser,
    // -- EDIT MODAL
  } = useActions()

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
  // -- REDUX
  // edit modal
  const [activeEditModal, setActiveEditModal] = useState<boolean>(false)
  const handleEditUser = () => {
    setEditModal()
    setActiveEditModal(true)
  }
  const handleEditUserFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFirstName(e.target.value)
  }
  const handleEditUserLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLastName(e.target.value)
  }
  const handleEditUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e.target.value)
  }
  const handleEditUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePhone(e.target.value)
  }
  const editEditUser = () => {
    setActiveEditModal(false)
    editUser()
  }
  // -- edit modal

  const classes = styles()
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper}>
      <EditUserModal
        activeEditModal={activeEditModal}
        setActiveEditModal={setActiveEditModal}
      >
        <div className={classes.EditUserModal}>
          <h3>Edit user: {editModal.id}</h3>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            autoComplete="off"
            value={editModal.firstName}
            onChange={handleEditUserFirstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            autoComplete="off"
            value={editModal.lastName}
            onChange={handleEditUserLastName}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            placeholder="E-Mail"
            autoComplete="off"
            value={editModal.email}
            onChange={handleEditUserEmail}
          />
          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            autoComplete="off"
            value={editModal.phone}
            onChange={handleEditUserPhone}
          />
          <button onClick={editEditUser}>Edit</button>
        </div>
      </EditUserModal>
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
          <h2 className={classes.heading}>Пользователи</h2>
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
                {selectedUsers.length !== 1 ? (
                  <EditIcon className={classes.disabledButton} />
                ) : (
                  <IconButton onClick={handleEditUser}>
                    <EditIcon />
                  </IconButton>
                )}
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
