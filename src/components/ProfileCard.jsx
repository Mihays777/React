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

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id
        ));
    }

    return (
    <section className="profile-card">
        <div className="profile">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev3k5sOvmVP5HMFm3b33x3DSz4Q6MqT3uqjyRE8PCdQ&s" alt="avatar" />
            <div className="profile-info">
                <h2>Mihail</h2>
                <p>@litvin</p>
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
                placeholder="Текст для поста"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">
                Опубликовать
            </button>
        </form>

        {posts.length > 0 ? (
        posts.map((post) => (
            <Post
            id={post.id}
            author={post.author}
            title={post.title}
            text={post.text}
            onDelete={deletePost} />    
        ))
    ) : (
        <p className="empty-message">Опубликуйте первый пост</p>
    )}

    </section>
    )
}

export default ProfileCard;