import AvailableSlot from "@/components/card/AvailableSlot";
import React, {useContext, useEffect} from "react";
import StateContext from "@/components/context/StateContext";
import {DatePicker} from 'chakra-ui-date-input'
export const Dashboard = () => {
    const {setPageTitle} = useContext(StateContext);
    const pageTitle = "Dashboard";
    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    return (
        <div>
            <DatePicker
                placeholder='Date picker placeholder'
                name='date'
                onChange={(event) => console.log(event)}
            />
        </div>
    )

}