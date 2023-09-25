import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import InfoIcon from "../assets/img/Info.svg";
import '../assets/sass/styles.scss';

import config from "../config/app";

const ProjectCost = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();

    return (
        <div>
            <SideBar selectedindex={2}>
                <div className="main-content h-full">
                    <div className="main-header">
                        <div className="header-title">Smart Contract</div>
                        <></>
                    </div>
                    <div className="main-body h-full">
                        <div className="main-content h-full">
                            <div className="p-94 flex flex-col justify-between  bg-white" style={{ height: "calc(100% - 70px)" }}>
                                <div>
                                    <div className="py-30">
                                        <div className="border text-30">
                                            <div className="flex m-40 justify-between bg-purple cost-p">
                                                <div className="text-white flex flex-col justify-center">Number of Wallets</div>
                                                <div className="wallet_input">
                                                    <input
                                                        className="text-30"
                                                        placeholder="insert amount"
                                                    />
                                                </div>
                                            </div>
                                            <div className="m-40">
                                                <div className="flex justify-between w-full cost-p">
                                                    <div>Cost Factor</div>
                                                    <div>100</div>
                                                </div>
                                                <div className="flex justify-between w-full cost-p border-top-1">
                                                    <div className="font-bold">Total Project Cost</div>
                                                    <div className="font-bold">0</div>
                                                </div>
                                            </div>
                                            <div className="border-purple m-40">
                                                <div className="flex justify-between w-full cost-p">
                                                    <div className="font-bold">Solflare Balance</div>
                                                    <div className="font-bold">SOL 1,000,000.0000</div>
                                                </div>
                                                <div className="flex w-full bg-purple p-5 flex justify-center">
                                                    <div className="text-20 text-white">Sufficient Balance</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {<div className="flex justify-center">
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
                                </div>}
                                <div className="main-footer justify-end">
                                    <div className="error-area"></div>
                                    <div className="button-area flex justify-between">
                                        <button className="back-btn">Back</button>
                                        {/* <button className={`${selectedSC === 0 ? 'proceed-btn' : 'proceed-active-btn'}`}>Proceed</button> */}
                                        <button className='proceed-btn'>Check Summary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </div>
    );

}

export default ProjectCost;