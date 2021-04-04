# React Burger Builder App with Class based Components

- npx create-react-app app-name
- npm install --save prop-types

### Initial setup

1. Removing unnecessary files
2. Cleanup
3. Setting up folder structure

### Components

1. Layout
2. Burger
3. BurgerIngredient
4. BuildControls
5. BuildControl
6. UI/Modal/Modal component
7. UI/Backdrop/Backdrop component
8. OrderSummary component

### Containers

1. BurgerBuilder

### Layout component

1. Importing higher order component to render adjacent jsx elements
2. Implementing module.css for styling

### BurgerIngredient component

1. Importing higher order component to render adjacent jsx elements
2. Adding a dynamic ingredient component which check all valid prop types via switch expression
3. Styling with module.css and applying to different prop types
4. Adding Prop Type Validation

### Burger component

1. Rendering burger ingredient components with different prop types
2. Styling with module.css including media queries for different screen sizes
3. Importing BurgerIngredients and BuildControls components
4. Outputting burger ingredients dynamically
5. Implementing condition in which checks whether ingredient array is empty or not then calculating the ingredient sum dynamically accordingly

### BurgerBuilder container

1. Importing higher order component to render adjacent jsx elements
2. Rendering Burger component
3. Passing ingredients state as props to Burger component
4. Rendering BuildControls component
5. Setting up for adding button logic with addIngredientHandler callback
6. Setting up for deducting button logic with removeIngredientHandler reference
7. Checking for removing null value logic and preventing it from happening by disabling button click
8. Incorporating total price state and passing it to build controls component as props
9. Order button conditional rendering
10. Passing purchase handler callback as props to build controls
11. Passing Cancel, continue, price references as props down to order summary component

### BuildControls component

1. Rendering BuildControl component for each label
2. Styling with module.css file via importing it first
3. Distributing addIngredientHandler as props
4. Passing down removeIngredientHandler as props to BuildControl component
5. Making modal form visible/invisible upon click handler

### BuildControl component

1. Implementing individual build control component
2. Applying styling via module.css
3. Wiring up passed props to on click handler
4. Hooking up passed props to onClick handler

### Modal component

1. Minimum barebone with rendering children props
2. Implementing module.css styling
3. Wrapping up OrderSUmmary component with ingredients as props
4. Applying inline style with condition

### OrderSummary component

1. Importing high order component to render different elements
2. Listing all ingredient items with counts
3. Continue and Cancel button import and its logic
4. Rendering price with some inline style

### Backdrop component

1. Styling via module.css
2. Implementing modal form on clicking backdrop area
