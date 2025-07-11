# The Scenario 
You are working with a larger web design contractor. They require a template built for a personalized portfolio website that is commonly sold. Using your knowledge of react components and props build a dynamic website given a customer's information.

**Tools & Resources**
- [GitHub for Technical Lesson: Components and Props](https://github.com/learn-co-curriculum/technical-lesson-components-props)
- [React Documentation (legacy): Components and props](https://legacy.reactjs.org/docs/components-and-props.html)

## Task 1: Define the Problem
Create a personalized portfolio website
## Task 2: Determine the Design
### Determine Component Tree
The tree is vital to determine where we put which components. Often there are several different trees you can design that will achieve the same website, in this case however a tree will be given to you based on how the website should look like.

```
└── App
    ├── NavBar
    ├── Home
    └── About
        └── Links
```
With nearly every react application we start with the App file as our top main file. When you create a new react app it will generate this file. The children of App are NavBar, Home, and About. That would make those three siblings of each other. And we have one more component Links, which would be a child of about.
### Isolate/develop design per component
The next step would be to figure out what each component looks like. This is done through many different ways but the core of all is to have a design to work off of. In this case we have an image of what the website should look like and we will design our components off of that.

![Image of a basic website with parchment-yellow color background color, a block of text centered on the page that says "Liza is a Web Developer from New York" and a top navigation bar featuring "Home" and "About" tabs in a light maroon font color](./WebDevPage.png)

When unsure about what the tree should look like the next resource to look at would be any images or wireframes of what the website should look like. Sometimes you will be provided with both the wireframe and the tree but sometimes you may only be given one or the other. Looking at a wireframe and breaking it down into components is a useful skill to begin developing!

In this image, because we know what components we have, we can split this image up by the components we expect. It is good at this point to also determine any dynamic aspects we may want as those will likely be props. So we have the Navbar at the top with home and about. These will likely be the same regardless of who wants this website. Next we have the about section which would be the bottom white section of the image, indicated by the text being “About Me”. This component has the header text as well as a description text.  Also in this component we also see a links header with two dynamic links below, making this our Links component. Finally that leaves the middle component as our last listed component Home, with a dynamic paragraph with the customers name.

## Task 3: Develop the Code 
### Step 1: Setup

To get started, make sure you **fork and clone the repository**.

Once the code is open in VSCode, **run the following commands** in the terminal:
```
npm install
npm run dev
```

This will install all required dependencies and will open up the webpage in your browser. After saving a file it will automatically update the page on your browser so you can see your changes reflected immediately on the webpage! 

### Step 2: Create files for each component

**Create a file for each of your components.** This way we can swap between and work on different components at the same time. By setting them up earlier that will allow for you to organize the components before delving into the content of each, which will help with figuring out if you need more or less components. It is important to keep in mind that this step is not limiting the amount of components you have, you can always create and delete any additional components as you see fit. 

**Create About.js file and modify the About.js code** so that it contains the following code: 

```
import React from "react";
function About() {
  return (
    <div id="about">
		About!
    </div>
  );
}
export default About;
```

**Create NavBar.js file and modify the NavBar.js code** so that it contains the following code: 

```
import React from "react";
function NavBar() {
  return (
    <div id="navbar">
		Navbar!
    </div>
  );
}
export default NavBar;
```

**Create Home.js file and modify the Home.js code** so that it contains the following code:

```
import React from "react";
function Home() {
  return (
    <div id="home">
		Home!
    </div>
  );
}
export default Home;
```

**Create Links.js file and modify the Links.js code** so that it contains the following code: 

```
import React from "react";
function Links() {
  return (
    <div id="links">
		Links!
    </div>
  );
}
export default Links;
```
In all of our files, we have effectively created the same code. We are importing react, and creating a function called whatever our component is called. We then at the end export default this function. It is important to note that all react component functions must be capitalized!

As an example, we could not do `function about()` we must capitalize the about making it `function About()`. In each of our functions we are returning direct html code (a feature of react). This will allow for us to render the html we have in the return as soon as we connect these files.

### Step 3: Connect each component

As we build components it is important to note that these components will not render to the page until we connect them to App. All of our components are effectively nonexistent to our web app until it is connected to the App file. So starting by connecting them to App will allow us to see changes reflected on our webpage.

**Modify the App.js code** so that it contains the following code: 

```
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
```

We start off by importing the files we need into App. Because our tree has Navbar, Home, and About as children of App, those are the ones we import. We can only import them because we have the export default line at the end of each of the respective files. When it comes to importing we also have to keep in mind our relative file path. All of the components (including App) are in our components folder. So because we are in the same folder we can just use ./filename to access that file. The next import we have is an example of an import that is outside the file. We are importing user from our user.js file, this contains one specific user's data for the purpose of testing. This user.js file is housed in a folder called data, which if you look at the folders is a sibling of the components folder. So because of this we have to use ../data/user, the ../ indicates us moving one folder up, the /data indicates us going into the data folder, and the /user indicates us importing from the user.js file.

Now that the proper components are imported, we need to add them to the return to ensure that the component renders. So for all react components we can treat them similarly to html elements. So by putting it into the return using <> we can render those components.

For example, putting <NavBar/> will load the elements we have in NavBars return directly into App. So by putting all of our imported components into the return of App, if we save then we should see on our webpage the three components we see rendered. Next we are missing links so: 

**Modify the About.js code** so that it contains the following code: 

```
import React from "react";
import Links from "./Links";
function About() {
  return (
    <div id="about">
		About!
		<Links/>
    </div>
  );
}
export default About;
```

Because our tree has Links as a child of About we want to import and render Links within our About.js file. Because About is connected to App this will also allow for Links to be rendered which can be seen if we save and go to check out our webpage

### Step 4: Develop each component

Once everything is connected it is now a matter of trying to replicate our wireframe so that we can start to create any webpage we want! Now that it is connected any changes we make to our files will be shown on the page after saving making our development process much quicker. From here development can happen in many different ways, for this problem we will take things one component at a time.

**Modify the NavBar.js code** so that it contains the following code:

```
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

If we want to see any html reflected on our webpage we need to add it to the return. So for the NavBar we will add a <nav> component and have a tags with hrefs that will connect to our other components. This will allow for when the user selects the respective a tags they will be moved to that section of the page.

**Modify the Home.js code** so that it contains the following code: 

```
import React from "react";
function Home({color, name, city}) {
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

Moving on to our home component, because we have dynamically rendered text to display information of our user, we have to use props to pass the user information from our App to our Home. We need three pieces of information, we need the name of the user, the city, and the color style that they want. So we can put them in as function arguments, which would be known as props in react. 

Once passed in this way we can treat them like any other variable. Now to get the page to display these dynamically we need to put them in the return, however if we directly put these variables in the return we will see that it will display the text of “name” as opposed to the text held within the variable of name. To get the variable of name to render correctly we need to put it in curly brackets, {}. Putting it in curly brackets within our html elements will allow for it to be read as a variable instead of the text. We will run into an issue here however which is that the props are set up in our Home.js file, but if we do not set it up where our component is rendered, App.js, these props will be treated as undefined. So moving onto App.js:

**Modify the App.js code** so that it contains the following code: 

```
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About />
    </div>
  );
}

export default App;
```

To handle the props for Home we need to think of it similar to a function. When we call a function we send the arguments through the call, and this allows for the function to receive the variable. Similarly we must do that for the props. So within our call of our Home component we need to pass into the home our three props, name, city, and color. These variables are determined by the user object. So when we define name we define it to user.name, name = {user.name}. This will set up the prop fully and if this end sends the prop and the Home component receives the prop we have successfully set up our props. If we save both files and check our webpage we should see the home component be complete! Next component will be the about section.

**Modify the About.js code** so that it contains the following code: 

```
import React from "react";
import Links from "./Links";

function About({bio,links}) {
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

For about we match the image given by having an h2 for our header, a p for our bio, and an image. Similarly to our Home component we need to have a prop for our bio section so we create that prop for bio and render it in the p tag. Beyond that however we also need to dynamically load the links. The user object has links so we can go ahead and pass that into our Links component, we will split up the links into the two types of links we have, github and Linkedin.

**Modify the Links.js code** so that it contains the following code: 

```
import React from "react";

function Links({github,linkedin}) {
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

Within our Links component we make sure we set up the props that we sent from our About component. We can then use both of these components with an a tag to both render the link and connect the link directly to the url of the users github and linkedin. This still won’t work because even though we connected the github and linkedin props between About and Links, these props rely on the props called links, which alongside the prop bio is reliant on connecting the props between About and App.

**Modify the App.js code** so that it contains the following code:

```
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
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

This final addition is to pass the props of bio and links down to About. These are reliant on user.bio and user.link respectively. So we take user.link pass it into About, from about pass that links object into the Links component as the props github and linkedin. As long as the component is connected to the App we can take any variable and pass it down the tree into any component to have access to that variable in other components! 

Now that all the files have been updated our webpage should look like the wireframe given meaning we have completed the task. Through the power of components and props, if we change data.js that change should reflect on our webpage!

## Task 4: Test and Refine 
Debugging and testing during coding / Testing the Product Catalog

**Manual Testing:**

- Verify components render correctly.
- Test if props dynamically update content.
- Adding a Jest Test:
-   Create a simple Jest test to verify prop-based rendering.
- `App.test.jsx`

```
import { render, screen } from '@testing-library/react';
import App from './App';
import user from './data/user';

test('renders user name in Home component', () => {
  render(<App />);
  expect(screen.getByText(`${user.name} is a Web Developer from ${user.city}`)).toBeInTheDocument();
});
```

## Task 5: Document and Maintain 

Add descriptions on each of the components to help you organize them and know what they do.  Also, it is important to know which other components each are connected to.

**Version Control:** Use Git for tracking changes:

- `git init`
- `git add .`
- `git commit -m "Initial portfolio template with components and props"`

**Push to GitHub:**

- `git remote add origin <your-repository-url>`
- `git push origin main`

**Documentation-** Update README:

- Add clear instructions on how to run the project.
- Include screenshots of the portfolio website.
- **Code Comments:** Ensure `Home.jsx`, `About.jsx`, and `Links.jsx` include comments explaining key logic.

# Considerations

In this lesson, we built a dynamic portfolio website using React components and props. We structured the UI efficiently, passed dynamic data between components, and ensured reusability. With these skills, you can create scalable and customizable React applications while exploring further enhancements like styling and state management.

- **Rendering Variables:** A useful tool for react is the ability to save react components and html elements directly to a variable. You can then render the variable directly in the return of the component.
- **Imports:** Double check the file structure and the imports for the child components, often an import mistake can be the cause of a component not rendering correctly
- **Destructuring Props:** When using props we destructure the props directly in the arguments of our react components. This is indicated by the curly brackets, {}. You may see the props not be destructured in which we can treat the props as an object with an attribute for every prop you pass in.

```
// Destructured
function Home({color, name, city}) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;

// Not Destructured
function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}
```