import {createContext, useState} from "react";

const UserContext = createContext();
export default UserContext;

export function UserProvider({children}){
    const userD = require('../assert/user.json');
    const [user, setUser] = useState({...userD});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}