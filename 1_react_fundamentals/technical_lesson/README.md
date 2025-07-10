# Scenario

A new e-commerce startup, ShopEase, aims to build a dynamic product catalog to display products on their website. The catalog should allow users to view product details, filter by category, and dynamically update content without reloading the page. The startup's development team decided to use React for this project due to its component-based architecture and efficient rendering.

## Task 1: Define the Problem

ShopEase needs a dynamic product catalog to enhance the user experience on their website. The catalog should render product information dynamically based on user interactions.

**Requirements:**

* The product list should dynamically display product cards with titles, images, and prices.
* Users should be able to filter products by category.
* The page should update dynamically without reloading.

**Constraints:**

* Use React components to structure the application.
* Ensure components update correctly when state changes.
* Use Vite to set up and optimize the project.

## Task 2: Design and Develop the Code

### Step 1: Creating the App with Vite

Install Vite and Create the React App

1. Run the following commands in Terminal to create a new React application:

```
npm create vite@latest shop-ease-catalog --template react
cd shop-ease-catalog
npm install
npm run dev
```

2. Project Structure Overview
* **index.html:** Entry point for the application.
* **main.jsx:** Where React is initialized.
* **App.jsx:** Main component of the app.

### Step 2: Build the Product Catalog Component

updated App.jsx

```
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'Laptop', category: 'Electronics', price: '$999', image: 'laptop.jpg' },
  { id: 2, title: 'Coffee Maker', category: 'Home Appliances', price: '$49', image: 'coffee-maker.jpg' },
  { id: 3, title: 'Headphones', category: 'Electronics', price: '$199', image: 'headphones.jpg' },
];

function App() {
  const [filter, setFilter] = useState('');

  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <div>
      <h1>ShopEase Product Catalog</h1>
      <button onClick={() => setFilter('Electronics')}>Electronics</button>
      <button onClick={() => setFilter('Home Appliances')}>Home Appliances</button>
      <button onClick={() => setFilter('')}>All</button>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
```

created and updated ProductCard.jsx

```
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
```

### Step 3: Change Content Dynamically

Modify the product list by interacting with filter buttons:

- When the user clicks the "Electronics" button, only products in that category should be displayed.
- The "All" button should reset the filter and display all products.

### Step 4: View in Browser

1. Run the development server:
`npm run dev  `
2. Open the provided localhost URL to view your app in the browser.

## Task 3: Test and Refine

1. Manual Testing:
- Verify that the product cards render correctly.
- Test the filter buttons to ensure they update the product list dynamically.

2. Adding a Jest Test: Create a simple Jest test to verify that the filtering functionality works

create `App.test.jsx`

```
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('filters products by category', () => {
  render(<App />);

  const electronicsButton = screen.getByText('Electronics');
  fireEvent.click(electronicsButton);

  const productTitle = screen.getByText('Laptop');
  expect(productTitle).toBeInTheDocument();
});
```

## Task 4: Document and Maintain

### Version Control
1. Use Git for tracking changes:
- `git init `
- `git add . `
- `git commit -m "Initial product catalog app with filter functionality" `
2. Push to GitHub:
- `git remote add origin <your-repository-url> `
- `git push origin main`

### Documentation
1. Update README:
- Add clear instructions on how to run the project.
- Include screenshots of the product catalog.
2. Code Comments:
- Add comments to App.jsx and ProductCard.jsx to explain key parts of the code.


## Considerations

### Challenges or Common Issues
- **Dynamic Filtering:** Ensure filters update correctly when buttons are clicked.
- **Component Reusability:** Ensure product cards are reusable for different data sets.
- **Vite Setup:** Verify that the Vite development server is running correctly.

### Next Steps
**Add More Features:**
- Implement a search bar to filter products by name.
- Add a cart feature to track selected products.

**Improve UI:**
- Apply CSS styles for a professional look.
- Make the app mobile-responsive.