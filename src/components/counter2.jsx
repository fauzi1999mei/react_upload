import React, { Component} from 'react';
class Counter2 extends Component{
    state ={
        count : 0,
        value: this.props.value,
    };
    handleIncrement = () => {this.setState({count : this.state.count + 1 })
};
handleDelete = () =>{
      this.setState({count: this.state.count -1})
};
handleBuy = () => {
    this.setState({count : console.log("Buy")})
};






    render (){
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';

        return(
            <div>
                <span
                className = {classes}
                >{this.formatCount()}</span>
                <button
                onClick = {this.handleIncrement}
                 className='btn btn-secondary btn-sm'
                >increment</button>
                <button
                onClick = {this.props.onDelete}
                className = 'btn btn-danger btn-sm'
                >DELETE</button>
                <button
                onClick ={this.handleBuy}
                className = "badge badge-primary m-2 -m"
                >BUY</button>
            </div>
        )

            

            
        
    };
    formatCount(){
        const { count } =this.state;
        return count === 0 ? 'zero' : count;
    }
}
export default Counter2;