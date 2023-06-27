import { DiDatabase } from 'react-icons/di';

const Post = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Solicitando datos de API
            .then(response => response.json()) // Promise
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>
        Post
        <DiDatabase /> 
    </button>;    
}

export default Post;