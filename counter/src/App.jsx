import './App.css';
import useCount from "./counter";

function App() {

  const { count, increment, decrease } = useCount(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrease}>Disminuir</button>
    </>
  );
}

export default App;
