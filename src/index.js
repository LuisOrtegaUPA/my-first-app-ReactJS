import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {

  const [mensaje, setMensaje] = useState(); // Devuelve un array
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter");
  }, [counter]); // Dependencia

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert("Message is: " + mensaje)
        }}
      >
        Save
      </button>

      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Sumar
      </button>
    </div>
  )
}

root.render(
  <>
    <Counter />
  </>
);
