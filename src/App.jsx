import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/customs/Navbar';
// import Footer from '@/components/Footer';
// import Home from '@/pages/Home';
// import Blog from '@/pages/Blog';
// import PostDetail from '@/pages/PostDetail';
// import About from '@/pages/About';
// import Contact from '@/pages/Contact';
import '@/index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;