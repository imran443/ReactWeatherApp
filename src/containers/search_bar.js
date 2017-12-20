import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''}
        // Bind the searchBar's onInputChange "this" to the instance of the class instead.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value});
    }
    
    onFormSubmit(event){
        event.preventDefault();
        
        // Se need to go and fetch weather data.
        // THIS IS AN ACTION
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            // Want the form to not submit.
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a 5 day forecast"
                    className="form-control"
                    value= { this.state.term }
                    onChange= { this.onInputChange }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchWeather }, dispatch);
}
// SETUP TO FLOW DOWN TO MIDDLEWARE AND THEN REDUCERS.
export default connect(null, mapDispatchToProps)(SearchBar);