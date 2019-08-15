import React, {Component} from 'react';
import './filter.css';

export default class Filter extends Component {

    state = {
        all: ' selected',
        active: ' not-selected',
        done: ' not-selected'
    }

    onBtnClick = (btn) => {
        this.setState(
            {
                all: ' not-selected',
                active: ' not-selected',
                done: ' not-selected'
            },
            () => {
                this.setState({ [btn]: ' selected' })
            }
        )
        this.props.setFilter(btn);
    }
    
    render() {

        return (
            <div className='filter-btns'>
                <button className={'filter-btn all-btn' + this.state.all} onClick={() => {this.onBtnClick('all')}}>All</button>
                <button className={'filter-btn active-btn' + this.state.active} onClick={() => {this.onBtnClick('active')}}>Active</button>
                <button className={'filter-btn done-btn' + this.state.done} onClick={() => {this.onBtnClick('done')}}>Done</button>
            </div>
        )
    }

}

