import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useWallet } from "@solana/wallet-adapter-react";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import '../assets/sass/styles.scss';
import CopyText from "../assets/img/copyText.svg";

import config from "../config/app";

const WalletCreation = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();
    const { wallets, connect, select } = useWallet();

    console.log("++", wallets);

    return (
        <div>
            <SideBar selectedindex={5}>
                <div className="main-content h-full">
                    <div className="main-header">
                        <div className="header-title">Smart Contract</div>
                        <></>
                    </div>
                    <div className="main-body h-full">
                        <div className="p-94 flex flex-col justify-between  bg-white" style={{ height: "calc(100% - 70px)" }}>
                            <div className="flex">
                                <div className="pr-50 w-50">
                                    <div className="py-30">
                                        <div className="flex py-15">
                                            <h1 className="m-0"><span className="text-purple font-bolder text-40">Wallet 1</span> of 10</h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between">
                                            <div>
                                                <h1 className="m-0 pb-15 text-30">Recovery Phrase</h1>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <img
                                                    width="45px"
                                                    height="45px"
                                                    src={CopyText}
                                                    alt="refresh icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-30 text-30 bg-purple">
                                            <div className="flex justify-between w-full p-15 text-white">
                                                <div>design soy flavor frame transport printer pillowcase projector lamp alcohol container door lid</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-30">
                                        <div className="flex pb-15">
                                            <h1 className="m-0 text-30">Information</h1>
                                        </div>
                                        <div className="border px-30 text-30">
                                            <div className="my-15 pb-15">
                                                <div className="flex justify-between w-full pb-15">
                                                    <div className="text-30 font-bold">Contents</div>
                                                </div>
                                                <div className="flex justify-between w-full pb-15 text-20">
                                                    <div>Token</div>
                                                    <div>ICHTSTDA560</div>
                                                </div>
                                                <div className="flex justify-between w-full pb-15 text-20">
                                                    <div>Amount</div>
                                                    <div>100</div>
                                                </div>
                                                <div className="flex justify-between w-full text-20">
                                                    <div>Data Account</div>
                                                    <div>--</div>
                                                </div>
                                            </div>
                                            <div className="my-15">
                                                <div className="flex justify-between w-full pb-15">
                                                    <div className="text-30 font-bold">Sender</div>
                                                </div>
                                                <div className="flex justify-between w-full pb-15 text-20">
                                                    <div>Smart Contract</div>
                                                    <div>Smart Contract 1</div>
                                                </div>
                                                <div className="flex justify-between w-full pb-15 text-20">
                                                    <div>Timestamp</div>
                                                    <div>11/05/23 02:15</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div className="py-30 h-full w-full">
                                        <div className="flex">
                                            <h1 className="m-0 pb-15">Label</h1>
                                        </div>
                                        <div className="border px-30 text-30 w-full" style={{ height: "calc(100% - 55px)" }}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-footer justify-end">
                                <div className="error-area"></div>
                                <div className="button-area flex justify-between">
                                    <button className="back-btn">Back</button>
                                    {/* <button className={`${selectedSC === 0 ? 'proceed-btn' : 'proceed-active-btn'}`}>Proceed</button> */}
                                    <button className='proceed-active-btn'>Next Wallet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </div>
    );

}

export default WalletCreation;