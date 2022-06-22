import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Sustainability from './pages/sustainability'

export default function MainRoutes() {
    return (
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/sustainability' element={<Sustainability/>}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>
    )
}