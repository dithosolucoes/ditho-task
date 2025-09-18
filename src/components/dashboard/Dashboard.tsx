import React, { useState } from 'react';
import { NavSidebar } from './NavSidebar';
import { WorkspaceHome } from './WorkspaceHome';
import { BottomDock } from './BottomDock';
import { ProjectView } from '../project/ProjectView';
import { TaskDetailModal } from '../project/TaskDetailModal';
import { mockWorkspaces, mockProjects, mockTasks } from '../../data/mockData';

export const Dashboard = () => {
    const [selectedWorkspace, setSelectedWorkspace] = useState(mockWorkspaces[0]);
    const [selectedFolderId, setSelectedFolderId] = useState(selectedWorkspace.folders[0].id);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    const handleFolderSelect = (folderId: string) => {
        setSelectedFolderId(folderId);
        setSelectedProjectId(null); // Return to workspace view when a folder is selected
    };
    
    const projectsInFolder = mockProjects.filter(p => p.folderId === selectedFolderId);
    const selectedFolder = selectedWorkspace.folders.find(f => f.id === selectedFolderId);
    const selectedProject = mockProjects.find(p => p.id === selectedProjectId);
    const selectedTask = mockTasks.find(t => t.id === selectedTaskId);

    const handleTaskSelect = (taskId: string) => {
        setSelectedTaskId(taskId);
    };

    const handleCloseModal = () => {
        setSelectedTaskId(null);
    };

    return (
        <>
            <div className="dashboard-layout">
                <NavSidebar 
                    workspace={selectedWorkspace} 
                    selectedFolderId={selectedFolderId} 
                    onFolderSelect={handleFolderSelect} 
                />
                <main className="main-content">
                    {selectedProjectId && selectedProject ? (
                        <ProjectView project={selectedProject} onTaskSelect={handleTaskSelect} />
                    ) : (
                        <WorkspaceHome 
                            workspace={selectedWorkspace} 
                            folder={selectedFolder!} 
                            projects={projectsInFolder} 
                            onProjectSelect={setSelectedProjectId}
                        />
                    )}
                </main>
            </div>
            <BottomDock />
            {selectedTask && selectedProject && (
                <TaskDetailModal 
                    task={selectedTask}
                    project={selectedProject} 
                    onClose={handleCloseModal} 
                />
            )}
        </>
    );
};