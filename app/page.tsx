import { getAllPosts } from '../lib/posts'

export default function Home() {
  const posts = getAllPosts()
  
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map(post => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}