import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {RoutesGuard} from './shared'

function Login() {
  return <>Login</>
}

function Other() {
  return <>Other</>
}

function App () {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<RoutesGuard />}>
        <Route path="/other" element={<Other />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
