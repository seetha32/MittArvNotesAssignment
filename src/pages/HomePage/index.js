import { Component } from "react";

import './index.css'

class HomePage extends Component{
    state={
        searchTerm:"",
        notes: [],
    }
    
    handleChange = event =>{
        this.setState({
            searchTerm: event.target.value,
            notes: this.getNote,
        });
    }

    render(){
        const {searchTerm} =this.state
        return(
            <div>
                <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={this.handleChange}
              />
            </div>
            </div>
        )
    }
}

export default HomePage;