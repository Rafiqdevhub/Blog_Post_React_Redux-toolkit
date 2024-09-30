import { Navigate, Route, Routes } from "react-router-dom";
import AddPostForm from "./components/AddPostForm";
import Layout from "./components/Layout";
import PostsList from "./components/PostsList";
import SinglePostPage from "./components/SinglePostPage";
import EditPostForm from "./components/EditPostForm";
import UsersList from "./components/users/UsersList";
import UserPage from "./components/users/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
