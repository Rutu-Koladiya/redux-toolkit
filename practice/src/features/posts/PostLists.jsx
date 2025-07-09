import { useSelector } from "react-redux"

const PostLists = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <>
            <h2>Posts</h2>
            {renderedPosts}
        </>
    )
}

export default PostLists