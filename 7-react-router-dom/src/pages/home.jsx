import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {


  return (
    <div>
      <div className='header'>
        <NavLink to={'/auth/login'}>Login</NavLink>
        <NavLink to={'/auth/signup'}>SignUp</NavLink>
      </div>
        <Outlet />
    </div>
  )
}

export default Home