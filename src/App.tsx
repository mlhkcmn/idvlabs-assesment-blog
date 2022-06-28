import { Suspense, FC } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import BlogCard from './components/BlogFullCard/BlogFullCard';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts/MyPosts';
import Register from './pages/Register';

const App: FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="blog-full-card" element={<BlogCard />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App;
