import './App.css';
import Counter from './Screens/Counter';

function App() {
  return (
    <div className="App">
      <h1>React Seminar</h1>
      <Counter start={10}/>
    </div>
  );
}

export default App;
