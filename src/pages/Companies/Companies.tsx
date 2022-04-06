import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICompaniesProps } from './Companies.props'

const Companies: React.FunctionComponent<
  ICompaniesProps
> = ({}): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div>
      <p>companies</p>
      <p onClick={() => navigate('/users')}>users</p>
    </div>
  )
}

export default Companies
