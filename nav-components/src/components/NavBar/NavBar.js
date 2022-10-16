import React from "react";
import './NavBar.css'
import Logo from "./components/Logo";
import AppName from "./components/AppName";
import Notifications from "./components/Notifications";
import LoginButton from "./components/LoginButton";

export default function NavBar() {
    return (
        <nav>
            <Logo/>
            <AppName/>
            <Notifications/>
            <LoginButton/>
        </nav>
    )
}