// list of pups here

import React from 'react';
import { fetchDogsData } from './dogs-api.js';
import Header from './Header.js';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {
    // set state of dogs 
    state = {
      dogs: []
    }
  
    // add an async component did mount to fetch the data from the dogs api
    // set state of dogs array using the response from the api
    componentDidMount = async () => {
      const data = await fetchDogsData()
  
      // set state of dogs to data
      this.setState({
        dogs: data.body
      })
    }
  
    // render everything data to the page 
    render() {
    console.log(this.state.dogs);
      return (
        <div className="App">
          <Header/>
          <section className="dog-tiles">
            <div className="tiles-container">
              {/* make JS portal to map through dogs array and render to page */}
              {
                this.state.dogs.map((dog) => {
                    // wrap all in Links - take user to dog detail page
                  return (<Link to={`/detail/${dog.id}`} key={`${dog.id}${dog.name}${dog.age_years}`}>
                      <div className="one-dog-tile">
                        <div>Name : {dog.name}</div>
                        <div>Id : {dog.id}</div>
                        <div>Age : {dog.age_years}</div>
                        <div>Size : {dog.size}</div>
                        <div>Has Forever Home : {dog.is_adopted ? 'Yes' : 'No'} </div>
                      </div>
                </Link>  )
                })
              }
            </div>
          </section>
        </div>
      );
    }
  
  }
  
  export default ListPage;
  