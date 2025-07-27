import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import NavBar from './components/navbar';
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
        {/* navbar */}
        <NavBar />
        {/* routers */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
