
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Index from './Componant/Index/Index'
import Contact from './Componant/ContactPage/Contact'
import AboutPage from './Componant/AboutPage/AboutPage'
import ServiceCunsult from './Componant/ServicePage/ServiceCunsult'


function App() {


  return (
<>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Index}/>
     <Route path='/contact' Component={Contact}/>
     <Route path='/aboutPage' Component={AboutPage}/>
    <Route path='/service' Component={ServiceCunsult}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
