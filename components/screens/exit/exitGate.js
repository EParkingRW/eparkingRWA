import classes from "./ExitCss.module.css";
import React, {Fragment, useContext, useEffect, useState} from "react";
import {
    Image
} from "@chakra-ui/core";
import StateContext from "@/components/context/StateContext";
import PayByMomo from "@/components/screens/exit/PayByMomo";
import PayByCard from "@/components/screens/exit/PayByCard";
import SocketContext from "@/components/context/socket";
import CarAtGate from "@/components/screens/exit/CarAtGate";
import {convertFromStringToDate} from "@/utils/functions";
import stateContext from "@/components/context/StateContext";


export default function ExitGate(){
    const pageTitle = "Exit Gate";
    const {setPageTitle} = useContext(StateContext);
    const [showPayByMomo, setShowPayByMomo] = useState(false);
    const [showPayByCash, setShowPayByCash] = useState(false);
    const [showPayByCard, setShowPayByCard] = useState(false);
    const [currentPayment, setCurrentPayment] = useState("none");
    const {exitCar} = useContext(SocketContext);

    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    useEffect(() => {
        if(showPayByCard){
            setCurrentPayment("payByCard")
        }
    }, [showPayByCard])
    useEffect(() => {
        if(showPayByCash){
            setCurrentPayment("payByCash")
        }
    }, [showPayByCash])
    useEffect(() => {
        if(showPayByMomo){
            setCurrentPayment("payByMomo")
        }
    }, [showPayByMomo])
    useEffect(() =>{
        if(currentPayment ==="payByCard"){
            setShowPayByCash(false);
            setShowPayByMomo(false);
        }
        else if(currentPayment ==="payByCash"){
            setShowPayByCard(false);
            setShowPayByMomo(false);
        }
        else if(currentPayment ==="payByMomo"){
            setShowPayByCard(false);
            setShowPayByCash(false);
        }
    }, [currentPayment])
    return(
        <Fragment>

            <div className={"container "+classes.containerMain}>
                <div className="row d-flex flex-row justify-content-lg-center align-items-lg-center">
                    <div className={"col-sm-12 col-md-6 col-lg-3 offset-lg-0 "+classes.mainCol}>
                        <div className="card border rounded">
                            <div className={"card-body "+classes.leftClientsCardBody}>
                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " +classes.leftClientsText}>Left
                                    clients</h4>
                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.lefClientValue}>
                                    <strong>16</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6 col-lg-3 offset-lg-2 "+classes.exitedCarsCol}>
                        <div className="card border rounded">
                            <div className={"card-body " +classes.exitedCarsCardBody}>
                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.exitedCarsText}>Exited
                                    vehicle</h4>
                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.exitedCarValue}>64</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CarAtGate showPayByMomo={showPayByMomo} setShowPayByMomo={setShowPayByMomo}
                           showPayByCash={showPayByCash} setShowPayByCash={setShowPayByCash}
                           showPayByCard={showPayByCard} setShowPayByCard={setShowPayByCard}
                           exitCar={exitCar}/>
            </div>
        </Fragment>

    )
}