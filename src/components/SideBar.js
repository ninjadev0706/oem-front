import React, { useState } from "react";

import '../assets/sass/styles.scss'
import Logo from "../assets/img/logo.png";
import Wallet from "../assets/img/Wallet.png";
import Money from "../assets/img/Money.png";
import Widget from "../assets/img/Widget.png";
import Rectangle from "../assets/img/Rectangle.png";
import Sort from "../assets/img/Sort.png";
import MoneyActive from "../assets/img/MoneyActive.png";
import WidgetActive from "../assets/img/WidgetActive.png";
import RectangleActive from "../assets/img/RectangleActive.png";
import SortActive from "../assets/img/SortActive.png";
import Check from "../assets/img/Check.png";

const menuList = [
    {
        index: 1,
        name: 'Master Wallet',
        icon: Wallet,
        activeicon: Wallet,
        isactive: true,
    },
    {
        index: 2,
        name: 'Smart Contract',
        icon: Rectangle,
        activeicon: RectangleActive,
        isactive: false,
    },
    {
        index: 3,
        name: 'Project Cost',
        icon: Money,
        activeicon: MoneyActive,
        isactive: false,
    },
    {
        index: 4,
        name: 'Payment',
        icon: Sort,
        activeicon: SortActive,
        isactive: false,
    },
    {
        index: 5,
        name: 'Wallet Creation',
        icon: Widget,
        activeicon: WidgetActive,
        isactive: false,
    },
]

const SideBar = ({ children, selectedindex }) => {

    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-header-container">
                        <img src={Logo} alt="logo" className="header-logo" />
                        <div className="header-title">Utility Project</div>
                    </div>
                    <div className="side-menu">
                        <div className="menu-item">
                            {menuList.map((item, index) => {
                                return (
                                    <div
                                        className={`menu-list-item ${ (selectedindex === index ? "active" : "") || (selectedindex > index ? "selected" : "")}`}
                                        key={item.index}
                                    >
                                        <div className="item-area">
                                            <div className={`item-index ${ (selectedindex === index ? "active" : "") || (selectedindex > index ? "selected" : "")}`}>{item.index}</div>
                                            <div className={`item-name ${ (selectedindex === index ? "active" : "") || (selectedindex > index ? "selected" : "")}`}>{item.name}</div>
                                        </div>
                                        <div className="item-icon-area">
                                            <img
                                                className={`item-icon ${ (selectedindex === index ? "active" : "") || (selectedindex > index ? "selected" : "")}`}
                                                src={(selectedindex === index ? item.activeicon : (selectedindex > index ? Check : item.icon))}
                                                alt="menu-icon"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </>
    );
};
export default SideBar;
