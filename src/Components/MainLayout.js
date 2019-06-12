import React, { Component } from 'react';
import axios from 'axios';
import Thumb from './ThumbData';
import Modal from './Modal';

class ThumbnailData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnails: [],
        };
    }

    componentDidMount() {
        let dataUrl = "https://jsonplaceholder.typicode.com/photos";
        axios.get(dataUrl)
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

    thumbSelectedHandler = (id) => {
        this.setState({selectedThumbId: id})
    }

    render() {
        const thumbs = this.state.thumbnails.map(thumbnail => {
            return (
                
                <Thumb 
                key={thumbnail.id}
                title={thumbnail.title}
                url={thumbnail.url}
                clicked={() => this.thumbSelectedHandler(thumbnail.id)}
                />
            )
        })
        
        return (
            <div>
                <section>
                    <Modal id={this.state.selectedThumbId} />
                </section>
                <section>
                    {thumbs}
                </section>
            </div>
        );
    }
}

export default ThumbnailData;