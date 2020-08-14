// pup details go here

import React, { Component } from 'react';
import { fetchOneDog } from './dogs-api.js';

export default class DetailPage extends Component {
    // set one dog state to an empty object 
    state = {
        dog: {}
    }

    // when component mounts, get one dog info using id
    componentDidMount = async () => {
        const data = await fetchOneDog(this.props.match.params.id)

        // get the first obj in the array and set it to the dog state
        this.setState({
            dog: data.body
        })
    }
    
    render() {
        console.log(this.state.dog)
        return (
            <div>
                This is {this.state.dog.name}.
            </div>
        )
    }
}
