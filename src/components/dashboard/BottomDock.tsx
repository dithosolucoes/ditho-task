import React from 'react';
import { SearchIcon, ClockIcon, StarIcon, PlusIcon, UserGroupIcon, CogIcon } from '../common/Icons';

export const BottomDock = () => (
    <nav className="bottom-dock" aria-label="Global Actions">
        <button className="icon-btn logo-btn">D</button>
        <div className="dock-divider"></div>
        <button className="icon-btn" aria-label="Search"><SearchIcon /></button>
        <button className="icon-btn" aria-label="Recent"><ClockIcon /></button>
        <button className="icon-btn" aria-label="Favorites"><StarIcon /></button>
        <button className="icon-btn" aria-label="New Workspace"><PlusIcon /></button>
        <div className="dock-divider"></div>
        <button className="icon-btn" aria-label="Team"><UserGroupIcon /></button>
        <button className="icon-btn" aria-label="Settings"><CogIcon /></button>
        <button className="icon-btn user-avatar-btn">R</button>
    </nav>
);
