import React from 'react'
import Logo from './robinhood.svg'

function Header() {
    return (
        <div className="header_wrapper">
            {/* logo */}
            <div className="header_logo">
                <img src={Logo} width={25} /> 
            </div>
            {/* search */}
            <div className="header_search">
                <div className="header_searchContainer">

                </div>
            </div>
            {/* menuitems */}
        </div>
    )
}

export default Header
