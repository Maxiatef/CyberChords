import React from 'react';
import './sidebarButton.css';
import { useLocation} from 'react-router-dom';

export default function SidebarButton(props) {
    const location = useLocation();
    const active = location.pathname === props.to ? 'active' : ''; 
    const btnClass = active ? 'btn-body active' : 'btn-body';
    return (
        <a href={props.to}>
            <div className={btnClass}>
                {props.icon}
                <p>{props.text}</p>
            </div>
        </a>
    );
}
