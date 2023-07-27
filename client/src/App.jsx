import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import NotFound from './pages/NotFound';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import PreviewPostPage from './pages/PreviewPostPage';
import CommentPage from './pages/CommentPage';
import UpdatePost from './pages/UpdatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/:id" element={<PreviewPostPage />} />
        <Route path="/postPage" element={<PostPage />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/update/post" element={<UpdatePost />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
