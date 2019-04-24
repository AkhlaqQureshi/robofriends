import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';
import { robots } from './robots.js'
import Scroll from './Scroll.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ robots: robots}));
    }

    onSearchChange = (event) => {  //This isn't a built in react function like render, we have to use arrows here.
        this.setState({ searchField: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            })
        return (
        <div className="tc">
            <h1 className="f2">Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
    }
}

export default App;