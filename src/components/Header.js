import React from 'react'
import Logo from "./../images/coop.png";


function Header() {
  return (
    <header className="header_container flex justify-start bg-sky-400 items-center w-full items-start shadow-md sticky top-0 left-0">
      
        <img src={Logo} className="logo h-24 w-24 flex justify-start p-2 " alt="logo" />
      
    </header>
  )
}

export default Header;