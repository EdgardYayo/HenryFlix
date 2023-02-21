import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    const moviesFav = useSelector(state => state.moviesFavorites)



    return (
        <header className="navbar">
            <div>
                <h1 className='flix'><img id="logoHenry" src={Logo} width="42" height="42" className="d-inline-block align-top" alt="" />enryFlix</h1>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favorites⭐<span className='indicator'>{moviesFav.length}</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}