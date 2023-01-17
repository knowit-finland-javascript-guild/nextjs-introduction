import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/** TODO: Create links here */}
      <Link href={'/'}>Home</Link>
      <Link href={'/favoritecat'}>Favoritecat</Link>
      <Link href={'/cats/list'}>Cat list</Link>
    </nav>
  )
}

export default Navbar