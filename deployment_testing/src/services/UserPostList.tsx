import { usePosts } from "./userPost";

function UserPostList() {
    const {posts,loading,error} = usePosts();

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;
    
    return <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '20px auto',
    }}className="post-list">
        {posts.map((row,index)=>{
        return <div  key={row.id ?? index}>
             <span className="post-id">Post Id: {row.id}</span>
            <h3 className="post-title">{row.title}</h3>
        <p className="post-body">{row.body}</p>
       
        </div>
    })}</div>;
}
export default UserPostList;