import React, { Fragment,Component } from 'react';
import { FruitList } from './fruitList';
// import ReactDOM from 'react-dom';

export class App extends Component{
  render(){
    return(
    <Fragment>
      <FruitList/>
    </Fragment>);
  }
}
