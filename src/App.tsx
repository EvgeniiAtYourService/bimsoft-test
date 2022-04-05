import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Companies from './pages/Companies/Companies'
import Users from './pages/Users/Users'

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="companies" element={<Companies />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
