import React from "react";
// import logo from './logo.svg'
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesGuard, GuestGuard } from "./shared";
import { CONFIG } from "./config";
import { ChatRoom, Login, Register } from "./pages";
import AppLayout from "./layouts/app";

function App() {
  // const [count, setCount] = useState(0)

  const isAuth = !!localStorage.getItem(CONFIG.tokenKey);

  return (
    <>
      <Routes>
        <Route element={<GuestGuard />}>
          {/* <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route> */}
          <Route path="auth/login" element={<Login />}></Route>
          <Route path="auth/register" element={<Register />}></Route>
        </Route>

        <Route element={<RoutesGuard />}>
          <Route path="app" element={<AppLayout />}>
            {/* <Route path="chat" element={<ChatList />} />
            <Route path="chat/:id" element={<ChatRoom />} /> */}
            <Route path="chat" element={<ChatRoom />}></Route>
            <Route path="chat/:id" element={<ChatRoom />}></Route>
          </Route>
        </Route>

        {/* <Route
          path="/"
          element={
            <Navigate to={isAuth ? "/app/chat" : "/auth/login"} replace />
          }
        /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
