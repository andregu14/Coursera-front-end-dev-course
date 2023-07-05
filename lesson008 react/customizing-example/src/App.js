import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import InputComponent from './components/InputComponent';

function App() {
  const date = new Date()

  return (
    <>
    <InputComponent />
    <Child message={date.toLocaleTimeString()}/>
    </>
  );
}

export default App;
