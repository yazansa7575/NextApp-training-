import React from 'react'
import PostCard from './PostCard';

const ContainerPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'
        , {
            cache: "no-store"
        })
    const posts = await response.json();
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    )
}

export default ContainerPost