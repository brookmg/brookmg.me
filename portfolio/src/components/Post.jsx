import React, {Component} from 'react'

class Post extends Component {

    constructor(probs) {
        super(probs);
        let match = probs.match;

        this.state = {
            postId: match.params.postId
        }
    }

    render() {
        return (
            <div>
                <i> Showing post content ... Coming Soon </i>
                <h1> {this.state.postId} </h1>
            </div>
        );
    }

}

export default Post;