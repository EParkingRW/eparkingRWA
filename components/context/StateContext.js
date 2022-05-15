import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import config from "@/config";
import {convertFromStringToDate} from "@/utils/functions";

const StateContext = createContext();
export default StateContext;

export function StateProvider({children}){
    const [pageTitle, setPageTitle] = useState("E-parking");

    return (
        <StateContext.Provider value={{pageTitle, setPageTitle }}>
            {children}
        </StateContext.Provider>
    )
}