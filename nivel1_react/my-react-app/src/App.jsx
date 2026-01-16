import { useState } from "react";

function ParentComponent() {
  const [name, setName] = useState("Juanaco");

  return <ChildComponent name={name} setName={setName} />;
}

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      
      <button onClick={() => props.setName("Juanky")}>
        Change to Juanky
      </button>

      <button onClick={() => props.setName("Iker")}>
        Change to Iker
      </button>
    </>
  );
}

export default ParentComponent;