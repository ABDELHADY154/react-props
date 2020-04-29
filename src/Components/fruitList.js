import React, { Fragment,Component } from 'react';
// import './FruitsListButton';
// import {listButton} from "./FruitsListButton";
// import ReactDOM from 'react-dom';
// import {list} from "./FruitsListButton";



export class FruitList extends Component{
  
  render(){
    return(
    <Fragment>
            <h3 className="title">
                View Fruits List
            </h3>
    
    
                  <button id="viewFruits">Click To View </button>
     
    
    </Fragment>
    );
  }
}


