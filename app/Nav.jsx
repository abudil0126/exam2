import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
        <ul className='link__wp'>
            <li><Link className='link' href='/'>Home</Link></li>
            <li><Link className='link' href='/auth'>Auth</Link></li>
        </ul>
    </nav>
  )
}

export default Nav