import React, { useState } from 'react';
import { Task, Project, User, Comment } from '../../types';
import { mockUsers } from '../../data/mockData';
import { CheckIcon, XMarkIcon, UserGroupIcon, CalendarIcon, SignalIcon, TagIcon, PaperClipIcon, ChatBubbleOvalLeftIcon } from '../common/Icons';

interface TaskDetailModalProps {
    task: Task;
    project: Project;
    onClose: () => void;
}

const getPriorityText = (priority: Task['priority']) => {
    switch (priority) {
        case 'urgent': return 'Urgent';
        case 'high': return 'High';
        case 'medium': return 'Medium';
        case 'low': return 'Low';
        default: return 'None';
    }
}

export const TaskDetailModal = ({ task, project, onClose }: TaskDetailModalProps) => {
    const [taskState, setTaskState] = useState(task);
    const [comments, setComments] = useState(task.comments);
    const [newComment, setNewComment] = useState('');

    const handleToggle = () => {
        setTaskState(prev => ({ ...prev, completed: !prev.completed }));
    };

    const handleAddComment = () => {
        if(newComment.trim() === '') return;
        const newCommentObj: Comment = {
            id: `c${Date.now()}`,
            userId: 'u1', // Assuming current user is 'Rebeca'
            text: newComment,
            timestamp: new Date().toISOString(),
        };
        setComments(prev => [...prev, newCommentObj]);
        setNewComment('');
    };

    const assignees = mockUsers.filter(u => taskState.assigneeIds.includes(u.id));
    const currentUser = mockUsers.find(u => u.id === 'u1')!; // Current user for new comments

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <div className="modal-project-info">
                        <span>{project.icon}</span>
                        <span>{project.name}</span>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal"><XMarkIcon /></button>
                </header>
                <div className="modal-body">
                    <div className="modal-task-title">
                        <button className={`task-checkbox ${taskState.completed ? 'completed' : ''}`} onClick={handleToggle}>
                            {taskState.completed && <CheckIcon />}
                        </button>
                        <input className="modal-task-title-text" defaultValue={taskState.text} />
                    </div>
                    
                    <div className="metadata-grid">
                        <div className="metadata-item">
                            <UserGroupIcon className="metadata-item-icon" />
                            <span className="metadata-item-label">Assignees</span>
                            <div className="project-item-members">
                                {assignees.map(a => <div key={a.id} className="avatar-small">{a.avatar}</div>)}
                                {assignees.length === 0 && <span className="metadata-item-value">Unassigned</span>}
                            </div>
                        </div>
                         <div className="metadata-item">
                            <CalendarIcon className="metadata-item-icon" />
                            <span className="metadata-item-label">Due Date</span>
                            <span className="metadata-item-value">{taskState.dueDate || 'No date'}</span>
                        </div>
                         <div className="metadata-item">
                            <SignalIcon className="metadata-item-icon" />
                            <span className="metadata-item-label">Priority</span>
                            <span className={`metadata-item-value priority-${taskState.priority}`}>{getPriorityText(taskState.priority)}</span>
                        </div>
                         <div className="metadata-item">
                            <TagIcon className="metadata-item-icon" />
                            <span className="metadata-item-label">Tags</span>
                             <div className="metadata-item-value" style={{display: 'flex', gap: '0.5rem'}}>
                                {taskState.tags.map(t => <span key={t.id} className={`tag tag-color-${t.color}`}>{t.label}</span>)}
                                 {taskState.tags.length === 0 && <span>No tags</span>}
                            </div>
                        </div>
                    </div>

                    <div className="modal-section">
                        <h3 className="modal-section-title">Description</h3>
                        <p className="modal-description">{taskState.description || 'No description provided.'}</p>
                    </div>

                    <div className="modal-section">
                         <h3 className="modal-section-title">Attachments</h3>
                         {/* Placeholder for attachments */}
                         <button className="btn btn-secondary" style={{alignSelf: 'flex-start'}}><PaperClipIcon/> Add Attachment</button>
                    </div>

                    <div className="modal-section">
                         <h3 className="modal-section-title">Comments</h3>
                         <div className="comments-list">
                            {comments.map(comment => {
                                const user = mockUsers.find(u => u.id === comment.userId);
                                return (
                                    <div key={comment.id} className="comment-item">
                                        <div className="comment-avatar">{user?.avatar || '?'}</div>
                                        <div className="comment-content">
                                            <div className="comment-header">
                                                <span className="comment-user">{user?.name || 'Unknown'}</span>
                                                <span className="comment-timestamp">{new Date(comment.timestamp).toLocaleDateString()}</span>
                                            </div>
                                            <p className="comment-text">{comment.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                         </div>
                         <div className="comment-input-area">
                            <div className="comment-avatar">{currentUser.avatar}</div>
                            <textarea 
                                className="comment-input" 
                                placeholder="Write a comment..." 
                                rows={2}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleAddComment();
                                    }
                                }}
                            ></textarea>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};