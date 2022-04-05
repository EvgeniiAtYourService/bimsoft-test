import React from 'react'
import { IUsersProps } from './Users.props'
import styles from './Users.styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const Users: React.FunctionComponent<IUsersProps> = (): JSX.Element => {
  const classes = styles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.icons}>
          <ArrowBackIosIcon />
          <DarkModeIcon />
        </div>
      </div>
      <div className={classes.sidebar}>213</div>
      <div className={classes.body}>
        <div className={classes.container}>
          <h2 className={classes.heading}>12123123</h2>
          <p className={classes.notes}>араралдо</p>
          <input
            type="text"
            className={classes.search}
            placeholder="Найти..."
          />
          <div className={classes.tableRow}>
            <div className={classes.table}></div>
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
                <IconButton>
                  <DeleteForeverIcon />
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
