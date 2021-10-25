import React from 'react';
import './navbar.css';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navLeft'>
                <img className='logo' src='https://media.istockphoto.com/vectors/creative-blue-yacht-boat-logo-design-vector-symbol-illustration-vector-id1158114738?k=20&m=1158114738&s=170667a&w=0&h=IabJeiUBbNCM52wjOdjsouIj-yeqy57BHVCqGkDaHEs=' alt='boat' />
            </div>
            <div className='navCenter'>
                <input className='searchInput' type='text' placeholder='Start your search' />
                <SearchIcon className='searchIcon' />
            </div>
            <div className='navRight'>
                <p>Become a host</p>
                <GlobeAltIcon className='globeAltIcon' />
                <div className='menu'>
                    <MenuIcon className='menuIcon'/>
                    <UserCircleIcon className='menuOption'/>
                </div>
            </div>
        </div>
    )
}