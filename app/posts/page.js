import getAllPost from "@/lib/getAllPost"
import Link from "next/link";

export default async function post(){
  

    const postsPromise =  await getAllPost();
    

    
    return(
        <div>
            {
                postsPromise.map((post) => (
                    <div key={post.id} className="max-w-5xl mx-auto text-left py-2 text-blue-700 text-2xl">
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                       
                    </div>
                ))
            }
            
        </div>
    )
}