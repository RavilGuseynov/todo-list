import React from 'react';
import './list-header.css';

const ListHeader = ({todos}) => {

    let leftCount = 0;
    let doneCount = 0;
    todos.forEach((item) => {
        if (item.done) {
            doneCount++;
        }
        leftCount = todos.length - doneCount;
    })


    return (
        <div className='list-header'>
            <h2 className='list-header-text'>
                Todo list
            </h2>
            <div className='list-header-hint'>
                {doneCount} done, {leftCount} left
            </div>
        </div>
    )

}

export default ListHeader;