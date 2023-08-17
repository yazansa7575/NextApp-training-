import Link from "next/link";
import ContainerPost from "../component/ContainerPost";
import { Suspense } from "react";

const PostsPage = () => {

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "30px 0" }}>Posts Page</h1>
            <Link href={"./"} style={{ textAlign: "center", margin: "30px auto", display: "block", width: "max-content" }}>
                GO TO HOME PAGE --&gt;
            </Link>
            <Suspense >
                <div className="posts m-5">
                    <ContainerPost />
                </div>
            </Suspense>

        </>
    );
};

export default PostsPage;
