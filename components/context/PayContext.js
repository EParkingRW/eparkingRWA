import {createContext, useState} from "react";
import config from "@/config";
import axios from "axios";
import userContext from "@/components/context/UserContext";
import {useContext} from "react";

const PayContext = createContext();
export default PayContext;

export function PayProvider({children}){


    const [userCreation, setPayCreation] = useState({status:config.status.NOTHING,payload: {}});



    async function handlePay(data){
        const config = {
            headers: { Authorization: `Bearer ${"dkdkdk"}` }
        };

        return axios.post(config.backendURL+"/api/v1/payment/momo", {...data})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log(response.data);
                    setPay({...user,...response.data})

                    return {payload: {...response.data}, status: config.status.DONE}
                }
                else {
                    return {payload: {...response.data}, status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error.response.data);
                setPayCreation({payload: {...error.response.data}, status: config.status.ERROR});
                return {payload: {...error.response.data}, status: config.status.ERROR}
            });
    }

    return (
        <PayContext.Provider value={{handlePay}}>
            {children}
        </PayContext.Provider>
    )
}