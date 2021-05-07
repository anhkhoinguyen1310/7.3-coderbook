import "./App.css";
import { Route, Switch} from "react-router-dom";
import {ProtectedRoute, Navbarr} from './components'
import {HomePage, AuthPage,FourOhFourPage} from './pages'
import {Container} from "react-bootstrap"





function App() {
  return (
   <div>  <Navbarr/> 
    
    <Container>
    <Switch>
    <Route exact path={`/login`} component={AuthPage} />
    <ProtectedRoute exact path={`/`} component={HomePage} />
    <Route path={`/*`} component={FourOhFourPage} />
  </Switch>
  </Container>
  </div>
  );
}

export default App;
