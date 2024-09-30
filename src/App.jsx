import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UsersList from "./components/users/UsersList";
import UserPage from "./components/users/UserPage";
import PostsList from "./components/post/PostsList";
import AddPostForm from "./components/post/AddPostForm";
import SinglePostPage from "./components/post/SinglePostPage";
import EditPostForm from "./components/post/EditPostForm";

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
