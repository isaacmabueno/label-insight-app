import React, { Component } from 'react';
import axios from 'axios';

class ThumbnailData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnails: []
        };
    }
    componentDidMount() {
        let dataPath = "https://jsonplaceholder.typicode.com/photos";
        axios.get(dataPath)
            .then( response => {
                const thumbnails = response.data.slice(0,25);
                this.setState({ thumbnails });
            })
            .catch( err => {
                let response = err.response;
                alert("Error loading data: " + response.status + " " +
                    response.statusText + ": " + response.config.url);
            });
    }
    render() {
        return (
            <ul>
                {this.state.thumbnails.map(thumbnail => 
                    <li key={thumbnail.id}><img src={thumbnail.url} alt={thumbnail.title}/></li>
                )}
            </ul>

        );
    }
}

export default ThumbnailData;