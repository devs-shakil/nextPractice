export type CacheType = 'force-dynamic' | 'force-cache' | 'no-store';

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type PostList = {
    posts: Post[];
};
export async function getPost(cacheType?: CacheType): Promise<PostList | null>{
    let fetchOption = {};
    if (cacheType === 'force-dynamic') {
        fetchOption = { cache: 'no-store' };
    }
    try {
        const res = await fetch('https://dummyjson.com/posts', fetchOption);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return null; 
    }
}
