import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './counter';
import './style.css';

class Start extends Component{
  render(){
    return(
      <div>
        <div className='main'>
          <Counter/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Start/>,document.getElementById('root'));

