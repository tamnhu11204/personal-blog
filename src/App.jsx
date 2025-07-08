import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/index.css';
import Footer from './components/customs/Footer';
import Navbar from './components/customs/Navbar';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;