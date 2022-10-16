import React from "react";
import './SideBarNav.css'
export default function SideBarNav({links, opened = true}) {
    return (
        opened && <div className={'side-bar-nav'} >
            <div>Side Bar Nav</div>
            <div className={'items'}>
                {
                    links && links.map(link =>
                        <a href={link.url} key={link.url}>{link.label}</a>
                    )
                }
            </div>
        </div>
    )
}