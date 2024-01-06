import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { RoutesGuard, GuestGuard } from './shared'
import { ChatRoom, ChatList, Login, Register, NotFound } from './pages'
import { Navbar } from './components'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { AppLayout, AuthLayout } from './layouts'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<RoutesGuard />}>
          <Route path="app" element={<AppLayout />}>
            <Route path="chat" element={<ChatList />} />
            <Route path="chat/:id" element={<ChatRoom />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
