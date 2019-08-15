import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import './add-item.css';

export default class AddItem extends Component {

    state = {
        text: ''
    }

    onChangeHandler = (text) => {
        const newText = {...this.state};
        newText.text = text;
        this.setState( { text: newText.text } );        
    }

    createItem = (text) => {
        return {
            id: uuidv4(),
            text,
            done: false,
            important: false,
            show: true
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            alert('Input todo text')
        }
        else {
            this.props.addItem(this.createItem(this.state.text));
            this.setState( { text: '' } );
        }
    }

    render() {
        return (
            <form 
                className='add-item'
                onSubmit={this.onSubmit}
            >
                <input 
                    type='text' 
                    className='input-area' 
                    placeholder='Add new todo' 
                    onChange={ (e) => { this.onChangeHandler(e.target.value) }}
                    value={this.state.text}
                />
                <button className='add-btn'>Add</button>
            </form>
        )

    }

}