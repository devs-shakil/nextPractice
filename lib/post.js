export default async function post(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return result.json()

}