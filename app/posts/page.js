import getAllPost from "@/lib/getAllPost"
import Link from "next/link";

export default async function post(){
    const posts = await getAllPost();
   
    
    return(
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                       
                    </div>
                ))
            }
            
        </div>
    )
}