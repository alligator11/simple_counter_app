import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export class Counter extends Component{
    constructor(){
        super();
        this.state={
            startValue:0
        }
    }
    inc(){
        this.setState({startValue:this.state.startValue+1});
    }
    dec(){
        if(this.state.startValue>0)
        {
            this.setState({startValue:this.state.startValue-1});
        }
        else{
            alert('Nothing below zero!');
        }
    }
    render(){
      return(
        <div className='count'>
            <h1>{this.state.startValue}</h1>
            <button onClick={()=>this.inc()}>+</button>
            <button onClick={()=>this.dec()}>-</button>
        </div>
      );
    }
  }
