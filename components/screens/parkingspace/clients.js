import classes from './ClientsCSS.module.css';
import React, {Fragment} from "react";
import {Image, Select} from "@chakra-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faFilter, faEllipsisV,faSortAmountDesc } from '@fortawesome/free-solid-svg-icons'
const Clients = () => {
    const clientSampleObject = [
        {
            image:"https://bomitsolutions.co.uk/wp-content/uploads/bom-car-number-plate-background.png",
            plateNumber:"IT20BOM",
            EntranceTime:"7:00 PM",
            EntranceDate:"24.05.2021",
            totalMin:"123",
            money:"20000"
        },
        {
            image:"https://bomitsolutions.co.uk/wp-content/uploads/bom-car-number-plate-background.png",
            plateNumber:"IT20BOM",
            EntranceTime:"8:30 PM",
            EntranceDate:"24.05.2021",
            totalMin:"123",
            money:"20000"
        },
        {
            image:"https://bomitsolutions.co.uk/wp-content/uploads/bom-car-number-plate-background.png",
            plateNumber:"IT20BOM",
            EntranceTime:"7:30 PM",
            EntranceDate:"24.05.2021",
            totalMin:"123",
            money:"20000"
        },
        {
            image:"https://bomitsolutions.co.uk/wp-content/uploads/bom-car-number-plate-background.png",
            plateNumber:"IT20BOM",
            EntranceTime:"7:30 PM",
            EntranceDate:"24.05.2021",
            totalMin:"123",
            money:"20000"
        }

    ]

    return (
        <div className="card shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">all Clients</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label
                            className="form-label">Show&nbsp;
                            <Select placeholder={"10"}
                            className="d-inline-block form-select form-select-sm">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </Select>&nbsp;</label></div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end dataTables_filter" id="dataTable_filter">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-lg-8"><label className="col-form-label"><input
                                        type="search" className="form-control form-control-sm" aria-controls="dataTable"
                                        placeholder="Search"/></label></div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-4"><span>
                                        <FontAwesomeIcon icon={faSortAmountDesc} color={"black"}/>Sort</span><span className={classes.sort}><FontAwesomeIcon icon={faFilter} color={"black"}/>Filter</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                     aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                        <tr>
                            <th>plate number</th>
                            <th>Entrance time</th>
                            <th>Total min</th>
                            <th>Money</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientSampleObject.map((each, index) => {
                            return <Fragment key={each.plateNumber+index}>
                                <SingleRowOfClient client={each}/>
                            </Fragment>

                        })}

                        </tbody>
                        <tfoot>
                        <tr>
                            <td><strong>plate number</strong></td>
                            <td><strong>Entrance time</strong></td>
                            <td><strong>Total min</strong></td>
                            <td><strong>Money</strong></td>
                            <td><strong></strong></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to
                            10 of 27</p>
                    </div>
                    <div className="col-md-6">
                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="page-item disabled"><a className="page-link" href="#"
                                                                      aria-label="Previous"><span
                                    aria-hidden="true">«</span></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span
                                    aria-hidden="true">»</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

    function SingleRowOfClient ({client}) {
        return (
            <tr>
                <td>
                    <div className={"container "}
                    >
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"><Image alt={""}
                                                                                         className="rounded-circle d-none d-sm-none d-md-inline-block d-lg-inline-block me-2"
                                                                                         fallbackSrc={"/fallback1.svg"}
                                                                                         boxSize={"35px"} src={client.image}/></div>
                            <div className="col-md-8">
                                <div><span className={classes.tableRowUpperSpan}>{client.plateNumber}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex " + classes.tableRowLowerSpan}
                                >last sync 1 min ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div><span className={classes.tableRowUpperSpan}>{client.EntranceTime}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex "+classes.tableRowLowerSpan}
                                >{"on "+client.EntranceDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div><span className={classes.tableRowUpperSpan}>{client.totalMin+ " min"}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex "+classes.tableRowLowerSpan}>on 2.05h</span></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td><span className="badge rounded-pill bg-warning">{client.money +" RWF"}</span></td>
                <td> <FontAwesomeIcon icon={faEllipsisV} color="blue"/></td>
            </tr>
        )
    }
}

export default Clients;