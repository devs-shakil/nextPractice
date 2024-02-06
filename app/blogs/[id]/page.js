import getAllPostComments from "@/lib/getPostComments";

export default async function Blogpage({params}){
    const {id} = params;
    const postPromise =  getPost(id);
    const commentsPromise =  getAllPostComments(id);

    const [post, comments] = await Promise.all([postPromise, commentsPromise])
    return(
        <div className="max-w-lg mx-auto text-center text-blue-100">
            <h2 className="">this is blog {id}</h2>
        </div>
    )

}