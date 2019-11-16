import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class BlogItem extends Component {

    constructor(probs) {
        super(probs);
        this.state = {
            postTitle: probs.postTitle,
            postDateTime: probs.postDateTime,
            postSize: probs.postSize,
            postWords: probs.postWords,
            postPreview: probs.postPreview,
            postId: 100
        };
    }

    render() {
        return (
            <div className=" is-left" style={{ textAlign: `left`, padding: `2%` }}>
                <Link to={"post/" + this.state.postId } style={{ textDecoration: `none`, color: `black` }}>
                    <h1 className="is-size-4">
                        <b><u> { this.state.postTitle } </u></b>
                    </h1>
                </Link>
                <h3> { this.state.postDateTime } ♦ { this.state.postSize } ♦ { this.state.postWords } </h3>
                <p> { this.state.postPreview } </p>
            </div>
        );
    }

}

export default BlogItem