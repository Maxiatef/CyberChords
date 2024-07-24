import React from 'react';
import './sidebarButton.css';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarButton({ to, icon, text, onClick }) {
    const location = useLocation();
    const active = location.pathname === to ? 'active' : '';
    const btnClass = active ? 'btn-body active' : 'btn-body';

    return (
        <div onClick={onClick}>
            {to ? (
                <Link to={to}>
                    <div className={btnClass}>
                        {icon}
                        <p>{text}</p>
                    </div>
                </Link>
            ) : (
                <div className={btnClass}>
                    {icon}
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
