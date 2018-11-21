import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import Hello from "./header";
import NameForm from "./forms";
import './App.css';


library.add(fas,fab)
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {value: '******',
                valid:'MM/YY',
              serial:'**** **** **** ****'};


}
handleChange=(event) =>{
  this.setState({value: event.target.value.toUpperCase()});
}

validlistener=(event) =>{
  let a = event.target.value;
  a=a.slice(0,2)+"/"+a.slice(2);
  if(a.slice(0,2)>12){
    alert("Month must be under 12");
    this.setState({valid:'MM/YY'});
  }
  else{
    this.setState({valid:a});
  }

}

validthruvalidation=(event) =>{
  let a = event.target.value;
  if (!Number(a)){
    this.setState({valid:'MM/YY'});
    alert('yu need to enter a valid date MM/YY');
  }
}


number=(event) =>{
  let a = event.target.value;
  a=a.slice(0,4)+' '+a.slice(4,8)+' '+a.slice(8,12)+' '+a.slice(12)
  this.setState({serial: a});
}


render(){
    return (
      <div className="App row d-flex">
      {/* <div className="col-lg-6">
        <Hello/></div> */}
        <div className="container-fluid col-lg-6">
             < Hello  value={this.state.value} valid={this.state.valid}/></div>
       <div className="container-fluid col-lg-6 mt-5"><NameForm value={this.state.value} valid={this.state.valid} serial={this.state.serial}
                  handleChange={this.handleChange} validlistener={this.validlistener} validthruvalidation={this.validthruvalidation} number={this.number}/></div> 
   
      </div>
 
    );
  }
}





export default App;
