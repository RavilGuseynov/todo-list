import React from 'react';
import TodoItem from '../todo-item';
import './todo-list.css'

const TodoList = ( props ) => {
        
    const removeItem = (id) => {
        props.deleteItem(id)
    }

    const toggleItemProp = (id, prop) => {
        props.toggleItemProp(id, prop);
    }

    let items = props.todos
        .filter((item) => {
            return item.show
        })
        .map( (item) => {
            return (
                <div key={item.id}>
                    <TodoItem 
                        item={item} 
                        removeItem={removeItem}
                        toggleItemProp={toggleItemProp}
                    />
                </div>
            )
    })

    if (items.length === 0) {
        items = <div className='no-todos-text'>No todos found</div>
    }

    return (
        <div className='todo-list'>
            {items}
        </div>
    )
}

export default TodoList;