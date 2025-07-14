# Todo List App

## Setup and Running Instructions

1. **Node.js Version**  
   Make sure you have Node.js version **20.19+** or **22.12+** installed.  
   Vite requires Node.js at least 20.19 or 22.12 and above.

2. **Install dependencies**  
   Run this command in the project root to install all necessary packages:
   ```bash
   npm install
   ```
3. **Run the development server**  
   Start the local dev server with:
   ```bash
   npm run dev
   ```

## View live demo

A live deployed version of the app is available here:
https://ttss-todo-list.vercel.app/

## Tech Stack

- **React**  
  Used as the core library for building user interfaces, as required by the assignment.

- **TypeScript**  
  Included to provide static typing, improve code safety, and enhance the developer experience. Also specified in the assignment requirements.

- **Tailwind CSS**  
  Chosen for its utility-first approach, which allows rapid styling without writing custom CSS. It speeds up development and reduces the need to name and manage CSS class selectors.

- **Vite**  
  Selected for its fast development performance and modern build system. Vite offers instant startup, lightning-fast hot module replacement (HMR), and a better developer experience compared to older bundlers like Webpack.

## Implementation Choices

- **State Management**  
  I used React’s built-in `useState` and `useEffect` hooks for simplicity and clarity. Since the app is small and only manages a single piece of shared state (`todos`), using Redux or Context would have been unnecessary overhead.

- **Optimistic UI Updates**  
  For adding, editing, deleting, and toggling todos, the app updates the UI immediately and performs the API request in the background. This ensures a fast and responsive user experience. Error handling is in place to log any issues in case the server fails.

- **Error and Loading States**  
  The app handles loading and error states explicitly and displays appropriate UI messages. This helps users understand what’s happening, especially during slow connections or API failures.

- **Component Structure**  
  Logic is centralized in the main `Todo` component, and individual items are rendered using a separate `TodoItem` component. This separation improves code readability and reusability.

- **Mock API Use**  
  JSONPlaceholder’s `/todos` endpoint was chosen because it simplifies the implementation of CRUD functionality without setting up a backend. While changes aren’t persisted, the API provides realistic HTTP methods for testing.
