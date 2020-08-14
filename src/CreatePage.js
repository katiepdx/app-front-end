// add an entry page here

import React, { Component } from 'react'
import { createDogTile } from './dogs-api.js';

export default class CreatePage extends Component {
    // set state 
    state = {
        name: 'Clifford',
        age_years: 1,
        size: 'small',
        is_adopted: false
    }
    
    // handle functions go here
    // handleSubmit for + form button
    // create dog tile when submit clicked
    handleSubmit = async (e) => {
        e.preventDefault();

        // await and get the data from the form 
        await createDogTile({
            name: this.state.name,
            age_years: this.state.age_years,
            size: this.state.size,
            is_adopted: this.state.is_adopted
        });

        // set state back to default values
        this.setState({
            name: 'Clifford',
            age_years: 1,
            size: 'small',
            is_adopted: true
        });
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
                                <option value="x-small">x-small</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                                <option value="x-large">x-large</option>
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
