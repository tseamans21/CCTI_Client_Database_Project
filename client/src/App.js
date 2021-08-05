import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';





import './App.css';
//functions or classes need to render pages
import Form from './form';
import Search from './Search';
import Update from './update';
import Footer from './Components/Footer';


class App extends React.Component {
render() {
  return (
    
  <div>
    <Router>
      <NavBar />
    <Switch>
              <Route exact path='/' component={Form}></Route>
              <Route exact path='/Search' component={Search}></Route>
              <Route exact path='/update' component={Update}></Route>
            </Switch>
            <Footer />
    </Router>
    
  </div>

  )
}
}





export default App;