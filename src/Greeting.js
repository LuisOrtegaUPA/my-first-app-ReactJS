export function Greeting() {
    return <h1>Hello World!</h1>
}

export function UserCard() {
    const data = {
        name: 'Luis Ortega',
        age: 21,
        status: 'married'
    }

    return <p>{ JSON.stringify(data) }</p>
}
