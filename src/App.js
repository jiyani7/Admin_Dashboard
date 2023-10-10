// import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UsersHome from './users/pages/UsersHome'
// import UsersLogin from './users/pages/UsersLogin'
// import UsersSignUp from './users/pages/UsersSignUp'
// import AdminHome from './admin/pages/AdminHome'
// import Layout from './users/component/Layout'
import AdminHome from './admin/pages/AdminHome';
import AdminLogin from './admin/pages/AdminLogin';
import AdminSignUp from './admin/pages/AdminSignUp';
import Layout from './admin/component/layout'



const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/UsersLogin" element={<UsersLogin />} />
          <Route path="/UsersSignUp" element={<UsersSignUp />} />
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<UsersHome />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<AdminSignUp />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />

          <Route path="/" element={<Layout />}>
            <Route path='/AdminHome' element={<AdminHome />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App




// <Route path='UsersHome' element={<AdminLogin />} />
// <Route path="AdminHome" element={<AdminSignIn />} />
// <Route path="" element={<AdminHome />}>
// </Route>