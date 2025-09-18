import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
    <div className="project-card" onClick={onClick}>
        <header className="project-card-header">
            <span className="project-icon">{project.icon}</span>
            <h3 className="project-name">{project.name}</h3>
        </header>
        <p className="project-card-description">{project.description}</p>
        <footer className="project-card-footer">
            <div className="project-item-members">
                {project.members.map((m, i) => <div key={i} className="avatar-small">{m}</div>)}
            </div>
            <div className="project-progress">
                <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
            </div>
        </footer>
    </div>
);
