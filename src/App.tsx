import React from 'react'
import './global.css';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';



const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public route */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SignInForm/>}></Route>
          <Route path='/sign-up' element={<SignUpForm/>}></Route>
        </Route>
        {/* private route */}
        {/*<Route>
          <Route index element={<Home/>}></Route>
        </Route>*/}
      </Routes>
    </main>
  )
}

export default App;