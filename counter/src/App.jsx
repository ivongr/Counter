import './App.css';
import useCount from './counter';


function App() {
  const {count, Increment, Decrease, handleClick} = useCount(0);

  return (
    <>
      <input type="number" value={parseInt(count)}
      onChange={(e) => handleClick(e.target.value)}></input>
      <h1>Contador {count}</h1>
      <button className="success" onClick={Increment}>Incrementar</button>
      <button className="danger" onClick={Decrease} >Disminuir</button>
    </>
  )
}

export default App
