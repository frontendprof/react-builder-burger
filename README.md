# React Burger Builder App with Class based Components

- npx create-react-app app-name
- npm install --save prop-types
- npm install --save axios

### Initial setup

1. Removing unnecessary files
2. Cleanup
3. Setting up folder structure

### Components

2. Burger
3. BurgerIngredient
4. BuildControls
5. BuildControl
6. UI/Modal/Modal component
7. UI/Backdrop/Backdrop component
8. OrderSummary component
9. Toolbar component
10. Logo component
11. NavigationItems and NavigationItem components
12. SideDrawer
13. DrawerToggle component
14. Spinner component

### Containers

1. BurgerBuilder
2. Layout

### hoc

1. Aux
2. withErrorHandler

### Layout component

1. Importing higher order component to render adjacent jsx elements
2. Implementing module.css for styling
3. Importing Toolbar component
4. Importing SideDrawer component
5. Passing drawerToggleClicked props after wiring it up sideDrawerToggleHandler callback

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
12. Configuring post request sending to firebase database
13. Checking if loading state true, importing spinner component
14. Configuring database for retrieving data from it

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
5. Fine-tuning for spotting change in modal children props

### OrderSummary component

1. Importing high order component to render different elements
2. Listing all ingredient items with counts
3. Continue and Cancel button import and its logic
4. Rendering price with some inline style

### Backdrop component

1. Styling via module.css
2. Implementing modal form on clicking backdrop area

### Toolbar component

1. Rendering header, menu, logo, nav elements
2. Applying style via module.css
3. Importing logo component
4. Importing NavigationItems component
5. Importing DrawerToggle component and passing clicked props

### Logo component

1. Importing logo image
2. Appyling style via module.css file

### SideDrawer component

1. Importing Logo component
2. Importing NavigationItems
3. Styling with module.css file

### DrawerToggle component

1. Rendering Menu div element
2. Attaching on click event handler
3. Attaching module.css file for styling hamburger icon

### Spinner component

1. Initial scaffolding
2. Clonning spinner from projects.lukehass.me
3. Applying style via module.css

### withErrorHandler

1. Initial scaffolding
2. Creating axios interceptors for request and respond
3. Removing redundant interceptors
