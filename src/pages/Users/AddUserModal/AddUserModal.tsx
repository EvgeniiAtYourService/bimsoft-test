import React from 'react'
import styles from './AddUserModal.styles'

export interface IAddUserModal {
  activeAddModal: boolean
  setActiveAddModal: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const AddUserModal = ({
  activeAddModal,
  setActiveAddModal,
  children,
}: IAddUserModal): JSX.Element => {
  const classes = styles()
  return (
    <div
      className={
        activeAddModal
          ? `${classes.wrapper} ${classes.active}`
          : classes.wrapper
      }
      onClick={() => setActiveAddModal(false)}
    >
      <div
        className={
          activeAddModal
            ? `${classes.content} ${classes.contentActive}`
            : classes.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default AddUserModal
