import Actions from "./Actions"

function Post({author, title, text}) {
    return (
        <div>
            <article className="post">
                <h2>Title for post</h2>
                <p className="post-text">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Id, voluptatibus?</p>
                <p className="post-author">Автор: {author}</p>
                <Actions />
            </article>
            <article className="post">
                <h2>Title for post</h2>
                <p className="post-text">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Id, voluptatibus?</p>
                <p className="post-author">Автор: {author}</p>
                <Actions />
            </article>
            <article className="post">
                <h2>Title for post</h2>
                <p className="post-text">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Id, voluptatibus?</p>
                <p className="post-author">Автор: {author}</p>
                <Actions />
            </article>
        </div>
    )
}

export default Post;