import { Workspace, Project, Task, User, Tag } from '../types';

export const mockUsers: User[] = [
    { id: 'u1', name: 'Rebeca', avatar: 'R' },
    { id: 'u2', name: 'Elara', avatar: 'E' },
    { id: 'u3', name: 'Milo', avatar: 'M' },
    { id: 'u4', name: 'Dax', avatar: 'D' },
    { id: 'u5', name: 'Cora', avatar: 'C' },
    { id: 'u6', name: 'Sam', avatar: 'S' },
];

export const mockTags: Tag[] = [
    { id: 'tag1', label: 'UI/UX', color: 'purple' },
    { id: 'tag2', label: 'Frontend', color: 'blue' },
    { id: 'tag3', label: 'Backend', color: 'orange' },
    { id: 'tag4', label: 'Bug', color: 'red' },
    { id: 'tag5', label: 'Feature', color: 'green' },
];

export const mockWorkspaces: Workspace[] = [
    {
        id: 'ws1', name: 'Agency', icon: '🏢', folders: [
            { id: 'f1', name: 'Home', icon: '🏠' },
            { id: 'f2', name: 'Clients', icon: '👥' },
            { id: 'f3', name: 'Creative', icon: '🎨' },
            { id: 'f4', name: 'Production', icon: '🎬' },
            { id: 'f5', name: 'Strategy', icon: '📈' },
        ]
    },
];

export const mockProjects: Project[] = [
    { id: 'p1', name: 'Ditho - Brand Guidelines', folderId: 'f1', icon: '🔥', description: 'Centralized brand assets and usage guidelines for the Ditho project.', members: ['E', 'R'], progress: 60 },
    { id: 'p2', name: 'Q4 Marketing Campaign', folderId: 'f1', icon: '🚀', description: 'Planning and execution of the main marketing campaign for the fourth quarter.', members: ['R', 'M', 'S'], progress: 40 },
    { id: 'p3', name: 'Website Redesign', folderId: 'f3', icon: '🎨', description: 'Complete overhaul of the public-facing website with a new design system.', members: ['R', 'E', 'D'], progress: 80 },
    { id: 'p4', name: 'Client Onboarding Flow', folderId: 'f2', icon: '🤝', description: 'Designing and implementing the new automated client onboarding process.', members: ['E', 'C'], progress: 20 },
    { id: 'p5', name: '2025 Strategic Plan', folderId: 'f5', icon: '📈', description: 'Defining the company\'s strategic goals and roadmap for 2025.', members: ['R', 'E', 'M'], progress: 95 },
    { id: 'p6', name: 'API Documentation', folderId: 'f1', icon: '📚', description: 'Writing and publishing comprehensive documentation for the public API.', members: ['D'], progress: 50 },
    { id: 'p7', name: 'Nike Creative Pitch', folderId: 'f2', icon: '👟', description: 'Developing the creative pitch and presentation for the Nike account.', members: ['E', 'R', 'C'], progress: 35 },
];

export const mockTasks: Task[] = [
    { 
        id: 't1', projectId: 'p1', text: 'Define color palette', completed: true, status: 'done',
        description: 'Research and finalize the primary, secondary, and tertiary color palettes. Create a document specifying HEX, RGB, and HSL values.',
        dueDate: '2024-08-05', priority: 'high', assigneeIds: ['u2'], 
        tags: [mockTags[0]], 
        comments: [
            { id: 'c1', userId: 'u1', text: 'Great job on this, the new palette looks fantastic!', timestamp: '2024-08-06' }
        ]
    },
    { 
        id: 't2', projectId: 'p1', text: 'Create logo variations', completed: true, status: 'done',
        description: 'Develop monochrome, reversed, and icon-only versions of the main logo.',
        dueDate: '2024-08-08', priority: 'high', assigneeIds: ['u2'], 
        tags: [mockTags[0]], 
        comments: []
    },
    { 
        id: 't3', projectId: 'p1', text: 'Write typography guidelines', completed: false, status: 'inprogress',
        description: 'Specify font families, weights, sizes, and line heights for headings, body text, and other UI elements.',
        dueDate: '2024-08-15', priority: 'medium', assigneeIds: ['u1'], 
        tags: [mockTags[0]], 
        comments: []
    },
    { 
        id: 't4', projectId: 'p1', text: 'Design presentation template', completed: false, status: 'todo',
        description: 'Create a reusable slide deck template in Figma and Google Slides that incorporates the new brand guidelines.',
        dueDate: '2024-08-20', priority: 'low', assigneeIds: [], 
        tags: [], 
        comments: []
    },
    { 
        id: 't5', projectId: 'p2', text: 'Finalize campaign brief', completed: true, status: 'done',
        description: 'Complete the campaign brief document with objectives, target audience, key messaging, and budget.',
        dueDate: '2024-09-01', priority: 'urgent', assigneeIds: ['u3', 'u6'], 
        tags: [mockTags[4]], 
        comments: [
            { id: 'c2', userId: 'u3', text: 'Just waiting for final budget approval from finance.', timestamp: '2024-08-30' },
            { id: 'c3', userId: 'u6', text: 'Approved!', timestamp: '2024-08-31' },
        ]
    },
    { 
        id: 't6', projectId: 'p2', text: 'Develop ad creatives', completed: false, status: 'todo',
        description: 'Design and write copy for all ad placements, including social media, display, and search.',
        dueDate: '2024-09-10', priority: 'high', assigneeIds: ['u2', 'u3'], 
        tags: [mockTags[4], mockTags[1]], 
        comments: []
    },
    { 
        id: 't7', projectId: 'p3', text: 'Wireframe key pages', completed: true, status: 'done',
        description: 'Create low-fidelity wireframes for the homepage, pricing, about, and contact pages.',
        dueDate: '2024-07-25', priority: 'high', assigneeIds: ['u4'], 
        tags: [mockTags[0], mockTags[1]], 
        comments: []
    },
    { 
        id: 't8', projectId: 'p3', text: 'Prototype user flows', completed: true, status: 'done',
        description: 'Build an interactive prototype in Figma covering the sign-up and checkout flows.',
        dueDate: '2024-08-01', priority: 'medium', assigneeIds: ['u4'], 
        tags: [mockTags[0], mockTags[1]], 
        comments: []
    },
    { 
        id: 't9', projectId: 'p3', text: 'User testing session 1', completed: false, status: 'inprogress',
        description: 'Conduct the first round of usability testing with 5 participants. Record sessions and synthesize feedback.',
        dueDate: '2024-08-12', priority: 'high', assigneeIds: ['u1', 'u4'], 
        tags: [mockTags[0]], 
        comments: [
            { id: 'c4', userId: 'u1', text: 'Participants have been scheduled. I will send out the calendar invites.', timestamp: '2024-08-09' }
        ]
    },
    { 
        id: 't10', projectId: 'p3', text: 'Develop homepage component', completed: false, status: 'todo',
        description: 'Code the main hero component for the new homepage in React. Should be responsive and accessible.',
        dueDate: '2024-08-18', priority: 'medium', assigneeIds: ['u2'], 
        tags: [mockTags[1], mockTags[2]], 
        comments: []
    },
];