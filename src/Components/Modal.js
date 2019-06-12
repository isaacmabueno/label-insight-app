import React, { Component } from 'react';
import axios from 'axios';
import NewNote from './NewNote';

class Modal extends Component {
    state = {
        loadedThumbData: null
    }

    componentDidUpdate () {
        if (this.props.id) {   
            //check to make sure it's not getting overloaded
            if (!this.state.loadedThumbData || (this.state.loadedThumbData && this.state.loadedThumbData.id !== this.props.id)) {
                axios.get('http://jsonplaceholder.typicode.com/photos/' + this.props.id )
            .then(response => {
                this.setState({loadedThumbData: response.data});
            })
            }
            
        }
    }
    render() {
        let modal = <p className='ModalTitle'>Please Select A Thumbnail. Modal will populate here!</p>;
        // checks for the validity of the id first
        if (this.props.id) {
            modal = <p>Loading....</p>
        }
        if (this.state.loadedThumbData) {
            modal = (
                <div className='ModalContainer'>
                <span>SELECTED</span><br />
                    <img alt={this.state.loadedThumbData.title} src={this.state.loadedThumbData.url} />
                    <p>{this.state.loadedThumbData.title}</p>
                    <p>{this.state.note}</p>
                    <NewNote />
                </div>
            )
        }
        return modal;
    }
}

export default Modal;