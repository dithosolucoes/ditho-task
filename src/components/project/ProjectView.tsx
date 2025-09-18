import React, { useState } from 'react';
import { Project } from '../../types';
import { TaskList } from './TaskList';
import { BoardView } from './BoardView';
import { CalendarView } from './CalendarView';
import { ListBulletIcon, ViewColumnsIcon, CalendarIcon, MapIcon, ChatBubbleLeftRightIcon, EllipsisHorizontalIcon } from '../common/Icons';

interface ProjectViewProps {
    project: Project;
    onTaskSelect: (taskId: string) => void;
}

type ViewMode = 'list' | 'board' | 'calendar' | 'mindmap';

export const ProjectView = ({ project, onTaskSelect }: ProjectViewProps) => {
    const [currentView, setCurrentView] = useState<ViewMode>('board'); // Default to board to see the fix

    const renderView = () => {
        switch (currentView) {
            case 'list':
                return <TaskList projectId={project.id} onTaskSelect={onTaskSelect} />;
            case 'board':
                return <BoardView projectId={project.id} onTaskSelect={onTaskSelect} />;
            case 'calendar':
                return <CalendarView projectId={project.id} onTaskSelect={onTaskSelect} />;
            case 'mindmap':
                // Placeholder for mind map view
                return <div>Mind Map View Not Implemented</div>;
            default:
                return <TaskList projectId={project.id} onTaskSelect={onTaskSelect} />;
        }
    };

    const ViewSwitcherButton = ({ view, label, icon }: { view: ViewMode, label: string, icon: React.ReactNode }) => (
        <button
            className={`view-switcher-btn ${currentView === view ? 'active' : ''}`}
            onClick={() => setCurrentView(view)}
            aria-label={`Switch to ${label} view`}
        >
            {icon}
            <span className="nav-link-text">{label}</span>
        </button>
    );

    return (
        <div className="project-view">
            <header className="project-view-header">
                <div className="project-title-section">
                    <span className="project-icon">{project.icon}</span>
                    <h1 className="project-title">{project.name}</h1>
                </div>
                <div className="project-actions">
                    <div className="view-switcher">
                        <ViewSwitcherButton view="list" label="List" icon={<ListBulletIcon className="icon-sm" />} />
                        <ViewSwitcherButton view="board" label="Board" icon={<ViewColumnsIcon className="icon-sm" />} />
                        <ViewSwitcherButton view="calendar" label="Calendar" icon={<CalendarIcon className="icon-sm" />} />
                        <ViewSwitcherButton view="mindmap" label="Mind Map" icon={<MapIcon className="icon-sm" />} />
                    </div>
                    <div className="header-divider"></div>
                    <div className="project-members project-item-members">
                         {project.members.map((m, i) => <div key={i} className="avatar-small">{m}</div>)}
                    </div>
                    <button className="icon-btn" aria-label="Project Chat"><ChatBubbleLeftRightIcon /></button>
                    <button className="icon-btn" aria-label="More options"><EllipsisHorizontalIcon /></button>
                </div>
            </header>
            <div className="project-content">
                {renderView()}
            </div>
        </div>
    );
};