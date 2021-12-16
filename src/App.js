import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Section from './component/Section';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       weather: null,
       latitude: '',
       longitude: ''
    }
  }

  weatherReport(){
    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/alerts?lat=${this.state.latitude}&lon=${this.state.longitude}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "177dbbb2bdmsh5ff5c0ee8419572p12e352jsna452690205cb",
		    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(users => this.setState({weather: users}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="input">
          <input  placeholder="Latitude" value={this.state.latitude} onChange={e=> this.setState({latitude: e.target.value})}  /> 
          <input  placeholder="Longitude" value={this.state.longitude  } onChange={event=> this.setState({longitude: event.target.value}) }/> 
        </div>
        <button className="button" onClick={() => {this.weatherReport()}} >Submit</button>
        {console.log(this.state.weather)}
        {(this.state.weather)?<Section weather={this.state.weather} />: null}
      </div>
    )
  }
}

export default App

