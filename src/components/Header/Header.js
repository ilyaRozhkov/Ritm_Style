import React from "react";
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

import "./header.css";

export default function HeaderLine(){
    return(
        <Router>
            <div className="container">
                <div className="logo"></div>
                <nav className="menu">
                    <Link to="/" className="menu menu_item">Главная</Link>
                    <Link to="/session" className="menu menu_item">Сеансы</Link>
                    <Link className="menu menu_item">Отзывы</Link>
                    <Link className="menu menu_item">Новости</Link>
                    <Link className="menu menu_item">Обо мне</Link>
                    <Link className="menu menu_item">Блог</Link>
                </nav>
                <div className="login">
                    <button className="btn">Записаться на сеанс</button>
                </div>
            </div>
        </Router>
    )
}