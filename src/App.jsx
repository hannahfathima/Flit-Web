
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Index from './Componant/Index/Index'
import Contact from './Componant/ContactPage/Contact'
import AboutPage from './Componant/AboutPage/AboutPage'


function App() {


  return (
<>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Index}/>
     <Route path='/contact' Component={Contact}/>
     <Route path='/aboutPage' Component={AboutPage}/>
   
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
