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
        show: true,
        filter: false
      },
      { 
        id: 'sdf6s156f1s6fdwd',
        text: 'drink one more coffee',
        done: false,
        important: false,
        show: true,
        filter: false
      }
    ]
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
      if (item.text.indexOf(pref) === -1) {
        item.show = false;        
      }
      else {
        item.show = true;
      }
    });
    this.setState( { todos } );
  }

  filterList = (btn) => {
    const { todos } = {...this.state};
    switch (btn) {
      case 'all':
        todos.forEach((item) => {
          item.filter = false;
        })
        break
      case 'active':
        todos.forEach((item) => {
          if (item.done === false) {
            item.filter = false;
          }
          else {
            item.filter = true;
          }
        })
        break
      case 'done':
        todos.forEach((item) => {
          if (item.done === true) {
            item.filter = false;
          }
          else {
            item.filter = true;
          }
        })
        break
      default: alert('something went wrong...(')
    }
    this.setState({ todos })
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
          <Filter filterList={this.filterList}/>
        </div>
        <TodoList 
          todos={this.state.todos} 
          deleteItem={this.deleteItem}
          toggleItemProp={this.toggleItemProp}
        />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}