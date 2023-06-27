export function Greeting({title}) {
    console.log(title);
    return <h1>Hello {title} </h1>;
}

export function UserCard({name, age, married, points, address, greet}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <ol>
        <li>Age: {age} years old</li>
        <li>Married: {married ? "Casado" : "Soltero"}</li>
        <li>Points: {points}</li>
      </ol>
    
    <h1>Address:</h1>  
      <ul>
        <li>Street: {address.street}</li>
        <li>CP: {address.cp}</li>
        <li>City: {address.city}</li>
      </ul>
    </div>
  );
}

export default Greeting;
