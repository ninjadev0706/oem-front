import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useWallet } from "@solana/wallet-adapter-react";
// import { useApi } from "../hooks";
import Header from "../components/Header";
import "../assets/sass/styles.scss";
import SolflareLogo from "../assets/img/solflare-logo.png";
import PhantomLogo from "../assets/img/phantom-logo.png";

import config from "../config/app";

const walletlistdata = [
    {
        walletImg: PhantomLogo,
        walletName: "Phantom",
        detectedState: true,
    },
    {
        walletImg: SolflareLogo,
        walletName: "Solflare",
        detectedState: false,
    },
];

const selectwallet = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();
    const { wallets, connect, select } = useWallet();

    const [selectedwallet, setSelectedwallet] = useState(undefined);

    // console.log("wallets ==> ", wallets);

    return (
        <div>
            <Header></Header>
            <div className="content-body">
                <div className="content-area">
                    <div className="selectwallet-content">
                        <div className="selectwallet-title">Select Wallet</div>
                        <div className="selectwallet-subtitle">
                            Connect a wallet on Solana to continue
                        </div>
                        <div className="wallet-list">
                            {wallets && wallets.map((wallet, index) => {
                                return (
                                    <div
                                        className={`wallet-list-item cursor-pointer ${selectedwallet === wallet.adapter.name
                                            ? "active"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            try{
                                                select(wallet.adapter.name);
                                            } catch(err) {
                                                console.log("err ==> ", err)
                                            }
                                            setSelectedwallet(wallet.adapter.name);
                                        }}
                                        key={wallet.adapter.name}
                                    >
                                        <div className="wallet-category">
                                            <img
                                                className="wallet-icon"
                                                src={wallet.adapter.icon}
                                                alt={wallet.adapter.name}
                                                width="50px"
                                                height="50px"
                                            />
                                            <div className="wallet-name">
                                                {wallet.adapter.name}
                                                &nbsp;
                                                <span style={{color: "red"}}>
                                                    {wallet.readyState === "Installed" ? '' : '(not installed)'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="detected-text">
                                            {/* {item.detectedState
                                                ? "Detected"
                                                : ""} */}
                                        </div>
                                    </div>
                                );
                            })}
                            {/* <div className="wallet-list-item">
                                <div className="wallet-category">
                                    <img className="wallet-icon" src={SolflareLogo} alt="wallet-icon" />
                                    <div className="wallet-name">Solflare</div>
                                </div>
                                <div className="detected-text"></div>
                            </div> */}
                        </div>
                    </div>
                    <button
                        className={`selectwallet-btn ${selectedwallet == undefined ? 'disabled' : ''}`}
                        onClick={() => history.push(`/masterwallet`)}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default selectwallet;
