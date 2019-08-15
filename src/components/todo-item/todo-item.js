import React from 'react';
import './todo-item.css';

const TodoItem = ( props ) => {
    const deleteItem = () => {
        props.removeItem(props.item.id)       
    }

    const markItemAsImportant = () => {
        props.toggleItemProp(props.item.id, 'important')
    }

    const markItemAsDone = () => {
        props.toggleItemProp(props.item.id, 'done');
    }

    const getClassName = (baseClass) => {
        let classNames = baseClass;
        if (props.item.done) {
            classNames += ' done';
        }
        if (props.item.important) {
            classNames += ' important'
        }
        return classNames
    }

    return (
        <div 
            className={getClassName('todo-item')}
        >
            <div
                className={getClassName('todo-item-text' )}
                onClick={markItemAsDone}
            >
                {props.item.text}
            </div>            
            <button 
                className='btn important-btn'
                onClick={markItemAsImportant}
            >
                !
            </button>
            <button 
                className='btn delete-btn'
                onClick={deleteItem}
            >
                X
            </button>
        </div>
    )
}

export default TodoItem;