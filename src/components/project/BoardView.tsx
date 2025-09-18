import React, { useState, useEffect, useMemo } from 'react';
import { Task } from '../../types';
import { mockTasks } from '../../data/mockData';
import { TaskCard } from './TaskCard';

interface BoardViewProps {
    projectId: string;
    onTaskSelect: (taskId: string) => void;
}

const columnOrder: Task['status'][] = ['todo', 'inprogress', 'done'];
const columnTitles: Record<Task['status'], string> = {
    todo: 'To Do',
    inprogress: 'In Progress',
    done: 'Done'
};

export const BoardView = ({ projectId, onTaskSelect }: BoardViewProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        setTasks(mockTasks.filter(t => t.projectId === projectId));
    }, [projectId]);

    const groupedTasks = useMemo(() => {
        const initialGroups: Record<Task['status'], Task[]> = {
            todo: [],
            inprogress: [],
            done: []
        };
        return tasks.reduce((groups, task) => {
            if (groups[task.status]) {
                groups[task.status].push(task);
            }
            return groups;
        }, initialGroups);
    }, [tasks]);

    // D&D Handlers
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
        e.dataTransfer.setData("taskId", taskId);
        e.currentTarget.classList.add('dragging');
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('dragging');
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('drag-over');
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: Task['status']) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        const taskId = e.dataTransfer.getData("taskId");
        
        const taskToMove = tasks.find(t => t.id === taskId);
        if (taskToMove && taskToMove.status !== newStatus) {
            setTasks(prevTasks => prevTasks.map(task => 
                task.id === taskId ? { ...task, status: newStatus } : task
            ));
        }
    };


    return (
        <div className="board-view-container">
            {columnOrder.map(status => (
                <div 
                    key={status} 
                    className="kanban-column"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, status)}
                >
                    <div className="kanban-column-header">
                        <h2 className="kanban-column-title">{columnTitles[status]}</h2>
                        <span className="kanban-column-count">{groupedTasks[status].length}</span>
                    </div>
                    <div className="kanban-column-tasks">
                        {groupedTasks[status].map(task => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                onClick={() => onTaskSelect(task.id)}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};