import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Companies.styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import logo from '../../../src/assets/logo.png'

const Companies: React.FunctionComponent = () => {
  const classes = styles()
  const navigate = useNavigate()
  useEffect(() => {
    // @ts-ignore
    if (!JSON.parse(window.localStorage.getItem('user'))) {
      navigate('/users')
    }
  }, [])
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
    navigate('/users')
  }
  // -- MENU
  // @ts-ignore
  const authed = JSON.parse(window.localStorage.getItem('user'))
  return (
    <div className={classes.wrapper}>
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
          <h2 className={classes.heading}>Companies</h2>
          <p className={classes.notes}>Companies notes</p>
          <div className={classes.tableRow}>
            <div className={classes.table}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies
