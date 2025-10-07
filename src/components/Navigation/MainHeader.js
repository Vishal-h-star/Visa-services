import React, { useState } from 'react';


const MainHeader = props =>{
    const [navbar, setNavbar] = useState();

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    return <header className={navbar ? 'main-header active' : 'main-header'}>{props.children}</header>;
}

export default MainHeader;