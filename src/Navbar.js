import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  
  return (
    <nav>
        <NavLink to = '/'>Login</NavLink>
        &nbsp;
        &nbsp;
        <NavLink to = '/fetchImage'>FetchImage</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/singleProduct'>SingleProduct</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/singleUser'>SingleUser</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/addNewUser'>AddNewUser</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/carts'>Carts</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/users'>Users</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/posts'>Posts</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/comments'>Comments</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/cartDetails'>CartDetails</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/Recipes'>Recipes</NavLink> 
        &nbsp;
        &nbsp;
        <NavLink to = '/singleFetchImageUser'>FetchImage</NavLink>  
    </nav>
  )
}
