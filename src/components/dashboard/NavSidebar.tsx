import React from 'react';
import { Workspace } from '../../types';
import { ChevronDownIcon, PlusIcon } from '../common/Icons';

interface NavSidebarProps {
    workspace: Workspace;
    selectedFolderId: string;
    onFolderSelect: (folderId: string) => void;
}

export const NavSidebar = ({ workspace, selectedFolderId, onFolderSelect }: NavSidebarProps) => (
    <aside className="nav-sidebar">
        <header className="nav-sidebar-header">
            <div className="workspace-selector">
                <div className="workspace-icon">{workspace.icon}</div>
                <span className="workspace-name">{workspace.name}</span>
                <ChevronDownIcon />
            </div>
        </header>
        <nav className="nav-sidebar-links">
            <ul>
                {workspace.folders.map(folder => (
                    <li key={folder.id}>
                        <a 
                            href="#" 
                            className={`nav-link ${folder.id === selectedFolderId ? 'active' : ''}`} 
                            onClick={(e) => { e.preventDefault(); onFolderSelect(folder.id) }}
                        >
                            <span className="nav-link-icon">{folder.icon}</span>
                            <span className="nav-link-text">{folder.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        <footer className="nav-sidebar-footer">
            <button className="btn-new-folder"><PlusIcon /> New Folder</button>
        </footer>
    </aside>
);
