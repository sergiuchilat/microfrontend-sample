import React from "react";
export default function Notifications() {
    return (
        <div id={'app-notifications'}>
            <div className={'icon'}>
                <span>G</span> <sup>2</sup>
            </div>

            <div className={'icon blue'}>
                <span>B</span> <sup>2</sup>
            </div>

            <div className={'icon yellow'}>
                <span>Y</span> <sup>2</sup>
            </div>

            <div className={'icon red'}>
                <span>R</span> <sup>2</sup>
            </div>
        </div>
    )
}