// pup details go here

import React, { Component } from 'react';
import { fetchOneDog, deleteDogTile } from './dogs-api.js';

export default class DetailPage extends Component {
    // set one dog state to an empty object 
    state = {
        dog: {}
    }

    // when component mounts, get dogs and dog sizes 
    componentDidMount = async () => {
        const data = await fetchOneDog(this.props.match.params.id)

        this.setState({
            dog: data.body
        })
    }

    handleDeleteChange = async () => {
        await deleteDogTile(this.props.match.params.id);

        this.props.history.push('/')
        
    }
    render() {
        console.log(this.state.dog)
        return (
            <div>
                <h1>About {this.state.dog.name}</h1>
                <div className="detail-pup-tile">
                    <p className="details-about-pup">
                        <div>This {this.state.dog.name}.</div> 
                        <div>{this.state.dog.name} is {this.state.dog.age_years} year(s) old.</div> 
                        <div>{this.state.dog.name} is a {this.state.dog.size} sized pup.</div>
                    </p>
                </div>

                {/* Delete button */}
                <button onClick={this.handleDeleteChange}>Delete</button>
                

            </div>
        )
    }
}
