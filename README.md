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

### BuildControls component

1. Importing BuildControl component
2. Styling with module.css file via importing it first

### BuildControl component

1. Implementing individual build control component
2. Applying styling via module.css
