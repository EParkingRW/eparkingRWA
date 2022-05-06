import {createContext, useState} from "react";
import config from "@/config";

const UserContext = createContext();
export default UserContext;

function handleSignUp({email,name, phone}){
    fetch("http://localhost:2023/api/v1/auth/signup", {
        method: 'POST',
        body: JSON.stringify({
            email,
            name,
            phone:phone+""
        }),
        headers: {
            'Content-type': 'application/json;'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}
export function UserProvider({children}){
    const userD = require('../assert/user.json');
    const [user, setUser] = useState({...userD});

    return (
        <UserContext.Provider value={{user, setUser, handleSignUp}}>
            {children}
        </UserContext.Provider>
    )
}