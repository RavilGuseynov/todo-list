import React, {Component} from 'react';
import ListHeader from '../list-header';
import TodoList from '../todo-list';
import AddItem from '../add-item';
import SearchItems from '../search-items';
import Filter from '../filter';

import './app.css';


export default class App extends Component {

  state = {
    todos: [
      { 
        id: 'asdf16a1f6as1df6as51f61sad1af6',
        text: 'drink coffee',
        done: false,
        important: false,
        show: true
      },
      { 
        id: 'sdf6s156f1s6fdwd',
        text: 'Learn React',
        done: false,
        important: false,
        show: true
      }
    ],
    filter: 'all' // active, done
  }

  addItem = (item) => {
    const todos = [...this.state.todos, item];
    this.setState( { todos } );
  }

  deleteItem = (id) => {
    let todos = [...this.state.todos];
    todos = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState( { todos } );
  }

  toggleItemProp = (id, prop) => {
    const { todos } = {...this.state};
    todos.forEach((item) => {
      if (item.id === id) {
        item[prop] = !item[prop]
      }
    })
    this.setState({ todos });
  }

  getItemsByPref = (pref) => {
    let { todos } = {...this.state};
    todos.forEach((item) => {
      if (item.text.toLowerCase().indexOf(pref.toLowerCase()) === -1) {
        item.show = false;        
      }
      else {
        item.show = true;
      }
    });
    this.setState( { todos } );
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  filterItems = () => {
    const { todos, filter } = {...this.state};
    switch(filter) {
      case 'all':
        return todos.filter((item) => {return item});
      case 'active':
        return todos.filter((item) => {return !item.done});
      case 'done':
        return todos.filter((item) => {return item.done});
      default:
        return todos
    }
  }

  render() {

    return (
      <div>
        <ListHeader todos={this.state.todos}/>
        <div className='search-filter-bar'>
          <SearchItems 
            todos={this.state.todos}
            getItemsByPref={this.getItemsByPref}  
          />
          <Filter setFilter={this.setFilter}/>
        </div>
        <TodoList 
          todos={this.filterItems()} 
          deleteItem={this.deleteItem}
          toggleItemProp={this.toggleItemProp}
        />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}