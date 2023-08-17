import Link from "next/link";

const PostCard = ({ title, body, id }) => {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <p className="card-text">{body}</p>
                <Link href={`/postsPage/${id}`} legacyBehavior>
                    <a className="btn btn-primary">Go somewhere</a>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
