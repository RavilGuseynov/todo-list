import React, {Component} from 'react';
import './search-items.css';

export default class SearchItems extends Component {

    state = {
        label: ''
    }
    
    getTodosByPref = (pref) => {
        this.props.getItemsByPref(pref);
    }

    onChange = (e) => {
        this.setState({ label: e.target.value }, () => {
            this.getTodosByPref(this.state.label);
        });
    }

    render() {
        
        return (           
            <input 
                className='search-input'
                placeholder='Type to search'
                onChange={this.onChange}
                value={this.state.label}
            />            
        )
    }

}