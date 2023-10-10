import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className='bg-[#391484] mb-20'>
            <div className="container">
                <nav className='flex justify-between items-center text-white py-4'>
                    <div className='font-bold font-primary text-4xl'>JIYANI <span className='text-xl'>TechLabs</span> </div>
                    <ul className='flex items-center space-x-20'>
                        <li className='font-semibold text-lg font-primary'> <Link to='/src/users/pages/UsersHome.js'>Home</Link> </li>
                        <li className='font-semibold text-lg font-primary'> <Link to='/src/users/pages/UsersSignIn.js'> Sign in</Link></li>
                        <li className='font-semibold text-lg font-primary'> <Link to='/src/users/pages/'> Create an account</Link></li>
                    </ul>
                    <button className='font-semibold text-lg font-primary border-2 border-[#fff] py-2 px-14 rounded-full'>ADD</button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
