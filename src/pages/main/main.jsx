import React from "react";
import "./main.css"

export default function Main(){
    return(
        <>
            <div className="main_bg">
                <div className="main">
                    <div className="main_header">
                        <div className="logotips">
                            <img className="logo" src="/img/logo.svg" alt="logo" />
                            <h3 className="logo_name">Преподаватель ПДД и ОБДД</h3>
                        </div>
                        <p className="pages_link">О нас </p>
                        <p className="pages_link">Онлайн тест</p>
                        <p className="pages_link">Экзамен</p>
                        <p className="pages_link">База знаний</p>
                        <p className="pages_link">Новости</p>
                        <p className="pages_link">Контакты</p>
                        <p className="pages_link">Войти</p>
                        <input className="search_inp" type="text" placeholder="Поиск..." />
                    </div>
                    <div className="center_text">
                        <h2>Онлайн - и офлайн</h2>
                        <h1>ОБУЧЕНИЕ</h1>
                        <h2>
                          теории и практики с инстуктором <br />
                          со стажем более 30 лет
                        </h2>
                        <button className="callBtn">Связаться с нами</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="left">
                   <div className="footer_logos">
                        <img className="footer__logo" src="/img/logofooter.svg" alt="" />
                        <h3 className="footer__name">Преподаватель ПДД и ОБДД</h3>
                   </div>
                    <p className="politica">2022, Автошкола “ФОРСАЖ” Политика конфиденциальности</p>
                </div>
                <div className="center">
                    <p className="contacts">Контакты</p>
                    <p className="data__place">Москва, ул. Проспект Андропова д.8</p>
                    <p className="data__place">+7 (495) 181-18-20 autoschoolKoleso@gmail.com</p>
                    <p className="data__place">ВТ-СБ: с 11:00 до 19:00 ПН-ВС: выходной</p>
                </div>
                <div className="right">
                    <p className="right__text">Связаться с нами</p>
                    <a href="#" target='_blank'><img className="icons" src="/img/whatsapp.svg" alt="whatsApp" /></a>
                    <a href="#" target='_blank'><img className="icons" src="/img/instagram.svg" alt="instagram" /></a>
                </div>
            </footer>
        </>
    )
}