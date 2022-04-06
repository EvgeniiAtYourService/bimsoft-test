import React from 'react'
import styles from './Loader.styles'

const Loader = (): JSX.Element => {
  const classes = styles()
  return <div className={classes.loader}></div>
}

export default Loader
