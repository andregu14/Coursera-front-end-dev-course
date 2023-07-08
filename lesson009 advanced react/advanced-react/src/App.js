import { Routes, Route } from 'react-router-dom';
import './App.css';
import DessertList from './components/DessertList';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Feedback from './components/Feedback';
import RegistrationForm from './components/RegistrationForm';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      
      <Nav />

      <Routes>
      <Route path='/' element={<Homepage />} />

      <Route path='/desserts' element={<DessertList data={desserts}/>} />

      <Route path='/feedback' element={<Feedback />}/>

      <Route path='registration' element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
