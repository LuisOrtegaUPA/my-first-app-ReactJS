export function Greeting({title}) {
    console.log(title);
    return <h1>Hello {title} </h1>;
}

export function UserCard({name, amount, married, points, address, greet}) {
    console.log(greet);
  return (
    <h1>
      Nombre: {name} <br />
      Money: ${amount} <br />
      Married: {married ? "Yes" : "No"} <br />
      Points: {points} <br />
      <ul>
        Address:
        <li>Street: {address.street}</li>
        <li>City: {address.city}</li>
        <li>cp: {address.cp}</li>
      </ul>
    </h1>
  );
}
