import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import Overview from './components/AboutUs/Overview';
import Chairman from './components/AboutUs/Chairman';
import Vision from './components/AboutUs/Vision';
import Infrastructure from './components/AboutUs/Infrastructure';
import Products from './components/Products/Products';
import Multimedia from './components/Media/Multimedia';
import Contact from './components/Contact/Contact';
import Careers from './components/Careers/Careers';
import Rdcrams from './components/Rdcrams/Rdcrams';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/overview" component={Overview} />
      <Route path="/chairman" component={Chairman} />
      <Route path="/vision" component={Vision} />
      <Route path="/infrastructure" component={Infrastructure} />
      <Route path="/products" component={Products} />
      <Route path="/multimedia" component={Multimedia} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/rdcrams" component={Rdcrams} />
    </Switch>
  );
}

export default App;
