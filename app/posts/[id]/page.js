import post from "@/lib/post";

export default async function postPage({params}){
    const {id} = params;
    const singlePost = await post(id)
    return(
        <div>
            <h2>
                {singlePost.title}
            </h2>
            <p>{singlePost.body}</p>
        </div>
    )
}