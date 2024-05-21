import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return ( 
        <header className="  bg-white top-0 w-full z-50 shadow-md flex justify-between items-center py-8">
            <div className='container mx-auto flex items-center justify-between'>
                <Logo />
                <Menu />
            </div>
        </header>
    )
}

export default Header