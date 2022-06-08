import React from 'react'
import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <h2>Testing 2</h2>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App