import React, {useContext, useEffect, useState} from "react";
import {Image} from "@chakra-ui/core";
import classes from "./EntranceCss.module.css"
import StateContext from "@/components/context/StateContext";
import io from "socket.io-client";
import config from "@/config";
import EntranceCar from "@/components/screens/entrance/EntranceCar";
import SocketContext from "@/components/context/socket";
export default function Entrance(){
    const {setPageTitle} = useContext(StateContext);
    const pageTitle = "Entrance";
    const [entranceCar, setEntranceCar] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const {socket} = useContext(SocketContext);
    useEffect(() => {
        setInterval(function() {
            setElapsedTime((i) => i+1);
        }, 1000);
    },[])
    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    useEffect(() => {
        // const socket = io(config.backendURL);
        socket.on("connection", () => console.log("connected"));
        socket.on("disconnect", () => console.log("disconnected"));
        socket.on("data", (data) => {
            console.log(data);
            setEntranceCar({...data.data})
            setElapsedTime(0);
        });


    },[])
    return (
        <div className={"container " + classes.containerCustom}>
            <div className="row">
                <div className={"col-sm-12 col-md-6 col-lg-3 " + classes.customCss2}>
                    <div className="card border rounded">
                        <div className={"card-body align-items-lg-center " + classes.topCardBody}
                        >
                            <div className="row">
                                <div className="col">
                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center "+classes.gateIsOpen}
                                        >Gate
                                        is open</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-inline-flex justify-content-lg-center">
                                    <button className={"btn btn-primary " + classes.closeGate} type="button"
                                            >Close
                                        gate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-sm-12 col-md-6 col-lg-3 " + classes.colOfSlots} >
                    <div className="card border rounded">
                        <div className={"card-body "+classes.slotsCardBody}>
                            <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " + classes.availableSlots} >available
                                slots</h4>
                            <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.availableSlotsValue}
                               >
                                <strong>12/400</strong></p>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-6 col-lg-3 "+classes.cardColumn}>
                    <div className="card border rounded">
                        <div className={"card-body " +classes.vehicleInCardBody}>
                            <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.vehicleInText}>Total
                                vehicle in</h4>
                            <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.vehicleInValue}>43</p>
                        </div>
                    </div>
                </div>
                <div className={"col-md-6 col-lg-3 "+classes.cardColumn}>
                    <div className="card border rounded">
                        <div className={"card-body "+classes.totalClientsCardBody}
                        >
                            <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.totalClientsText}>total
                                clients/day</h4>
                            <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.totalClientsValue}>
                                <strong>12/400</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row "+classes.carAtGateRow}>
                <div className={"col-12 col-md-6 "+classes.carAtGateCol}>
                    <EntranceCar entranceCar = {entranceCar} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />

                </div>
                <div className="col-md-6">
                    <div className={"card "+classes.recentCarsCard}>
                        <div className="card-header">
                            <div className="row">
                                <div className="col">
                                    <h4>Recent cars</h4>
                                </div>
                                <div className="col">
                                    <h6 className={"text-end "+classes.entranceTimeText}>Entrance time</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className={"row "+classes.recentCarsPlatteNumberRow}>
                                <div className="col">
                                    <p className={classes.recentCarsValue}>RAE 123 F</p>
                                </div>
                                <div className="col">
                                    <p className={"text-end "+classes.recentCarsEntranceTime}>3: 00 pm</p>
                                </div>
                            </div>
                            <div className={"row "+classes.recentCarsPlatteNumberRow}>
                                <div className="col">
                                    <p className={classes.recentCarsValue}>RAE 123 F</p>
                                </div>
                                <div className="col">
                                    <p className={"text-end "+classes.recentCarsEntranceTime}>3: 00 pm</p>
                                </div>
                            </div>
                            <div className={"row "+classes.recentCarsPlatteNumberRow}>
                                <div className="col">
                                    <p className={classes.recentCarsValue}>RAE 123 F</p>
                                </div>
                                <div className="col">
                                    <p className={"text-end "+classes.recentCarsEntranceTime}>3: 00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}