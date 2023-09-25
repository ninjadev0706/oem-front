import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useWallet } from "@solana/wallet-adapter-react";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import '../assets/sass/styles.scss';
import SolflareWallet from "../assets/img/solflare_wallet.svg";
import Refresh from "../assets/img/refresh.svg";
import CopyText from "../assets/img/copyText.svg";
import config from "../config/app";
import TokenlistTable from "../components/TokenlistTable";

const Masterwallet = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();
    const { publicKey, wallets, wallet, connect, select } = useWallet();

    useEffect(() => {
        if (publicKey) {
            console.log("publicKey ++++++++ ", publicKey.toBase58())
        }
    }, [publicKey])

    return (
        <div>
            <SideBar selectedindex={0}>
                <div className="main-content h-full">
                    <div className="main-header">
                        <div className="header-title">Master Wallet</div>
                        <button className="change-wallet-btn">Change Wallet</button>
                    </div>
                    <div className="main-body h-full">
                        <div className="main-content h-full">
                            <div className="p-94 flex flex-col justify-between bg-white" style={{ height: "calc(100% - 70px)" }}>
                                <div>
                                    <div className="py-30">
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                <div className="px-15">
                                                    <h1>Solflare Wallet</h1>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <img
                                                        width="53px"
                                                        height="53px"
                                                        src={SolflareWallet}
                                                        alt="solflare wallet"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center px-15">
                                                <img
                                                    width="45px"
                                                    height="45px"
                                                    src={Refresh}
                                                    alt="refresh icon"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between border p-15">
                                            <div className="flex">
                                                <div className="flex flex-col justify-center text-30 font-normal px-15">
                                                    Wallet ID: &nbsp;
                                                </div>
                                                <div className="flex flex-col justify-center text-20">
                                                    {publicKey && publicKey.toBase58()}
                                                </div>
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
                                    </div>
                                    <div className="py-30">
                                        <div className="flex px-15">
                                            <h1>Contents</h1>
                                        </div>
                                        <div className="flex justify-between border px-15">
                                            <TokenlistTable />
                                        </div>
                                    </div>
                                </div>
                                <div className="main-footer justify-end">
                                    <div className="error-area"></div>
                                    <div className="button-area flex justify-between">
                                        <button className="back-btn cursor-pointer"
                                            onClick={() => history.push(`/selectwallet`)}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="continue-btn"
                                            onClick={() => history.push(`/smartcontract`)}
                                        >
                                            Continue
                                        </button>
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

export default Masterwallet;