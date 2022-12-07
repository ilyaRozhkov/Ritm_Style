import React from "react";
import "./session.css";

export default function Session(){
    return(
        <div>
            <h1 className="title">Сеансы RitmStyle</h1>
            <div className="sessioncontainer">
                <div className="session big-content">
                    <p className="session big-title">Стандартный RitmStyle</p>
                </div>
                <div className="session column-content">
                    <div className="session litle-content">
                        <p className="session litle-title">RitmStyle для пар</p>
                    </div>
                    <div className="session litle-content">
                        <p className="session litle-title">RitmStyle для беременных</p>
                    </div>
                </div>
                <div className="session column-content">
                    <div className="session litle-content">
                        <p className="session litle-title-rigth-title">RitmStyle с полным погружением под воду</p>
                    </div>
                    <div className="session litle-content">
                        <p className="session litle-title-rigth-title">RitmStyle + красочная подводная фотосессия</p>
                    </div>
                </div>
            </div>
        </div>
    )
}