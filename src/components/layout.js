import React from 'react'
import Header from './header';
import HeaderB from './headerb';
import {UserProvider} from '../context/userContext'
import {useLocation} from 'react-router-dom';



export default function Layout({children}) {

    let location = useLocation();
    // console.log(location)
    // location.pathname === "/" || location.pathname === "/login" ? <Header/> : <HeaderB/>
    // function isLoginPage(){
    //   if(window.location.href==="http://localhost:3000/login") {
    //         return <Header/>
    //     } else {
    //         return <HeaderB/>
    //     }
    // }
    return (
        
        <UserProvider>
            {location.pathname === "/" || location.pathname === "/login" ? <Header/> : <HeaderB/>}
            {children}
        </UserProvider>
    )
}
