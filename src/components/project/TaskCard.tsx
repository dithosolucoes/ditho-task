import React from 'react';
import { Task } from '../../types';
import { mockUsers } from '../../data/mockData';

interface TaskCardProps {
    task: Task;
    onClick: () => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string) => void;
    onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const TaskCard = ({ task, onClick, onDragStart, onDragEnd }: TaskCardProps) => {
    const assignees = mockUsers.filter(u => task.assigneeIds.includes(u.id));

    return (
        <div 
            className="task-card" 
            onClick={onClick}
            draggable
            onDragStart={(e) => onDragStart(e, task.id)}
            onDragEnd={onDragEnd}
        >
            <p className="task-card-title">{task.text}</p>
            {task.tags.length > 0 && (
                <div className="task-card-tags">
                    {task.tags.map(tag => (
                        <span key={tag.id} className={`tag tag-color-${tag.color}`}>{tag.label}</span>
                    ))}
                </div>
            )}
            <footer className="task-card-footer">
                <div className="task-card-members project-item-members">
                    {assignees.map(user => (
                        <div key={user.id} className="avatar-small" title={user.name}>
                            {user.avatar}
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
};