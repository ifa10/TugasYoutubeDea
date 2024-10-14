'use client';
import styles from "./postPage.module.css";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";
import { cache } from "react";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts = async () => {
    // Fetch data from the API
    const response = await fetch(base_url, {
        next: {revalidate: 3600}
    }
    );
    const posts: Iposts[] = await response.json(); // Renamed 'post' to 'posts'

    return (
        <>
        <p>{new Date(). toLocaleTimeString()}</p>
            <h1 className={"text-fuchsia-500"}>POSTINGAN PAGE</h1>
            {posts.map((post) => (
                <CardList key={post.id}> {/* Added 'key' prop */}
                    <p>{post.id}</p>
                    <i>{post.title}</i>
                    <p>{post.body}</p>
                    <ViewUserButton userId={post.userId}/>
                </CardList>
            ))}
        </>
    );
};

export default Posts;
