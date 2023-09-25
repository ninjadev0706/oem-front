import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import '../assets/sass/styles.scss';

import config from "../config/app";

const Payment = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();

    return (
        <div>
            <SideBar selectedindex={4}>
                <div className="main-content h-full">
                    <div className="main-header">
                        <div className="header-title">Smart Contract</div>
                        <></>
                    </div>
                    <div className="main-body h-full">
                        <div className="p-94 flex flex-col justify-between  bg-white" style={{ height: "calc(100% - 70px)" }}>
                            <div>
                                <div className="py-30">
                                    <div className="flex px-15">
                                        <h1 className="m-0 pb-15">Transfer Details Summary</h1>
                                    </div>
                                    <div className="border px-30 text-30">
                                        <div className="flex justify-between w-full p-15">
                                            <div>Number of Wallets</div>
                                            <div>10</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Cost Factor</div>
                                            <div>100</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Total Project Cost</div>
                                            <div>1,000.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-30">
                                    <div className="flex p-15">
                                        <h1 className="m-0">Wallet Creation Contents&nbsp;</h1>
                                        <span className="flex flex-col justify-end">(this will be what&apos;s in the wallets)</span>
                                    </div>
                                    <div className="border px-30 text-30">
                                        <div className="flex justify-between w-full p-15">
                                            <div>Token Name</div>
                                            <div>ICHTSTDA560</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Amount to Transfer</div>
                                            <div>100 SOL</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Data Account</div>
                                            <div>--</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Information 1</div>
                                            <div>--</div>
                                        </div>
                                        <div className="flex justify-between w-full p-15">
                                            <div>Information 2</div>
                                            <div>--</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {selectedSC === 0 && <div className="flex justify-center">
                                    <div className="bg-pink flex p-15 w-fit">
                                        <div className="flex flex-col justify-center px-15">
                                            <img
                                                width="36px"
                                                height="36px"
                                                src={InfoIcon}
                                                alt="refresh icon"
                                            />
                                        </div>
                                        <div className="text-white text-30 px-15">Please select Smart Contract</div>
                                    </div>
                                </div>} */}
                            <div className="main-footer justify-end">
                                <div className="error-area"></div>
                                <div className="button-area flex justify-between">
                                    <button className="back-btn">Back</button>
                                    {/* <button className={`${selectedSC === 0 ? 'proceed-btn' : 'proceed-active-btn'}`}>Proceed</button> */}
                                    <button className='continue-btn'>Proceed to Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </div>
    );

}

export default Payment;