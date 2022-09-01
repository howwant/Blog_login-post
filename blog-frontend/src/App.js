import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/Postpage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
    <Helmet>
      <title>REACTER</title>
    </Helmet>
    <Routes>
      <Route path="/" element={<PostListPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/write" element={<WritePage/>}/>
      <Route path="/@:username">
        <Route index element={<PostListPage/>}/>
        <Route path=":postId" element={<PostPage/>}/>
      </Route>
    </Routes>
    </>
  );
};

export default App;
