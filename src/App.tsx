import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {RoutesGuard} from './shared'
import { ChatRoom } from './pages'
import { ChatList } from './pages/ChatList'
import { Navbar } from './components'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';



function Login() {
  return <>Login</>
}

function Other() {
  return <>Other</>
}

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title={'Chef-GPT'}/>
      <Container maxWidth={false} style={{ padding: 0, paddingTop: '1rem', height: 'calc(100% - 87px)' }}>
        <Routes>
          <Route element={<RoutesGuard />}>
            <Route path="/other" element={<Other />} />
          </Route>
          <Route path="/chat" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
