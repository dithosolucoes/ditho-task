export type AppView = 'auth' | 'onboarding' | 'dashboard';
export type AuthView = 'login' | 'register' | 'forgotPassword';

export type Folder = {
    id: string;
    name: string;
    icon: string;
};

export type Workspace = {
    id: string;
    name: string;
    icon: string;
    folders: Folder[];
};

export type Project = {
    id: string;
    name: string;
    folderId: string;
    icon: string;
    description: string;
    members: string[];
    progress: number;
};

export type User = {
    id: string;
    name: string;
    avatar: string;
};

export type Tag = {
    id: string;
    label: string;
    color: 'green' | 'blue' | 'purple' | 'orange' | 'red';
};

export type Comment = {
    id: string;
    userId: string;
    text: string;
    timestamp: string;
};

export type Task = { 
    id: string; 
    projectId: string; 
    text: string; 
    completed: boolean; 
    status: 'todo' | 'inprogress' | 'done';
    description: string;
    dueDate: string | null;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    assigneeIds: string[];
    tags: Tag[];
    comments: Comment[];
};