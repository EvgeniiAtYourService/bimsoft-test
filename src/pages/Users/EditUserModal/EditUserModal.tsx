import React from 'react'
import styles from './EditUserModal.styles'

export interface IEditUserModal {
  activeEditModal: boolean
  setActiveEditModal: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const EditUserModal = ({
  activeEditModal,
  setActiveEditModal,
  children,
}: IEditUserModal): JSX.Element => {
  const classes = styles()
  return (
    <div
      className={
        activeEditModal
          ? `${classes.wrapper} ${classes.active}`
          : classes.wrapper
      }
      onClick={() => setActiveEditModal(false)}
    >
      <div
        className={
          activeEditModal
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

export default EditUserModal
