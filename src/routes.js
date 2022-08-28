import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Sustainability from './pages/sustainability'
import Partners from './pages/partners'
import Maps from './pages/maps'
import Privacy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

export default function MainRoutes() {
    return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/sustainability" element={<Sustainability/>}/>
    <Route path="/partners" element={<Partners/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/maps" element={<Maps/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/terms" element={<Terms/>}/>
</Routes>
    )
}