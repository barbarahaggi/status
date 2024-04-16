import React from 'react';
import Bandeira from './images/bandeira-brasil.png';
import './inicio.css';



const Nav = () => {
    return (
        <div>
            <nav className='navigation'>
                <h1 className='logo'>YOODASH STATUS</h1>
                <img className='bandeira' src= {Bandeira} alt='Bandeira do Brasil' />
                
            </nav>
        </div>
    )
}


export default Nav 
