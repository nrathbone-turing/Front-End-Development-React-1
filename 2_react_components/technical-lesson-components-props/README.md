# Technical Lesson: React Components and Props

## Overview
In this lesson, you will practice creating React components and passing props to build a small portfolio template website.

## The Scenario
You are working with a large web design contractor. They require a template for a personalized portfolio website. Using your knowledge of React components and props, build a dynamic website based on customer information.

Here is an image of what we want once we are finished:

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-props-basics-lab/demo.png)

## Tasks
### Task 1: Define the Problem
- Create a personalized portfolio website.

### Task 2: Determine the Design
#### Component Tree
```
└── App
    ├── NavBar
    ├── Home
    └── About
        └── Links
```
The App component is the main parent component. Its children include NavBar, Home, and About. The Links component is a child of About.

### Task 3: Develop the Code
#### Step 1: Setup
1. Fork and clone the repository.
2. Open the project in VSCode.
3. Run the following commands:
   ```sh
   npm install
   npm run dev
   ```

#### Step 2: Create Component Files
Create the following component files:
- `About.js`
- `NavBar.js`
- `Home.js`
- `Links.js`

Each file will contain a basic React component:
```jsx
import React from "react";
function ComponentName() {
  return (
    <div id="component-name">
      Component Content
    </div>
  );
}
export default ComponentName;
```

#### Step 3: Connect Each Component
Modify `App.js`:
```jsx
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}
export default App;
```

Modify `About.js` to include the Links component:
```jsx
import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}
export default About;
```

Modify `Links.js` to render user links dynamically:
```jsx
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}
export default Links;
```

Modify `NavBar.js`:
```jsx
import React from "react";
function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}
export default NavBar;
```

Modify `Home.js` to accept props:
```jsx
import React from "react";
function Home({ color, name, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
```

#### Step 4: Test and Refine
- Debugging and testing during coding.

### Task 5: Document and Maintain
- Add descriptions to each component.

## Considerations
### Rendering Variables
- React allows storing components and HTML elements as variables to be rendered dynamically.

### Props in React
Props can be destructured:
```jsx
function Home({ color, name, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
```
Or accessed as an object:
```jsx
function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}
export default Home;
```
