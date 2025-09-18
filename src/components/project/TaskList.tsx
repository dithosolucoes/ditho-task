import React, { useState, useEffect } from 'react';
import { Task } from '../../types';
import { mockTasks } from '../../data/mockData';
import { CheckIcon, PlusIcon } from '../common/Icons';

const TaskItem = ({ task, onToggle, onSelect }: { task: Task; onToggle: (e: React.MouseEvent) => void; onSelect: () => void; }) => (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} onClick={onSelect}>
        <button 
            className="task-checkbox" 
            onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening when only toggling checkbox
                onToggle(e);
            }} 
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
            {task.completed && <CheckIcon />}
        </button>
        <span className="task-text">{task.text}</span>
    </div>
);

export const TaskList = ({ projectId, onTaskSelect }: { projectId: string; onTaskSelect: (taskId: string) => void; }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    useEffect(() => {
        setTasks(mockTasks.filter(t => t.projectId === projectId));
    }, [projectId]);

    const handleToggleTask = (taskId: string) => {
        setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
    };

    const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTaskText.trim() !== '') {
            // Fix: Add missing 'status' property required by the Task type.
            const newTask: Task = {
                id: `t${Date.now()}`,
                projectId,
                text: newTaskText.trim(),
                completed: false,
                status: 'todo',
                // Add default empty values for new fields
                description: '',
                dueDate: null,
                priority: 'medium',
                assigneeIds: [],
                tags: [],
                comments: [],
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };

    return (
        <div className="task-list-container">
            <div className="task-list">
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onToggle={() => handleToggleTask(task.id)} 
                        onSelect={() => onTaskSelect(task.id)}
                    />
                ))}
            </div>
            <div className="add-task-bar">
                 <PlusIcon />
                 <input 
                    type="text" 
                    className="add-task-input"
                    placeholder="Add a task..."
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={handleAddTask}
                 />
            </div>
        </div>
    );
};
