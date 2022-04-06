import React from 'react'
import styles from './Companies.styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Companies: React.FunctionComponent = (): JSX.Element => {
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
          <h2 className={classes.heading}>Компании</h2>
          <p className={classes.notes}>Примечание к карточке</p>
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
