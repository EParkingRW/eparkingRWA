import {createContext, useState} from "react";
import io from "socket.io-client";
import config from "@/config";

const SocketContext = createContext();
export default SocketContext;

export function SocketProvider({children}){
    const [socket, setSocket] = useState(io(config.backendURL));

    return (
        <SocketContext.Provider value={{socket, setSocket}}>
            {children}
        </SocketContext.Provider>
    )
}