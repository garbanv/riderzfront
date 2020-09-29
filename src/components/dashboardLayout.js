import React from 'react'
import {UserProvider} from '../context/userContext'


export default function dashboardLayout({children}) {
    return (
        
        <UserProvider>
            {children}
        </UserProvider>
    )
}
