
import './index.css'
import 'animate.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Portfolio from './Views/Portfolio';
import SeccionSobreMi from './Components/SeccionSobreMi';
import SeccionTrabajo from './Components/SeccionTrabajo';
import SeccionFormulario from './Components/SeccionFormulario';



function App() {
  return (
   
    <>
        <Router>
            <Header />

              <Switch>
                  <Route  path='/' exact component={Home} />
                  <Route path='/portfolio' exact component={Portfolio} />
                  <Route path='/sobremi' exact component={SeccionSobreMi} />
                  <Route path='/trabajo' exact  component={SeccionTrabajo} />
                  <Route path='/contacto' exact component={SeccionFormulario} />
                  
              </Switch>

            <Footer />
        </Router>
    </>
  );
}

export default App;
