import React from 'react';
import './menu.css';

export const Menu = () => {
    return (
        <>
        <div className="navigation">
            <ul>
                <li className="list active"><a href="#"><span className="icon"><ion-icon name="home-outline"></ion-icon></span><span className="title">Home</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="person-outline"></ion-icon></span><span className="title">Profile</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span><span className="title">Messages</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="settings-outline"></ion-icon></span><span className="title">Setting</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="help-outline"></ion-icon></span><span className="title">Help</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span><span className="title">password</span></a></li>
                <li className="list"><a href="#"><span className="icon"><ion-icon name="log-out-outline"></ion-icon></span><span className="title">Sign out</span></a></li>
            </ul>
        </div> 
        <div className="toggle">
        <ion-icon name="menu-outline" className="open"></ion-icon>
        <ion-icon name="close-outline" className="close"></ion-icon>
        </div>
        </>
    )
}
