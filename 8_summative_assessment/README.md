# The Scenario
As freelance developer, designer, or a creative agency needs a modern, responsive, and easily maintainable web presence to showcase their work. They require an online platform that not only displays their past projects but also allows them to dynamically update their portfolio as new work is completed. This platform must provide a seamless user experience, making it easy for potential clients or collaborators to navigate through the projects and learn about the specifics of each one.

**You are tasked with creating a personal project showcase application based on a provided design mock-up. The app must include the following features:**
- A landing page displaying a list of projects.
- A form that allows users to add new projects dynamically.
- A detailed project view accessible via client-side routing.
- A responsive design that matches the mock-up. 

Combining these techniques to prepare you to build interactive, data-driven web applications that align with industry standards. By the end, you’ll have developed a functional, modern web application and gained critical web development skills.

**In completing this lab, you will showcase your ability to:**
- Create a SPA that follows modern web development practices.
- Enable users to input information into HTML Forms.
- Implement event listeners to create interactive elements.
- Utilize fetch requests to effectively interact with APIs.
- Manipulate HTML and CSS elements using JavaScript.

```
For this lab, you will follow a problem solving framework to support a structured and systematic approach to your programming. You will clearly analyze the requirements of the project, define the scope, write the code, test, debug, and create a final product that you can easily maintain and improve. 
```

## Tools & Resources

- [Design Mockup](https://drive.google.com/file/d/18U2lFBJLO6Y75By6RWa1y2EqL4JHjDVH/view)
- Text editor or Integrated Development Environment (IDE), like VS Code
- Github
- [React Documentation](https://react.dev/)
- **Testing tools:** [Jest](https://jestjs.io/) and [React Testing Library](https://react.dev/learn/react-compiler#using-the-compiler-on-libraries)

# Instructions

### Task 1: Define the Problem
- Analyze the mock-up design document to understand the project requirements and layout.
    Identify:
    - Header/footer elements
    - Project card structure (title, image, description, etc.)
    - Add project form layout
    - Navigation patterns (e.g., clicking a card → project details)- 
- Identify the necessary components and their hierarchy based on the design.
    - SPA with client-side routing (React Router)
    - Add project via form
    - View individual project details
    - Responsive layout
- Determine the state and props needed to manage dynamic interactions.
    - Project list (state)
    - Form inputs (state)
    - Project detail (prop via routing or fetched by ID)
### Task 2: Determine the Design
- Create a component tree that outlines the structure of your application, including parent and child components.
```
App
├── Header
├── Routes
│   ├── ProjectListPage
│   │   ├── ProjectCard (repeats)
│   ├── ProjectDetailPage
│   ├── AddProjectFormPage
└── Footer
```
- Define state and prop relationships within the component tree.
    - `App`: manages overall project list
    - `AddProjectFormPage`: uses props to update list in `App`
    - `ProjectDetailPage`: fetches by ID from URL params
- Use the mock-up to finalize the visual layout and flow. Feel free to add your own styling flair beyond the mockup.
### Task 3: Develop the Code
#### File Setup
- Initialize a new React project using `create-react-app`, `vite`, or a similar tool.

```
npm create vite@latest project-showcase --template react
cd project-showcase
npm install
npm install react-router-dom
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

```
- Create a directory structure for components, hooks, styles, and tests.
```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
├── pages/
│   ├── ProjectListPage.jsx
│   ├── ProjectDetailPage.jsx
│   ├── AddProjectFormPage.jsx
├── App.jsx
├── main.jsx
├── styles/
│   └── App.css
└── tests/
    └── ProjectList.test.jsx
```
#### Component Development
- Build functional components that align with the mock-up.
- Ensure states are created at nearest parent of all components that use them.
#### State Management
- Use useState for local state management.
- Use Context API or useReducer if global state management is necessary.
#### Styling
- Apply styles that adhere to the mock-up using CSS Modules, Tailwind, or a CSS library like Material UI.
- Implement responsive design for various screen sizes.
### Task 4: Test and Debug
- Write unit tests for key components using Jest and React Testing Library.
Example test:
```
// tests/ProjectCard.test.jsx
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

test('renders project title', () => {
  render(<ProjectCard title="My App" />);
  expect(screen.getByText(/My App/i)).toBeInTheDocument();
});
```
- Test user interactions such as form submissions and routing.
- Debug errors using browser developer tools and React DevTools.
- Refactor for code clarity and maintainability.
### Task 5: Document and Maintain
- Add comments to explain complex logic and structure.
- Write a README.md file that:
    - Provides setup and usage instructions.
    - Highlights features and any known limitations.
- Push your project to GitHub, ensuring the repository is public for review. 

**README Checklist**
```
# Project Showcase App

## Features
- View a list of projects
- Add a new project
- View project details
- Responsive design

## Setup
npm install
npm run dev
```