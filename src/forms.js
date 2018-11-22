import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './forms.css';

class NameForm extends Component{
render(){
 
  return (
        <form className="container col-lg-6 form" >
        <div className=" form-group">
          <label htmlFor="cardholder">Card Holder</label>
          <input type="text" className="form-control" id="cardholder"  value={this.props.value}onChange={this.props.handleChange}  placeholder="Enter a card Holder" maxLength="20"/>
        </div>
        <div className="form-group">
          <label htmlFor="thruvalid">Valid Thru</label>
          <input type="text" className="form-control" id="thruvalid"  onChange={this.props.validlistener} onBlur={this.props.validthruvalidation}  placeholder="Enter a valid thru **/**" maxLength="4"/>
        </div>
        <div className="form-group">
          <label htmlFor="number">Serial Number</label>
          <input type="text" className="form-control" id="number" onChange={this.props.number}  placeholder="**** **** **** ****" maxLength="16"/>
        </div>
      </form>
);
    }
  }
  
        export default NameForm;
