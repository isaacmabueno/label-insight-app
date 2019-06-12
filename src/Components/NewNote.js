import React, { Component } from 'react';
import axios from 'axios';


class NewNote extends Component {
    state = {
        note: ''
    }

    postDataHandler = () => {
        const data = {
            note: this.state.note,
        };
        axios.post('https://jsonplaceholder.typicode.com/photos', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="NewPost">
                <label>Note:</label><br />
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({note: event.target.value})} /><br />
                <button onClick={this.postDataHandler}>Add Note</button>
            </div>
        );
    }
}

export default NewNote;