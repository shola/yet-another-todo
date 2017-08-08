import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


// create and delete

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      id: props.id,
      completed: props.completed
    }
    debugger;
  }
  deleteTodo() {

  }
  updateText(evt) {
    debugger;
    const newText = evt.target.value;
    this.setState((prevState) => {
      debugger;
      return  {
        text: newText,
        id: prevState.id,
        completed: prevState.completed
      };
    });
  }
  render() {
    // debugger;
    // return <span>{this.state.text} {this.state.id} {this.state.completedc}</span>;
    return (<div>
      <input type="checkbox"/>
      <input type="text" value={this.state.text} onChange={this.updateText.bind(this)}/>
      <button onClick={this.deleteTodo.bind(this)}>Delete</button>
    </div>);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.currID = 0;
    this.state = {todos: []}
  }
  createTodo() {
    this.setState(prevState => {
      prevState.todos.push({id: this.currID++, text: '', completed: false})
      return prevState;
  })}
  render() {
    return (
    <div>
      <button onClick={this.createTodo.bind(this)}>Create Todo</button>
      {this.state.todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
      ))}
    </div>);
  }
}

export default App;
