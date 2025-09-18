import React from 'react';
import { Workspace, Folder, Project } from '../../types';
import { FolderIcon, PlusIcon } from '../common/Icons';
import { ProjectCard } from '../project/ProjectCard';

interface WorkspaceHomeProps {
    workspace: Workspace;
    folder: Folder;
    projects: Project[];
    onProjectSelect: (projectId: string) => void;
}

export const WorkspaceHome = ({ workspace, folder, projects, onProjectSelect }: WorkspaceHomeProps) => {
    return (
        <main className="main-content">
            <header className="workspace-home-header">
                <h1 className="workspace-title">{workspace.name} / {folder.name}</h1>
                <div className="workspace-actions">
                    <button className="btn btn-secondary"><FolderIcon/> New Folder</button>
                    <button className="btn btn-primary"><PlusIcon/> New Project</button>
                </div>
            </header>
            
            <div className="project-grid">
                {projects.map(p => <ProjectCard key={p.id} project={p} onClick={() => onProjectSelect(p.id)} />)}
            </div>
        </main>
    );
};
