import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isChecked : false
        }
    }
    handleChange = e =>{
        this.setState({
            isChecked : e.target.checked
        })
    }
    render() {
        let className = this.state.isChecked ? 'checked' : ''
        return (
            <li>
                    <input checked={this.state.isChecked} type="checkbox" onChange={this.handleChange}/>
                    <span className={className} >{this.props.text}</span>
                    <button className='removeBtn' onClick={this.props.removeItem}>X</button>
            </li>
        )
    }
}
