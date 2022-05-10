import {createContext, useState} from "react";
import config from "@/config";
import axios from "axios";

const UserContext = createContext();
export default UserContext;

export function UserProvider({children}){

    const userD = require('../assert/user.json');
    const [user, setUser] = useState({...userD});
    const [userCreation, setUserCreation] = useState({status:config.status.NOTHING,payload: {}});





    async function handleSignUp(data){
        console.log(JSON.stringify({...data}));
        setUserCreation({...userCreation, status: config.status.LOADING});
        return axios.post(config.backendURL+"/api/v1/auth/signup", {...data})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log(response.data);
                    setUserCreation({payload: {...response.data}, status: config.status.DONE});
                    return {payload: {...response}, status: config.status.DONE}
                }
                else {
                    setUserCreation({payload: {...response.data}, status: config.status.ERROR});
                    return {payload: {...response.data}, status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error.response.data);
                setUserCreation({payload: {...error.response.data}, status: config.status.ERROR});
                return {payload: {...error.response.data}, status: config.status.ERROR}
            });
    }

    function handleLogin({login,password}){
        fetch(config.backendURL+"/api/v1/auth/login", {
            method: 'POST',
            body: JSON.stringify({
                login,
                password
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

    return (
        <UserContext.Provider value={{user, setUser, handleSignUp,handleLogin,userCreation, setUserCreation}}>
            {children}
        </UserContext.Provider>
    )
}