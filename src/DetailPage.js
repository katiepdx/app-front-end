import React, { Component } from 'react';
import { fetchOneDog, deleteDogTile, updateDogTile, fetchDogSizes } from './dogs-api.js';

export default class DetailPage extends Component {
    // set one 
    state = {
        dog: {},
        name: 'Clifford',
        age_years: 1,
        is_adopted: false,
        size_id: 1,
        sizes: []
    }

    // when component mounts, get dogs and dog sizes 
    componentDidMount = async () => {
        const data = await fetchOneDog(this.props.match.params.id)
        // get dog sizes 
        const dogSizes = await fetchDogSizes();
        console.log('DOG SIZES', dogSizes)

        // set the fields to auto populate with selected items details
        this.setState({
            dog: data.body,
            name: data.body.name,
            age_years: data.body.age_years,
            is_adopted: data.body.is_adopted,
            sizes: dogSizes.body, 
            size_id: dogSizes.body.size_id
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // get the tile info and pass them through update function
            await updateDogTile(
                this.props.match.params.id,
                {
                    name: this.state.name,
                    age_years: this.state.age_years,
                    is_adopted: this.state.is_adopted,
                    size: this.state.size,
                    size_id: this.state.size_id
                }
            );
            
            // get the updated dog info from database 
            const updatedDog = await fetchOneDog(this.props.match.params.id)

            // set state to specific pups details
            this.setState({
                dog: updatedDog.body,
                name: updatedDog.body.name,
                age_years: updatedDog.body.age_years,
                is_adopted: updatedDog.body.is_adopted,
                size: updatedDog.body.size
            });
        } catch(e) {
            console.log('ERROR with handleSubmit', e.message); 
        }
    }

    // handleNameChange
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    
    // handleAgeChange
    handleAgeChange = (e) => {
        this.setState({ age_years: e.target.value })
    }

    // handleSizeChange
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value })
        console.log('HandleSizeChange', e.target.value)
    }

    // handleHomeChange
    handleHomeChange = () => {
        this.setState({ is_adopted: true })
    }

    handleDeleteChange = async () => {
        await deleteDogTile(this.props.match.params.id);

        this.props.history.push('/')
        
    }
    render() {
        console.log('DOG', this.state.dog)
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

                {/* update form */}
                <form className="add-form-container" onSubmit={this.handleSubmit}>
                    <div className="add-form">
                        {/* name */}
                        <label>
                            Name:
                            <input onChange={this.handleNameChange} type="text" value={this.state.name} />
                        </label>

                        {/* age */}
                        <label>
                            Age:
                            <input onChange={this.handleAgeChange} type="number" value={this.state.age_years} />
                        </label>

                        {/* dog size dropdown selection */}
                        <label>
                            Size:
                            <select onChange={this.handleSizeChange} value={this.state.size} >
                                {
                                    this.state.sizes.map(size => <option value={size.id} key={size.id}>{size.size}</option>)
                                }
                            </select>
                        </label>

                        {/* is_adopted/has a forever home - boolean */}
                        <label>
                            Has Forever Home:
                            <input onChange={this.handleHomeChange} type="checkbox" name="home" value="true" />

                        </label>

                        <button>Update</button>
                    </div>
                </form>

                {/* Delete button */}
                <button onClick={this.handleDeleteChange}>Delete</button>
            </div>
        )
    }
}
