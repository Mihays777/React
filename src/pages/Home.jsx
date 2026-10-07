import Post from "../components/Post";

function Home() {
    const posts = [
        {
            id: 1,
            author: "Mihail",
            title: "Study React for frontend",
            text: "Какой-то осмысленный текст"
        },
        {
            id: 2,
            author: "Anton",
            title: "Backend developers",
            text: "Какой-то осмысленный текст"
        },
        {
            id: 3,
            author: "Vasya",
            title: "Design system",
            text: "Какой-то осмысленный текст"
        }
    ]

    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text} />
                ))}
            </div>
        </section>
    )
}

export default Home;