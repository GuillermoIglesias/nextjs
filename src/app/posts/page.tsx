const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
};

interface Post {
  id: string;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map((post: Post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
