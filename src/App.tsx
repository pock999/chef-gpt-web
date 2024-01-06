import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {RoutesGuard} from './shared'
import { ChatRoom, ChatList, Login, Register, NotFound } from './pages'
import { Navbar } from './components'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { AppLayout, AuthLayout } from './layouts'


function Other() {
  return <>Other</>
}


function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="app" element={<AppLayout />}>
          <Route element={<RoutesGuard />}>
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="chat" element={<ChatList />} />
          <Route path="chat/:id" element={<ChatRoom />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
