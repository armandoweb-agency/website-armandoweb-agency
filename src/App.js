import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Menu/NavBar';
import IntroContainer from './container/IntroContainer';
import ServiceContainer from './container/ServiceContainer';
import Layout from './container/Layout';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>  
          <Route path='/'  element={<Layout />} /> 
          <Route path='/intro'  element={<IntroContainer />} />  
          <Route path='/services'  element={<ServiceContainer />} />        
      </Routes>
    </>
  );
}

export default App;
