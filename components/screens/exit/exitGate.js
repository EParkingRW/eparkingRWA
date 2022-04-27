import classes from "./ExitCss.module.css";
import React, {useContext, useEffect} from "react";
import {Image} from "@chakra-ui/core";
import StateContext from "@/components/context/StateContext";

export default function ExitGate(){
    const pageTitle = "Exit Gate";
    const {setPageTitle} = useContext(StateContext);

    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    return(
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
            <div className={"row "+classes.carAtGateRow}>
                <div className="col">
                    <h1 className={ classes.carAtGateText}>Car at gate</h1>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="row">
                                        <div className="col">
                                            <p className={ classes.carAtGatePlateNumber}>RAB 11 C</p>
                                        </div>
                                    </div>
                                    <div className="row w-100">
                                        <div className="col w-100"><Image className={classes.carAtGateImage} fallbackSrc={"/fallback1.svg"}
                                            src="https://bomitsolutions.co.uk/wp-content/uploads/bom-car-number-plate-background.png"/></div>
                                    </div>
                                    <h1 className={classes.payByText}>Pay
                                        by</h1>
                                    <div className="row">
                                        <div className="col justify-content-xxl-center align-items-xxl-center">
                                            <div className={"card "+classes.modeOfPaymentCard}>
                                                <div
                                                    className="card-body d-flex justify-content-xxl-center align-items-xxl-center">
                                                    <div className="row">
                                                        <div className="col">
                                                            <button className={"btn btn-primary "+classes.mobileMoneyText} type="button">Mobile money
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button className={"btn btn-primary " + classes.cashText} type="button">Cash
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button className={"btn btn-primary "+classes.bankButton} type="button">Bank
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.entranceTimeCard}>
                                                <div className={"card-body "+ classes.entranceTimeCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.entranceTimeText}>Entrance
                                                        Time</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.entranceTimeValue}>3:
                                                        30 pm</p>
                                                    <p className={"text-center card-text "+classes.entranceTimeDateValue}>on 24.05.2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row "+classes.moneyToPayRow}>
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.moneyToPayCard}>
                                                <div className={"card-body "+classes.moneyToPayCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.moneyToPayText}>Money
                                                        to pay</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.moneyToPayValue}>130,
                                                        000 rwf</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row "+classes.totalTimeRow}>
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.totalTimeCard}>
                                                <div className={"card-body "+classes.totalTimeCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.totalTimeCardText}>Total
                                                        min</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.totalTimeCardValue}>120
                                                        min</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}