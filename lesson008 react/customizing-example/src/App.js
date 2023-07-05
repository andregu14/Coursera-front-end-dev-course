import logo from './logo.svg';
import './App.css';
import Child from './components/Child';

function App() {
  const date = new Date()

  return (
    <Child message={date.toLocaleTimeString()}/>
  );
}

export default App;
