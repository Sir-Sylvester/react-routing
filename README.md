# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# React Routing Demo Project

This project is a modern demonstration of React Router v6+ concepts, best practices, and UI patterns using React, Vite, and Tailwind CSS. This project is created to demonstrate my understanding on React routing techniques, including nested routes, dynamic params, lazy loading, and layout composition with `<Outlet />` and React Router DOM library as whole.

## Features

- **Modern React Router v6+**: Uses the latest API for route definitions, navigation, and nested layouts.
- **Lazy Loading**: All main pages are loaded on demand for optimal performance.
- **Dynamic Routing**: Both `/explore/:id` and `/services/:id` demonstrate dynamic route params.
- **Nested Routing with `<Outlet />`**: The Services section uses nested routes and `<Outlet />` to render child content.
- **Error Boundaries**: Catches and displays runtime errors in a user-friendly way.
- **Beautiful UI**: Styled with Tailwind CSS for a clean, modern look.

## Routing Properties and Components Used

- **`<Routes>`**: The main routing switch for all route definitions.
- **`<Route>`**: Used for each route, including nested and dynamic routes.
- **`<NavLink>`**: Used in the navigation bar for active link styling.
- **`<Link>`**: Used for navigation between pages and dynamic routes (e.g., service and explore IDs).
- **`<Outlet>`**: Used in the Services page to render nested child routes (service details) only when a service is selected.
- **`useNavigate`**: Used in detail pages for programmatic navigation (e.g., Go Back buttons).
- **`useParams`**: Used in detail pages to access dynamic route parameters (e.g., service or explore ID).
- **`Suspense`**: Used for lazy loading route components with a fallback loader.
- **`Navigate`**: Used for redirect routes (e.g., `/go-home`).
- **Error Boundary**: Catches and displays errors in the UI.

## Project Structure

```
src/
  App.tsx            # Main app, routing, error boundary, layout
  main.tsx           # Entry point
  pages/
    Home.tsx         # Home page
    Contact.tsx      # Contact page
    Services.tsx     # Services page (with Outlet for nested routes)
    ServiceDetail.tsx# Service detail (nested under Services)
    Explore.tsx      # Explore page (list of IDs)
    ExploreDetail.tsx# Explore detail (flat route)
```

## Routing Concepts Demonstrated

### 1. Basic Routing

- Home, Contact, and Services pages are routed using `<Route path="/" element={<Home />} />` etc.

### 2. Dynamic Routing

- `/explore/:id` and `/services/:id` use dynamic params to render detail pages for each ID.

### 3. Nested Routing & `<Outlet />`

- The Services page uses nested routing:
  ```tsx
  <Route path="/services/*" element={<Services />}>
    <Route path=":id" element={<ServiceDetail />} />
  </Route>
  ```
- `<Outlet />` in `Services.tsx` renders the detail template only when a service is selected.

### 4. Flat Routing

- The Explore section uses flat routing for `/explore` and `/explore/:id`.

### 5. Lazy Loading

- All main pages are loaded with `React.lazy` and `Suspense` for code splitting and fast initial load.

### 6. Error Boundaries

- The app is wrapped in an error boundary to catch and display errors gracefully.

## Demo Walkthrough

- **Navigation Bar**: Use the nav bar to switch between Home, Contact, Services, and Explore.
- **Services**: Click a service (e.g., Freelancing) to see its detail page rendered via `<Outlet />`.
- **Explore**: Click an ID to see a detail page for that ID (flat route, not nested).
- **404 Handling**: Invalid routes show a custom 404 page.
- **Error Handling**: Any runtime error is caught and displayed by the error boundary.

## Best Practices Used

- Modular file structure
- Clean, readable code
- Type safety (if using TypeScript)
- Modern React Router patterns
- Tailwind CSS for utility-first styling
- Lazy loading for performance
- Error boundaries for robustness
