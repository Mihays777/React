import Actions from "./Actions"

function Post({ id, author, title, text, onDelete }) {
    return (
        <div>
            <article className="post">
                <h2>{title}</h2>
                <p className="post-text">{text}</p>
                <p className="post-author">Автор: {author}</p>

                <Actions />

                {onDelete && (
                    <button
                        className="delete-button"
                        onClick={() => onDelete(id)}>
                        Удалить
                    </button>
                )}
            </article>
        </div>
    )
}

export default Post;