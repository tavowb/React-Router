import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/"><AiFillHome className='mb-1 ms-3 me-1'></AiFillHome> Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/About">About me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Contact">Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/Api">Uso Api</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/Login">Login</NavLink>
        </li>
     
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-light" type="submit"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;