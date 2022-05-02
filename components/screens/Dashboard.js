import AvailableSlot from "@/components/card/AvailableSlot";
import React, {useContext, useEffect} from "react";
import StateContext from "@/components/context/StateContext";
export const Dashboard = () => {
    const {setPageTitle} = useContext(StateContext);
    const pageTitle = "Dashboard";
    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    return (
        <div>
            <AvailableSlot/>
        </div>
    )

}