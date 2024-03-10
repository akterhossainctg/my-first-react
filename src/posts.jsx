import { useEffect, useState } from "react"
import Post from "./post"
import './posts.css'

export default function Posts(){

    const [posts,setPosts] =useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="box"> 
            <h2> Posts :{posts.length}</h2>
            {
                posts.map(post=><Post post={post}></Post>)
            }

        </div>
    )
}

/*
1- first e amake ekta component create korte hobe
2- tarpor seta main component er sate add korte hobe
3- tarpor usestate set korte hobe
4- tarpor useEfect create kore sekhane Api gulo useState e set korte hobe
5- tarpor new component ta ager component e import korte hobe
6- tarpor 2tar sate connect kore map diye loop throw korte hobe
7- plural api k single element e vag korte hobe
8- ar seta second component a bosate hobe
*/