import React, { useEffect, useState } from 'react'
import styles from './Users.styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { IconButton } from '@mui/material'
// import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha'
import Loader from '../../components/Loader/Loader'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import EditUserModal from './EditUserModal/EditUserModal'
import AddUserModal from './AddUserModal/AddUserModal'
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-router-dom'

const Users: React.FunctionComponent = (): JSX.Element => {
  // REDUX
  const {
    users,
    error,
    isFetching,
    fetched,
    selectedUsers,
    editModal,
    addModal,
    searchField,
  } = useTypedSelector((state) => state.usersState)
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
    // ADD USER MODAL
    addFirstName,
    addLastName,
    addEmail,
    addPhone,
    addUser,
    changeSearchField,
    searchUser,
    // -- ADD USER MODAL
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
  const handleEditButtonClick = () => {
    setActiveEditModal(false)
    editUser()
  }
  // -- edit modal
  // add user modal
  const [activeAddModal, setActiveAddModal] = useState<boolean>(false)
  const handleAddUser = () => {
    setActiveAddModal(true)
  }
  const handleAddFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFirstName(e.target.value)
  }
  const handleAddLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    addLastName(e.target.value)
  }
  const handleAddEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    addEmail(e.target.value)
  }
  const handleAddPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    addPhone(e.target.value)
  }
  const handleAddButtonClick = () => {
    setActiveAddModal(false)
    addUser()
  }
  // -- add user modal
  const handleChangeSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchField(e.target.value)
  }
  const handleSearchUser = () => {
    searchUser()
  }
  const classes = styles()
  // MENU
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }
  const [userData, setUserData] = useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })
  const handleSignIn = () => {
    if (userData.email && userData.password) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({ email: userData.email, password: userData.password })
      )
      setUserData({
        email: '',
        password: '',
      })
    }
  }
  const handleChangeSignInEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      email: e.target.value,
    }))
  }
  const handleChangeSignInPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserData((prev) => ({
      ...prev,
      password: e.target.value,
    }))
  }
  const handleSignOut = () => {
    window.localStorage.clear()
    setIsOpen(false)
  }
  // -- MENU
  // @ts-ignore
  const authed = JSON.parse(window.localStorage.getItem('user'))
  return (
    <div className={classes.wrapper}>
      {/* EDIT USER MODAL */}
      <EditUserModal
        activeEditModal={activeEditModal}
        setActiveEditModal={setActiveEditModal}
      >
        <div className={classes.modal}>
          <h3>Edit user: {editModal.id}</h3>
          <label htmlFor="firstNameEdit">First Name</label>
          <input
            type="text"
            id="firstNameEdit"
            placeholder="First Name"
            autoComplete="off"
            value={editModal.firstName}
            onChange={handleEditUserFirstName}
          />
          <label htmlFor="lastNameEdit">Last Name</label>
          <input
            type="text"
            id="lastNameEdit"
            placeholder="Last Name"
            autoComplete="off"
            value={editModal.lastName}
            onChange={handleEditUserLastName}
          />
          <label htmlFor="emailEdit">E-Mail</label>
          <input
            type="text"
            id="emailEdit"
            placeholder="E-Mail"
            autoComplete="off"
            value={editModal.email}
            onChange={handleEditUserEmail}
          />
          <label htmlFor="phoneEdit">Phone</label>
          <input
            type="text"
            id="phoneEdit"
            placeholder="Phone"
            autoComplete="off"
            value={editModal.phone}
            onChange={handleEditUserPhone}
          />
          <button onClick={handleEditButtonClick}>Edit</button>
        </div>
      </EditUserModal>
      {/* -- EDIT USER MODAL */}
      {/* ADD USER MODAL */}
      <AddUserModal
        activeAddModal={activeAddModal}
        setActiveAddModal={setActiveAddModal}
      >
        <div className={classes.modal}>
          <h3>Add user</h3>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            autoComplete="off"
            value={addModal.firstName}
            onChange={handleAddFirstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            autoComplete="off"
            value={addModal.lastName}
            onChange={handleAddLastName}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            placeholder="E-Mail"
            autoComplete="off"
            value={addModal.email}
            onChange={handleAddEmail}
          />
          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            autoComplete="off"
            value={addModal.phone}
            onChange={handleAddPhone}
          />
          <button onClick={handleAddButtonClick}>Add user</button>
        </div>
      </AddUserModal>
      {/* -- ADD USER MODAL */}
      {/* SIDEPANEL */}
      {isOpen && (
        <div className={classes.sidePanel}>
          <img src={logo} alt="BIMSoft" className={classes.logo} />
          <Link to="/users">Users</Link>
          <Link
            to={authed ? '/companies' : '/users'}
            className={!authed ? classes.disabledCompanies : undefined}
          >
            Companies
          </Link>
          <div className={classes.signInBlock}>
            <label htmlFor="signInEmail">E-Mail</label>
            <input
              type="email"
              id="signInEmail"
              value={userData.email}
              onChange={handleChangeSignInEmail}
              autoComplete="off"
              readOnly={authed && true}
              className={authed && classes.inputDisabled}
            />
            <label htmlFor="signInPassword">Password</label>
            <input
              type="password"
              id="signInPassword"
              value={userData.password}
              onChange={handleChangeSignInPassword}
              autoComplete="off"
              readOnly={authed && true}
              className={authed && classes.inputDisabled}
            />
            <div className={classes.buttons}>
              <button onClick={handleSignIn} disabled={authed && true}>
                Sign In
              </button>
              <button onClick={handleSignOut} disabled={!authed && true}>
                Sign Out
              </button>
            </div>
          </div>
          {authed && <p style={{ marginTop: '20px' }}>{authed.email}</p>}
        </div>
      )}
      {/* -- SIDEPANEL */}
      <div className={classes.header}>
        <div className={classes.icons}>
          <ArrowBackIosIcon
            className={
              isOpen
                ? `${classes.arrowIcon} ${classes.arrowIconActive}`
                : classes.arrowIcon
            }
            onClick={handleOpenMenu}
          />
          <DarkModeIcon className={classes.themeIcon} />
        </div>
      </div>
      <div className={classes.sidebar}>213</div>
      <div className={classes.body}>
        <div className={classes.container}>
          <h2 className={classes.heading}>Users</h2>
          <p className={classes.notes}>Users notes</p>
          <div className={classes.searchWrapper}>
            <input
              type="text"
              className={classes.search}
              placeholder="Enter first name..."
              value={searchField}
              onChange={handleChangeSearchField}
            />
            <button className={classes.searchButton} onClick={handleSearchUser}>
              Search
            </button>
          </div>
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
                <IconButton onClick={handleAddUser}>
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
