In this technical lesson, we will cover how to design and structure components, understand the component tree hierarchy, and pass data between components using props.

By the end of this lesson, you should be able to:

- Explain the syntax of React components in both JavaScript and JSX.
- Design and read a component tree (parent, sibling, child relationships).
- Pass information between components using props.
- Develop a simple, dynamic React app by applying these concepts.

**The Scenario:**
You are working on a project for a recipe app called "RecipeHub." The app displays a list of recipes, including details like ingredients and instructions. To make the app dynamic and reusable, you need to use a component-based approach and pass data between components using props.

Your task is to analyze the app’s component tree, set up the file structure, and connect the components using props to ensure data flows correctly.

## Task 1: Define the Problem
### Requirements
RecipeHub needs a component-based structure to:
- Display a list of recipes.
- Show recipe details, including the title, ingredients, and instructions.
- Pass data between components using props.
### Constraints
- Use a component tree to structure the app.
- Ensure components are reusable and maintainable.
- Pass data from parent to child components using props.
### Analyze the Component Tree
```
App
├── RecipeList
│   └── RecipeCard
└── Footer
```
- **App Component:** The root component that holds the recipe data and passes it to child components.
- **RecipeList Component:** Displays a list of recipes.
- **RecipeCard Component:** Displays individual recipe details (title, ingredients, and instructions).
- **Footer Component:** Displays a simple footer message.

## Task 2: Design and Develop the Code
### Step 1: File Setup
1. Create a new React project using Vite:
```
npm create vite@latest recipehub --template react
cd recipehub
npm install
npm run dev
```
2. Set up the project structure:
```recipehub/
└── src/
     └── components/
         ├── RecipeList.jsx
         ├── RecipeCard.jsx
         └── Footer.jsx
```

### Step 2: Connect and Design Components

**App.jsx**
```
import React from 'react';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Beef', 'Tomato Sauce'], instructions: 'Cook pasta and mix with sauce.' },
  { id: 2, title: 'Chicken Curry', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken, add curry powder, and stir in coconut milk.' },
];

function App() {
  return (
    <div>
      <h1>RecipeHub</h1>
      <RecipeList recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
```

**RecipeList.jsx**
```
import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
```

**RecipeCard.jsx**
```
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;
```
**Footer.jsx**
```
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>RecipeHub - Your favorite recipes in one place!</p>
    </footer>
  );
}

export default Footer;
```

## Task 3: Test and Refine
### Manual Testing

Run the development server:    

1. Verify that:
```
npm run dev
```
- The list of recipes displays correctly.
- Each recipe card shows the correct title, ingredients, and instructions.
- The footer is displayed at the bottom of the page.
2. Edge Cases:
- Ensure that the app handles an empty recipe list gracefully.
- Verify that all props are correctly passed and rendered.

## Task 4: Document and Maintain
### Documentation
Update the README file to include:
- Project description
- Setup instructions
- Screenshots of the working app

### Code Comments
- Add comments to explain the purpose of each component and how props are used to pass data.

### Considerations
#### Challenges or Common Issues
- **Component Tree Understanding:** Make sure you understand the parent, child, and sibling relationships in the component tree. Misunderstanding these relationships can lead to data not being passed correctly.
- **Props Usage:** Ensure that props are passed correctly from the parent to child components. Incorrect usage can result in data not being displayed as expected.
- **Dynamic Data Handling:** Verify that the app handles dynamic data updates correctly, especially when new recipes are added.
#### Next Steps
**Add More Features:**
- Allow users to add new recipes through a form.
- Implement a search feature to filter recipes by name.
**Improve UI:**
- Apply CSS styles for a professional look.
- Make the app mobile-responsive.
**Implement Error Handling:**
- Display user-friendly error messages when props are missing or incorrectly passed.
