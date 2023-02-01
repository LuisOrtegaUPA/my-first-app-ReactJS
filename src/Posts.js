const Post = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/post')
            .then(response => response.json()) // Promise
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }}>Post</button>;    
}

export default Post;