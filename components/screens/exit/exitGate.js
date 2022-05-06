import classes from "./ExitCss.module.css";
import React, {Fragment, useContext, useEffect, useState} from "react";
import {
    Image
} from "@chakra-ui/core";
import StateContext from "@/components/context/StateContext";

export default function ExitGate(){
    const pageTitle = "Exit Gate";
    const {setPageTitle} = useContext(StateContext);
    const [showPayByMomo, setShowPayByMomo] = useState(false);
    const [showPayByCash, setShowPayByCash] = useState(false);
    const [showPayByCard, setShowPayByCard] = useState(false);
    const [currentPayment, setCurrentPayment] = useState("none");

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
                <div className={"row "+classes.carAtGateRow}>
                    <div className="col">
                        <h1 className={ classes.carAtGateText}>Car at gate</h1>
                        <div className={classes.carAtGateCardBody}>
                            <div className="p-3 ">
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
                                                                <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={() => {setShowPayByMomo((i)=>!i)}} type="button">Mobile money
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button onClick={() => {setShowPayByCash((i)=>!i)}} className={"btn btn-primary " + classes.cashText} type="button">Cash
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button onClick={() => {setShowPayByCard((i)=>!i)}} className={"btn btn-primary "+classes.bankButton} type="button">Bank
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className={"card-footer"}>
                                                        <div className={"row"}>
                                                            <div className={"col"}>
                                                                <div className={showPayByMomo?"d-block ":"d-none"}>
                                                                    <div>
                                                                        <form>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="exampleInputTel"
                                                                                       className="form-label">phone number</label>
                                                                                <input type="email"
                                                                                       className="form-control"
                                                                                       id="exampleInputTel"
                                                                                       aria-describedby="TelHelp"/>
                                                                                    <div id="emailHelp"
                                                                                         className="form-text">Enter customer phone number
                                                                                    </div>
                                                                            </div>

                                                                            <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={() => {}} type="button">pay
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className={showPayByCash?"d-block ":"d-none"}>
                                                                    <div>
                                                                        <form>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="exampleInputTel"
                                                                                       className="form-label">phone number</label>
                                                                                <input type="email"
                                                                                       className="form-control"
                                                                                       id="exampleInputTel"
                                                                                       aria-describedby="TelHelp"/>
                                                                                <div id="emailHelp"
                                                                                     className="form-text">Enter customer phone number
                                                                                </div>
                                                                            </div>

                                                                            <button onClick={() => {}} className={"btn btn-primary " + classes.cashText} type="button">Cash
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div className={showPayByCard?"d-block ":"d-none"}>
                                                                    <div>
                                                                        <div className="container-fluid">

                                                                            <div className="row">
                                                                                <div className="col mx-auto">
                                                                                    <div
                                                                                        className="bg-white rounded-lg shadow-sm p-5">
                                                                                        <ul role="tablist"
                                                                                            className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                                                                                            <li className="nav-item">
                                                                                                <a data-toggle="pill"
                                                                                                   href="#nav-tab-card"
                                                                                                   className="nav-link active rounded-pill">
                                                                                                    <i className="fa fa-credit-card"></i>
                                                                                                    Credit Card
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div className="tab-content">

                                                                                            <div id="nav-tab-card"
                                                                                                 className="tab-pane fade show active">
                                                                                                <p className="alert alert-success">Some
                                                                                                    text success or
                                                                                                    error</p>
                                                                                                <form role="form">
                                                                                                    <div
                                                                                                        className="form-group">
                                                                                                        <label
                                                                                                            htmlFor="username">Full
                                                                                                            name (on the
                                                                                                            card)</label>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            name="username"
                                                                                                            placeholder="Jeff Doe"
                                                                                                            required
                                                                                                            className="form-control" />
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="form-group">
                                                                                                        <label
                                                                                                            htmlFor="cardNumber">Card
                                                                                                            number</label>
                                                                                                        <div
                                                                                                            className="input-group">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                name="cardNumber"
                                                                                                                placeholder="Your card number"
                                                                                                                className="form-control"
                                                                                                                required />
                                                                                                            <div
                                                                                                                className="input-group-append">
                                                                                                                <span className="input-group-text text-muted">
                                                                                                                                            <i className="fa fa-cc-visa mx-1"></i>
                                                                                                                                            <i className="fa fa-cc-amex mx-1"></i>
                                                                                                                                            <i className="fa fa-cc-mastercard mx-1"></i>
                                                                                                                                        </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="row">
                                                                                                        <div
                                                                                                            className="col-sm-8">
                                                                                                            <div
                                                                                                                className="form-group">
                                                                                                                <label><span
                                                                                                                    className="hidden-xs">Expiration</span></label>
                                                                                                                <div
                                                                                                                    className="input-group">
                                                                                                                    <input
                                                                                                                        type="number"
                                                                                                                        placeholder="MM"
                                                                                                                        name=""
                                                                                                                        className="form-control"
                                                                                                                        required />
                                                                                                                    <input
                                                                                                                        type="number"
                                                                                                                        placeholder="YY"
                                                                                                                        name=""
                                                                                                                        className="form-control"
                                                                                                                        required />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-sm-4">
                                                                                                            <div
                                                                                                                className="form-group mb-4">
                                                                                                                <label
                                                                                                                    data-toggle="tooltip"
                                                                                                                    title="Three-digits code on the back of your card">CVV
                                                                                                                    <i className="fa fa-question-circle"></i>
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    required
                                                                                                                    className="form-control" />
                                                                                                            </div>
                                                                                                        </div>


                                                                                                    </div>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm
                                                                                                    </button>
                                                                                                </form>
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
        </Fragment>

    )
}