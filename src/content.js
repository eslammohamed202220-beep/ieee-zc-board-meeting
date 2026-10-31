export const slides = [
  { chapter: 'Opening', title: 'Board Meeting', kind: 'hero', tone: 'night' },
  { chapter: 'Purpose of today', title: 'What we need to leave aligned on', kind: 'purpose', tone: 'light' },
  { chapter: 'Operating model', title: 'One connected operating model', kind: 'model', tone: 'night' },
  { chapter: 'Clear responsibilities', title: 'Who owns what?', kind: 'ownership', tone: 'light' },
  { chapter: 'Project delivery', title: 'A simple workflow for every project', kind: 'workflow', tone: 'light' },
  { chapter: 'Documentation & tracking', title: 'One project. One clear record.', kind: 'record', tone: 'blue' },
  { chapter: 'Meeting rhythm', title: 'Regular meetings need room to happen', kind: 'meetings', tone: 'light' },
  { chapter: 'Our vision', title: 'Members are a core pillar of this team', kind: 'vision', tone: 'night' },
  { chapter: 'Team environment', title: 'Build the family into the way we work', kind: 'culture', tone: 'blue' },
  { chapter: 'Voice & feedback', title: 'Every voice matters', kind: 'feedback', tone: 'light' },
  { chapter: 'Coming up', title: 'What we are preparing next', kind: 'initiatives', tone: 'night' },
  { chapter: 'Evaluation', title: 'Leadership mandate & performance charter', kind: 'charter-laws', tone: 'light' },
  { chapter: 'Evaluation', title: 'Mandatory leadership action', kind: 'charter-action', tone: 'night' },
  { chapter: 'Close the loop', title: 'What we need to agree on today', kind: 'decisions', tone: 'night' },
];

export const outcomes = [
  { title: 'Clear ownership', text: 'Who coordinates each project—and who leads the committee work.', to: 3 },
  { title: 'Visible progress', text: 'A consistent way to document updates, deadlines and blockers.', to: 5 },
  { title: 'Connected teams', text: 'Project Managers and Committee Heads working as one delivery team.', to: 2 },
  { title: 'Member-first culture', text: 'Members feel included, trusted and able to shape the work.', to: 7 },
  { title: 'Next initiatives', text: 'Start preparing Major Discovery and Circuit Clash early.', to: 10 },
];

export const modelRoles = [
  { title: 'Project Manager', text: 'Owns a specific project.', note: 'Coordinates delivery across the relevant teams.' },
  { title: 'Committee Head', text: 'Leads committee people & work.', note: 'Keeps responsibility for the committee and its members.' },
  { title: 'Members', text: 'Build, contribute and deliver.', note: 'Take ownership of tasks and contribute to the result.' },
];

export const responsibilities = [
  { title: 'Chairman', text: 'Works directly with Project Management on overall coordination, priorities and follow-up.', tags: ['Sets direction', 'Resolves escalated issues'] },
  { title: 'Project Manager', text: 'Owns a specific project and coordinates the relevant Committee Heads to move it forward.', tags: ['Scope', 'Timeline', 'Dependencies', 'Tracking'] },
  { title: 'Committee Head', text: 'Leads the committee’s people and work, assigns tasks and supports members in execution.', tags: ['People', 'Technical direction', 'Quality'] },
  { title: 'Members', text: 'Contribute ideas, take ownership of tasks and deliver the work that moves the project forward.', tags: ['Execution', 'Initiative', 'Feedback'] },
];

export const workflow = [
  { title: 'Define', text: 'Outcome, scope and success criteria.' },
  { title: 'Plan', text: 'Milestones, owners and deadlines.' },
  { title: 'Align', text: 'PM coordinates with relevant Heads.' },
  { title: 'Execute', text: 'Committees and members deliver.' },
  { title: 'Report', text: 'Progress, blockers and decisions are documented.' },
  { title: 'Review', text: 'Check results, learn and close.' },
];

export const projectRecord = [
  { title: 'Project basics', text: 'Project name • Project Manager • collaborating committees' },
  { title: 'Plan', text: 'Objective • deliverables • milestones • deadlines' },
  { title: 'Progress', text: 'Completed work • current status • next steps • task owners' },
  { title: 'Issues', text: 'Blockers • risks • dependencies • support or decisions needed' },
];

export const memberWork = [
  { title: 'Research', text: 'Members investigate topics, develop research skills and contribute to reports or outputs.' },
  { title: 'Engineering', text: 'Members take part in designing, building, testing and improving technical work.' },
  { title: 'Education', text: 'Members help prepare sessions, learning resources and peer-to-peer knowledge sharing.' },
];

export const values = [
  { title: 'Belonging', text: 'Make every member feel welcomed and included.' },
  { title: 'Collaboration', text: 'Share knowledge and help across committees.' },
  { title: 'Trust', text: 'Give people ownership, support and room to learn.' },
  { title: 'Respect', text: 'Listen, communicate clearly and address issues constructively.' },
  { title: 'Recognition', text: 'Notice effort, celebrate progress and learn from setbacks.' },
];

export const feedbackLoop = [
  { title: 'Speak up', text: 'Share ideas, concerns and suggestions.' },
  { title: 'We listen', text: 'Heads and PMs take feedback seriously.' },
  { title: 'We follow up', text: 'Record the point, agree an owner and respond.' },
  { title: 'We improve', text: 'Use what we learn to make the next step better.' },
];

export const decisions = [
  'Confirm the Project Manager ↔ Committee Head coordination model.',
  'Agree on a shared project report and issue-tracking format.',
  'Set expectations for regular meetings and two weeks’ notice.',
  'Identify early owners for Major Discovery and Circuit Clash preparation.',
  'Confirm adoption of the leadership charter and evaluation rules.',
];

export const leadershipLaws = [
  { title: 'The 48-Hour Buffer Rule', text: 'Strictly NO last-minute tasks. Standard deliverables require a minimum 48 to 72h window.' },
  { title: 'Workload Matrix & Task Tracker', text: 'Live spreadsheet shared with HR to guarantee fair task distribution across all members.' },
  { title: 'Objective Task Grading Rubric', text: '+10 Bonus for early high quality | -10 to -15 for substandard quality on-time. Late delivery: -15 pts/day (Max 48h). Day 3+ (> 48h) = DIRECT ZERO + Official Warning.' },
  { title: 'Academic Exam Blackout', text: 'Complete 100% suspension of all tasks/meetings during Pre-Midterms, Midterms, and Finals.' },
  { title: 'Strict Anti-Data Leakage', text: 'Zero tolerance for sharing internal files, sheets, or contacts (Immediate dismissal + blacklist).' },
  { title: 'Inactive Leadership Replacement', text: 'Inactive Heads/Vices will be demoted and replaced by the Top-Performing Member of their committee!' },
];
