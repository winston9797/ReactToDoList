import React from 'react';
import './App.css';
import AddToDo from './components/AddToDo/AddToDo';
import ToDo from './components/ToDo/ToDo'

export default class App extends React.Component{
  constructor(props) {
      super(props)

      this.state = {
          value : '',
          items:[]
      }
  }
 
  handleChange = e =>{
      this.setState({
          value : e.target.value
      })
  }
  handleSubmit = e =>{
    e.preventDefault();
    if(this.state.value  === ''){
      return 0
    }
    let items = this.state.items
    let newItem =  this.state.value
    items.push(newItem)
    this.setState({
      items : items,
      value : ''
    })
  }
  clearList = ()=>{
    this.setState({
      items : []
    })
  }
  removeItem = (i)=>{
    let items = this.state.items
    items.splice(i,1)
    this.setState({
      items
    })
    console.log('removed' + i)
  }
  render(){
    return (
      <div className="App">
        <AddToDo value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
        <div>
        {this.state.items.map((item,i) =>(<ToDo removeItem={()=> this.removeItem(i)} key={i} text={item} />))}
        </div>
        <button className='clearButton' onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}


