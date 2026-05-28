# Style Guide

This style guide keeps the Attendance Monitoring System codebase consistent, readable, and easier to maintain.

## Naming Rules

Use `camelCase` for JavaScript and TypeScript variables, functions, object properties, hooks, and helper methods.

Good examples:

```ts
const staffName = "Juan Dela Cruz";
const attendanceStatus = "Present";

function calculateTotalAttendance() {
  return 0;
}
```

Avoid unclear or inconsistent names:

```ts
const Staff_Name = "Juan Dela Cruz";
const attstat = "Present";

function CalcTotal() {
  return 0;
}
```

Additional naming rules:

- Use `PascalCase` for React components.
- Use `camelCase` for component props and local state.
- Use descriptive names for variables, functions, and files.
- Use lowercase or kebab-case for non-component file names.
- Use clear names that describe the purpose of the code.

Examples:

```text
DashboardLayout.tsx
AttendanceManagement.tsx
staff-records.ts
attendance-utils.ts
```

## Formatting

Use consistent formatting across all project files.

General rules:

- Use 2 spaces for indentation.
- Keep lines readable and reasonably short.
- Add blank lines between major blocks of code.
- Use consistent quotation marks in each file.
- Group related imports together.
- Remove unused imports, variables, and console logs before submitting.

React component example:

```tsx
function AttendanceCard({ staffName, status }) {
  return (
    <div className="attendance-card">
      <h3>{staffName}</h3>
      <p>{status}</p>
    </div>
  );
}
```

CSS example:

```css
.attendance-card {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
}
```

## Comments

Use comments only when they help explain why something is done or clarify logic that is not obvious.

Good comment:

```ts
// Prevent duplicate attendance entries for the same employee and date.
if (existingRecord) {
  return;
}
```

Avoid comments that simply repeat the code:

```ts
// Set status to present.
status = "Present";
```

Comment guidelines:

- Keep comments short and useful.
- Explain complex rules, decisions, or calculations.
- Remove outdated comments.
- Do not comment every line.

## Branch Naming

Use clear branch names that describe the purpose of the work.

Branch format:

```text
type/short-description
```

Recommended branch types:

- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation updates
- `style/` - for formatting or visual changes
- `refactor/` - for code cleanup without changing behavior

Examples:

```text
feature/staff-attendance-table
fix/dashboard-date-filter
docs/add-style-guide
style/update-dashboard-layout
refactor/attendance-functions
```

## Git Usage

Use Git to track all project changes.

Rules:

- Create a new branch before starting work.
- Do not commit directly to the main branch unless required by the team.
- Pull the latest changes before starting a new task.
- Commit small and focused changes.
- Push branches to GitHub for review.
- Use pull requests before merging into the main branch.

Useful commands:

```bash
git checkout -b feature/attendance-dashboard
git status
git add .
git commit -m "Add attendance dashboard layout"
git push origin feature/attendance-dashboard
```

## Pull Requests

Use pull requests to review changes before merging.

Pull request checklist:

- The branch name is clear.
- The code follows this style guide.
- The change has been tested.
- The pull request has a meaningful title.
- The description explains what was changed.
- Screenshots are added for user interface changes when helpful.

Example pull request title:

```text
Add staff attendance dashboard layout
```

Example pull request description:

```text
This pull request adds the main dashboard layout for viewing staff attendance records.
```

## Meaningful Commits

Write commit messages that clearly explain the change.

Good commit messages:

```text
Add attendance summary cards
Fix staff search filter
Update README setup instructions
Add project style guide
```

Avoid vague commit messages:

```text
update
changes
final
fix
```

Commit guidelines:

- Use present tense.
- Keep the message short and clear.
- Describe what changed.
- Make one logical change per commit when possible.

## Code Quality

Project quality guidelines:

- Keep components focused on one responsibility.
- Reuse existing UI components when possible.
- Keep page files organized and easy to scan.
- Validate user input before saving or submitting data.
- Protect attendance and employee data using role-based access where applicable.
- Test important workflows such as login, attendance recording, reports, and employee management.
