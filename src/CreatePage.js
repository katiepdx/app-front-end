// add an entry page here

import React, { Component } from 'react'
import { createDogTile, fetchDogSizes } from './dogs-api.js';

export default class CreatePage extends Component {
    // set state 
    state = {
        name: 'Clifford',
        age_years: 1,
        is_adopted: false,
        size_id: 1,
        sizes: []
    }

    // on page load, fetchDogSizes 
    componentDidMount = async () => {
        // get dog sizes 
        const dogSizes = await fetchDogSizes();

        // set the dog sizes to state as sizes 
        this.setState({ 
            sizes: dogSizes.body
         })
        
         console.log(dogSizes);

    }
    
    // handle functions go here
    // handleSubmit for + form button
    // create dog tile when submit clicked
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // await and get the data from the form 
            await createDogTile({
                name: this.state.name,
                age_years: this.state.age_years,
                is_adopted: this.state.is_adopted,
                size_id: this.state.size_id,
                size: this.state.size
            });

            // set state back to default values
            this.setState({
                name: 'Clifford',
                age_years: 1,
                is_adopted: true,
                size_id: 1,
                size: 'x-small'
            });

            this.props.history.push('/');

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
    }

    // handleHomeChange
    handleHomeChange = () => {
        this.setState({ is_adopted: true })
    }

    render() {
        return (
            <div>
                <h1>ADD</h1>
                {/* form goes here with an onSubmit */}
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

                        <button>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
