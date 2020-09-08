import React from 'react'
import Header from './header';
import HeaderB from './headerb';


export default function layout({children}) {
    function isLoginPage(){
      if(window.location.href==="http://localhost:3000/login") {
            return <Header/>
        } else {
            return <HeaderB/>
        }
    }
    return (
        <div>
            {isLoginPage()}
            {children}
        </div>
    )
}
