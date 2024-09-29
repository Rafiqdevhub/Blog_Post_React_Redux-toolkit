import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { fetchUsers } from "./features/users/UserSlice.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchPosts } from "./features/posts/PostsSlice.jsx";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
