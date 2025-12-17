import React from "react";
import { getAllPosts } from "./postService";
import type { Post } from "../api/Post";

function usePosts() {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
       (async () => {
            try {
                const response = await getAllPosts();
                setPosts(response);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { posts, loading, error };
}

export { usePosts };