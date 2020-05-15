import React, { Component } from 'react'

export default class AddToDo extends Component {

    render() {
        return (
            <div className='.addtodo'>
                <div className="header">
                    <h1>Add to do </h1>
                    <p>Lorem ipsum dolor sit amet consectetur .</p>
                </div>
                <form onSubmit={this.props.handleSubmit} >
                    <input type="text" value={this.props.value} onChange={this.props.handleChange}/>
                    <button className='submitButton'>Add</button>
                </form>
            </div>
        )
    }
}
