import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
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
    ])

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Mihail"
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
    }

    return (
    <section className="profile-card">
        <div className="profile">
            <div className="avatar">avatar</div>
            <div className="profile-info">
                <h2>Name</h2>
                <p>@nickname</p>
            </div>
        </div>

        <form className="post-form" onSubmit={addPost}>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <textarea
                placeholder="текст для поста"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">
                Опубликовать
            </button>
        </form>
        {posts.map((post) => (
            <Post
            key={post.id}
            author={post.author}
            title={post.title}
            text={post.text} />    
        ))}

    </section>
    )
}

export default ProfileCard;