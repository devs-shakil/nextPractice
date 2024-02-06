import getAllPostComments from "@/lib/getPostComments";
import post from '@/lib/post'

export default async function postPage({params}){
    const {id} = params;
    const singlePost = post(id)
    const commentsPromise = getAllPostComments(id);
    const [postData, comments] = await Promise.all([singlePost, commentsPromise])
    console.log(comments)
    return(
        <div className="max-w-xl mx-auto text-base">
            <h2 className="text-2xl text-green-700">
                {postData.title}
            </h2>
            <p className="py-5">{postData.body}</p>
            <div className="mt-5 border-t-2 border-gray-700">
                {comments.map((comment) => (
                    <div className="flex flex-col gap-3" key={comment.id}>
                        <h2>Name: {comment.name}</h2>
                        <h3>Email: {comment.email}</h3>
                        <p>Comment: {comment.body}</p>
                    </div>
                ))
                    
                }
            </div>
        </div>
    )
}