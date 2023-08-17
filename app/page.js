import Link from "next/link";


export default function Home() {

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>Home Page</h1>
      <Link href={"./postsPage"} style={{ textAlign: "center", margin: "30px auto", display: "block", width: "max-content" }}>
        GO TO POST PAGE --&gt;
      </Link>
    </>
  )
}
