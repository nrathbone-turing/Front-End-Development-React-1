# Project Showcase App

## Features
- Responsive layout using CSS Grid and Flexbox
- Navigation using React Router
- View individual project details
- Add new projects via a controlled form
- Links to GitHub repos (and images) per project
- Component testing using [Jest](https://jestjs.io/) and [React Testing Library](https://react.dev/learn/react-compiler#using-the-compiler-on-libraries)

## Setup
1. Fork and Clone the main repository
```
git clone https://github.com/nrathbone-turing/Front-End-Development-React-1.git
```
2. Navigate to the project directory
```
cd Front-End-Development-React-1/8_summative_assessment/project-showcase
```
3. Install dependencies
```
npm install
```
3. Start the development server
```
npm run dev
```
4. Run tests
```
npm test
```

## File Structure
```
src/
│
├── components/          # Reusable UI components (Header, Footer)
├── pages/               # Route-level components (Homepage, ProjectDetail, AddProjectForm)
├── data/                # Static project data
├── App.jsx              # Main app component and routes
└── index.css            # Global styles
```

## About This Repo

### Author
Nick Rathbone
[GitHub Profile](https://github.com/nrathbone-turing)

Note: This project is part of the Flatiron React Module final assessment

### License
MIT — feel free to use or remix!