import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Select from 'react-select';
// import { useApi } from "../hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import InfoIcon from "../assets/img/Info.svg";
import '../assets/sass/styles.scss';

import config from "../config/app";

const { Option } = Select;
const contracts = [
    {
        value: 1,
        label: "Smart Contract 1",
    },
    {
        value: 2,
        label: "Smart Contract 2",
    },
    {
        value: 3,
        label: "Smart Contract 3",
    },
    {
        value: 4,
        label: "Smart Contract 4",
    },
]

const SmartContract = () => {
    // const api = useApi();
    const params = useParams();
    const history = useHistory();
    const [selectedSC, setSelectSC] = useState(0);

    const handleChange = (e) => {
        console.log("e ===> ", e)
        setSelectSC(e.value);
    };


    return (
        <div>
            <SideBar selectedindex={1}>
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
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                <div className="px-15">
                                                    <h1>Select a Smart Contract</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <Select
                                            options={contracts}
                                            formatOptionLabel={sc => (
                                                <div className="flex items-center gap-1" key={sc?.id}>
                                                    <span>{sc?.label}</span>
                                                </div>
                                            )}
                                            onChange={handleChange}
                                            placeholder="Select --"
                                            className="text-30"
                                        />
                                    </div>
                                    <div className="py-30">
                                        <div className="flex px-15">
                                            <h1>Smart Contract Information</h1>
                                        </div>
                                        <div className="border px-30 text-30">
                                            <div className="flex justify-between w-full p-15">
                                                <div>Token Name</div>
                                                <div>--</div>
                                            </div>
                                            <div className="flex justify-between w-full p-15">
                                                <div>Cost</div>
                                                <div>--</div>
                                            </div>
                                            <div className="flex justify-between w-full p-15">
                                                <div>Description</div>
                                                <div>--</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {selectedSC === 0 && <div className="flex justify-center">
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
                                        <button
                                            className="back-btn cursor-pointer"
                                            onClick={() => history.push(`/masterwallet/`)}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className={`cursor-pointer ${selectedSC === 0 ? 'proceed-btn' : 'proceed-active-btn'}`}
                                            onClick={() => history.push(`/projectcost/`)}
                                        >
                                            Proceed
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

export default SmartContract;