import Post from "./Post";

function ProfileCard() {
    return (
    <section className="profile-card">
        <div className="profile">
            <div className="avatar">avatar</div>
            <div className="profile-info">
                <h2>Name</h2>
                <p>@nickname</p>
            </div>
        </div>

        <Post />
    </section>
    )
}

export default ProfileCard;