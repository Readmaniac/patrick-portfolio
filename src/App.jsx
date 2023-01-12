import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/patrick-portfolio" element={<MainLayout />}>
            {/* index говорит о том, что данный компонент будет показываться для пути "/". 
            Другие пути относительны "/" (родительского) */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
