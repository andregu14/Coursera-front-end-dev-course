import logo from './logo.svg';
import './App.css';

function Heading() {
  return <h1>This is an h1 heading</h1>
}

function Header() {
  return <h1>Hello World!</h1>
}

function App() {
  return (
    <div>
      <Heading />
      <Header />
    </div>
  ) 
}

export default App;
