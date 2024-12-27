
import Counter from "./Components/Client/Counter";
import CounterTwo from "./Components/Client/CounterTwo";
import { getPost, Post } from "../apis/apis";
import { PostCard } from "./Components/Client/PostCard";

export default async function Home() {
  const postList = await getPost('force-dynamic')

  return (
   <>   
    <h2>Home page</h2>
    <Counter/>
    <CounterTwo/>
    <div className="flex flex-wrap ">
      {
        postList?.posts?.map((post: Post) => (
          <PostCard key={post.id} postId={post.id}>
            <h2 className="text-2xl py-2">{post.title}</h2>
            <p>{post.body}</p>
          </PostCard>
        ))
        
      }
    </div>
    
   </>
  );
}
