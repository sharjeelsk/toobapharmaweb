import './App.scss';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import Home from "./components/Home";
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
    // BrowserRouter removed from here
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/chairman" element={<Chairman />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/products" element={<Products />} />
      <Route path="/multimedia" element={<Multimedia />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/rdcrams" element={<Rdcrams />} />
    </Routes>
  );
}

export default App;
