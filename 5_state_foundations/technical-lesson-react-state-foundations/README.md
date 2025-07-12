# Overview

In this lesson, we will cover how to manage state in React applications, understanding how state works, when to use it, and how to update it effectively. By the end of this lesson, you should be able to:

- Understand the concept of state in React and its role in dynamic applications.
- Use the `useState` hook to manage component state.
- Update state based on user interactions.
- Build a simple React app that incorporates state management.

# Scenario
You are tasked with enhancing the RecipeHub app by allowing users to interact with it dynamically. Users should be able to like a recipe and see the total number of likes update instantly. To achieve this, you will manage the likes count using state within the React components.

Your task is to analyze the app’s state management needs, set up state within components, and ensure that user interactions trigger appropriate state updates.

## Task 1: Define the Problem

### Requirements
RecipeHub needs interactive functionality to:
- Display a list of recipes with a like button.
- Track and display the number of likes for each recipe.
- Update the likes count when a user clicks the like button.

### Constraints
- Use the useState hook to manage state within components.
- Ensure state updates correctly based on user interactions.
- Keep the app’s component tree organized and maintainable.

### Analyze the Component Tree with State
```
App
├── RecipeList
│   └── RecipeCard
└── Footer
```
## Task 2: Design and Develop the Code

### Step 1: File Setup

If you haven't already created the RecipeHub app, follow these steps:
```
npm create vite@latest recipehub --template react
cd recipehub
npm install
npm run dev
```

Set up the project structure:
```
recipehub/
└── src/
     └── components/
         ├── RecipeList.jsx
         ├── RecipeCard.jsx
         └── Footer.jsx
```

### Step 2: Connect and Design Components with State

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
import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes + 1);
  }
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
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
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

**Manual Testing:**
Run the development server:

```
npm run dev
```

**Verify that:**
- The list of recipes displays correctly.
- Each recipe card shows a like button.
- Clicking the like button updates the likes count instantly.

**Edge Cases:**
- Ensure that the app handles an empty recipe list gracefully.
- Verify that likes count starts at zero and increments correctly.
- Confirm that each recipe card maintains its own separate likes count.


## Task 4: Document and Maintain

### Documentation
**Update the README file to include:**
- Project description
- Setup instructions
- Screenshots of the working app with like functionality

### Code Comments
**Add comments to explain:**
- The purpose of the useState hook in each component.
- The logic behind state updates when the like button is clicked.

### Considerations
**Challenges or Common Issues**
- State Initialization: Ensure that state is correctly initialized using useState.
- State Updates: Verify that state updates correctly and that the UI reflects these updates in real-time.
- Component Re-renders: Understand that React re-renders components when state changes.

### Next Steps
**Add More Features:**
- Allow users to reset the likes count.
- Implement a feature to dislike a recipe.

**Improve UI:**
- Apply CSS styles to make the like button visually appealing.
- Display a total likes count in the RecipeList component.

**Implement Error Handling:**
- Display a message if there are issues updating state.