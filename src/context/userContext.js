import React, {createContext,useState} from 'react';

export const UserContext = createContext();


export const UserProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    return (
    <UserContext.Provider value={[isLoggedIn, setLoggedIn]}>
        {props.children}
    </UserContext.Provider>
    )
}


