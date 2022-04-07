import React from 'react'
import styles from './Loader.styles'

const Loader = (): JSX.Element => {
  const classes = styles()

  return (
    <tr>
      <td style={{ border: 'none' }}>
        <div className={classes.loader}></div>
      </td>
    </tr>
  )
}

export default Loader
