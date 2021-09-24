import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
      imageUrl : 'https://picsum.photos/200',
    };
    handleIncrement =() => {
        
        this.setState({count : this.state.count + 1})
    };
    handleDecrease =() => {
        
        this.setState({count : this.state.count - 1})
    };
    styles = {
        fontWeight : "bold",
        fontSize : 50,

    };
    render() { 
        return(
         <div>   
             <img src= {this.state.imageUrl} alt='' />
        <h1 style = {{ fontStyle : 'italic'}}>Hello world</h1>
        <span style = {this.styles} className = "badge badge-primary m-2">{this.formatCount()}</span>
        <button
        onClick = {this.handleIncrement}
        style = {this.styles} className='btn btn-secondary btn-sm'>Increment</button>
        <button
        onClick = {this.handleDecrease}
        style = {this.styles} className='btn btn-secondary btn-sm'>decrease</button>
        </div>  
            
            
            
            
            );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;