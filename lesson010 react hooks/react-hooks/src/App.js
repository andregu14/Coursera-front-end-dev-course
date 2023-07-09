import './App.css';
import UseStateEx from './components/UseStateEx';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Goals from './components/Goals';
import UsingUseEffect from './components/UsingUseEffect';


function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Goals />} />
        <Route path='/use-state-example' element={<UseStateEx />} />
        <Route path='/using-use-effect' element={<UsingUseEffect />} />
      </Routes>
    </div>
  );
}

export default App;