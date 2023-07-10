import './App.css';
import UseStateEx from './components/UseStateEx';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Goals from './components/Goals';
import UsingUseEffect from './components/UsingUseEffect';
import FetchingData from './components/FetchingData';
import UseReducerExample from './components/UseReducerExample';
import UseRefExample from './components/UseRefExample';
import HOCExample from './components/HOCExample';


function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Goals />} />
        <Route path='/use-state-example' element={<UseStateEx />} />
        <Route path='/using-use-effect' element={<UsingUseEffect />} />
        <Route path='/fetching-data' element={<FetchingData />}/>
        <Route path='/use-reducer-example' element={<UseReducerExample />}/>
        <Route path='/use-ref-example' element={<UseRefExample />}/>
        <Route path='/hoc-example' element={<HOCExample />} />
      </Routes>
    </div>
  );
}

export default App;
