import {Routes, Route} from 'react-router-dom'
import App from './App'
import NavBar from './components/Navbar'
import HtmlDefinition from './components/HtmlDefinition'
import CssDefinition from './components/CssDefinition'
import JsDefinition from './components/JsDefinition'



const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/html' element={<HtmlDefinition />} />
                        <Route path='/css' element={<CssDefinition />} />
                        <Route path='/js' element={<JsDefinition />} />
                        <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        
        </>
    )
}

export default MyRouter