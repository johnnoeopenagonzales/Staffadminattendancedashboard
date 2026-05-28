# Attendance Monitoring System

## Project Description

The Attendance Monitoring System is a web-based attendance dashboard for Bubbly Babe Cakehouse and Restaurant. It automates employee time tracking to improve accuracy, efficiency, and data reliability.

The system helps managers and administrators monitor attendance records, manage employee information, assign schedules, generate attendance reports, and reduce common problems found in manual attendance tracking such as incorrect logs, duplicate records, buddy punching, and data loss.

## Proposed Solution

The proposed system records employee attendance through QR code or manual login. It stores attendance data in a secure centralized database and provides real-time attendance monitoring and reports. The system also includes backup support to help protect attendance records from data loss.

## Objectives

- Develop an automated attendance system to accurately record employee time-in and time-out while reducing manual errors.
- Implement a secure database to store, manage, and protect attendance records with proper access controls.
- Design a user-friendly dashboard for monitoring attendance and generating reports efficiently.
- Integrate a backup system using CSV or database backup to improve data reliability.
- Ensure scalability and performance so the system can handle increasing users and data smoothly.

## Features

- User login and authentication
- Staff registration
- Employee management
- Role management
- Schedule management
- Attendance management
- Time in and time out
- Personal attendance viewing
- Leave application
- Daily, weekly, and monthly report generation

## Scope and Limitations

The system is designed for web-based attendance monitoring and staff administration. It supports attendance recording, schedule management, employee management, role-based access, leave records, and report generation.

Limitations:

- No mobile application is included.
- Full functionality requires an internet connection.

## Organized Folders

```text
Staffadminattendancedashboard/
├── guidelines/
│   └── Guidelines.md
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── main.tsx
│   └── styles/
├── index.html
├── package.json
├── README.md
├── STYLE_GUIDE.md
└── vite.config.ts
```

Folder purpose:

- `guidelines/` - project and development guidelines
- `src/app/components/` - reusable React components and UI elements
- `src/app/pages/` - main application pages such as dashboard, attendance, employees, reports, login, and settings
- `src/styles/` - global styles, Tailwind styles, fonts, and theme files
- `index.html` - Vite HTML entry file
- `package.json` - project scripts and dependencies
- `vite.config.ts` - Vite configuration

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/johnnoeopenagonzales/Staffadminattendancedashboard.git
```

2. Open the project folder:

```bash
cd Staffadminattendancedashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local development URL shown in the terminal.

6. To create a production build:

```bash
npm run build
```

## Members

| Member | Project Role | Key Responsibilities |
| --- | --- | --- |
| John Lloyd Villarias | Project Manager, Business Analyst | Plans the project, assigns tasks, and monitors progress |
| John Noe Gonzales | Lead Developer | Designs the system, codes features, and reviews work,  Gathers requirements and documents user needs|
| Jeo Kenny Entoma | UI/UX Designer | Designs the interface and creates layouts |
| Carl Bernal | QA/Tester | Tests the system and reports bugs |

## Prototype Link

[Staff Admin Attendance Dashboard Prototype](https://www.figma.com/design/4tbQcwF57zyMnYH2gynfY3/Staff-Admin-Attendance-Dashboard)

## Git Usage

This project uses Git and GitHub for version control and collaboration.

Guidelines:

- Use branches for new features, fixes, and documentation updates.
- Use pull requests before merging changes into the main branch.
- Write meaningful commit messages that clearly describe the change.
- Keep commits focused on one specific task.
- Pull the latest changes before starting new work.

Example branch names:

```text
feature/attendance-dashboard
fix/login-validation
docs/update-readme
style/update-dashboard-layout
refactor/attendance-functions
```

Example commit messages:

```text
Add attendance dashboard layout
Fix staff record display issue
Update setup instructions
Add project style guide
```

## Pull Request Process

1. Create a new branch for the task.
2. Make and test the changes.
3. Commit the changes with a meaningful message.
4. Push the branch to GitHub.
5. Open a pull request.
6. Request review before merging.

## Course Information

- Course Code: CSC 106 - Software Engineering
- Section: BSIT - FG1
- Group: Group 9
- Instructor: Edwin Manuel M. Jarlata
- Project Start Date: March 25, 2026
- Expected Completion Date: June 19, 2026
