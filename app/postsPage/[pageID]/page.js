import Link from "next/link";

const pageID = async ({ params }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.pageID}`
        , {
            cache: "no-store"
        })
    const post = await response.json();
    if (!response.ok) {
        console.error("Failed to fetch data");
    }
    return (
        <div className="p-2 my-2 w-75 bg-white shadow-sm border rounded m-auto">
            <Link href={"/postsPage"}>back</Link>
            <div className=" d-flex align-items-center justify-content-center ">
                <img src="https://source.unsplash.com/180x180?person" className="border  shadow-sm rounded-circle d-flex align-items-start justify-content-center " />
            </div>
            <h1>title is:{post.title}</h1>
            <h4>body is:{post.body}</h4>
            <sub className="  d-flex justify-content-end text-primary w-100 p-3 d-block" >user ID:{post.id}</sub>
        </div>
    )
}

export default pageID