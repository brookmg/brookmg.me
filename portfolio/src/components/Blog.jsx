import React, {Component} from 'react'
import BlogItem from "./BlogItem";

class Blog extends Component {

    render() {
        return (
            <div className="hero">
                <div className="hero-body is-left">
                    <h1 className="has-text-white is-left is-size-1" style={{ fontFamily: `Consolas` }}>
                        <span style={{backgroundColor: `#0bA292`, align: `center`, padding: `8px`}}> Posts </span>
                    </h1>

                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="100" />
                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="101" />
                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="102" />
                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="103" />
                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="104" />
                    <BlogItem postTitle="Sample Post" postSize="2 mins" postWords="200 Words" postDateTime="Tuesday 20 Nov 2019" postPreview="Hello there dear readers, I am not much of a blogger myself but I suspect soon will be my fresh start" postId="105" />

                </div>
            </div>
        );
    }

}

export default Blog;