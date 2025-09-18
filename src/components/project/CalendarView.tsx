import React, { useState, useEffect, useMemo } from 'react';
import { Task } from '../../types';
import { mockTasks } from '../../data/mockData';

interface CalendarViewProps {
    projectId: string;
    onTaskSelect: (taskId: string) => void;
}

const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>;

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarView = ({ projectId, onTaskSelect }: CalendarViewProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

    useEffect(() => {
        setTasks(mockTasks.filter(t => t.projectId === projectId));
    }, [projectId]);

    const calendarGrid = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const daysInMonth = lastDayOfMonth.getDate();
        const startDayOfWeek = firstDayOfMonth.getDay();

        const grid: Date[] = [];

        // Days from previous month
        for (let i = 0; i < startDayOfWeek; i++) {
            grid.push(new Date(year, month, i - startDayOfWeek + 1));
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            grid.push(new Date(year, month, i));
        }

        // Days from next month to fill grid
        const remainingCells = 42 - grid.length; // 6 rows * 7 days
        for (let i = 1; i <= remainingCells; i++) {
            grid.push(new Date(year, month + 1, i));
        }

        return grid;
    }, [currentDate]);

    const isSameDay = (d1: Date, d2: Date) => 
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    const formatDateForInput = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleDrop = (e: React.DragEvent, day: Date) => {
        e.preventDefault();
        if (draggedTaskId) {
            setTasks(prevTasks => prevTasks.map(task => 
                task.id === draggedTaskId ? { ...task, dueDate: formatDateForInput(day) } : task
            ));
            setDraggedTaskId(null);
        }
        e.currentTarget.classList.remove('drag-over');
    };

    return (
        <div className="calendar-view-container">
            <header className="calendar-header">
                <button className="calendar-nav-btn" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} aria-label="Previous month">
                    <ChevronLeftIcon />
                </button>
                <h2 className="calendar-month-title">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button className="calendar-nav-btn" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} aria-label="Next month">
                    <ChevronRightIcon />
                </button>
            </header>
            <div className="calendar-grid">
                {daysOfWeek.map(day => <div key={day} className="calendar-day-header">{day}</div>)}
                {calendarGrid.map((day, index) => {
                    const isToday = isSameDay(day, new Date());
                    const isOtherMonth = day.getMonth() !== currentDate.getMonth();
                    const tasksForDay = tasks.filter(t => t.dueDate && isSameDay(new Date(t.dueDate), day));

                    return (
                        <div 
                            key={index}
                            className={`calendar-day ${isToday ? 'is-today' : ''} ${isOtherMonth ? 'is-other-month' : ''}`}
                            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }}
                            onDragLeave={(e) => e.currentTarget.classList.remove('drag-over')}
                            onDrop={(e) => handleDrop(e, day)}
                        >
                            <span className="calendar-day-number">{day.getDate()}</span>
                            {tasksForDay.map(task => (
                                <div
                                    key={task.id}
                                    className={`calendar-task tag-color-${task.tags[0]?.color || 'blue'} ${draggedTaskId === task.id ? 'dragging' : ''}`}
                                    draggable
                                    onDragStart={() => setDraggedTaskId(task.id)}
                                    onDragEnd={() => setDraggedTaskId(null)}
                                    onClick={() => onTaskSelect(task.id)}
                                >
                                    {task.text}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};