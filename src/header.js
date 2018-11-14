import React from 'react';
import logo from './card-back.jpg';
import logo1 from './master.PNG';
import logo2 from './puce.png';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
console.log(logo);


const Hello = () => {
    return <div className="container">
   
      <div className="credit-card">
     
      <div> <p className="credit">CREDIT CARD</p> </div>
      <Puce />
      <div className="number-section"> <p  className="number"><span>7854</span><span>1234</span><span> 1235 </span><span>2547</span></p></div>
     <div className="info">
     <div className="info1">
       <p className="card-holder">5422</p>
      <p className="name">Firas Hamdouni</p> 
      </div>
      <div className="validation">
        <div className="haut"><Next /></div>
        <div className="bas">
        <p className="my">MONTH/YEAR</p>
        <div className="dh"><p className="nm">11/50</p></div>
        <div className="db"></div>
        </div>
      </div>
          <Card />
      </div>
    </div>
    </div>
            

  }

  const Master =()  => {
    // Import result is the URL of your image
    return <img src={logo} className="logo" alt="Logo" />;
  }
  const Card =()  => {
    // Import result is the URL of your image
    return <img src={logo1} className="logo1" alt="Logo1" />;
  }
  const Puce =()  => {
    // Import result is the URL of your image
    return <img src={logo2} className="logo2" alt="Logo2" />;
  }
  const pStyle = {
    height:'30px',
    width:'30px',
    color:"white",
    marginTop:'-15%',
  }
  const text = {
      fontSize: '15px',
      fontWeight: '100',
      marginleft: '25%',
      marginTop:'-25%',
      color: 'white',
      fontFamily: 'Franklin Gothic Medium', 
  }
   const Next = () => (
  <div className="zone">
          <p className="text" style={text}>VALID <br/> THRU</p>
          <FontAwesomeIcon icon="caret-right" style={pStyle} />
          </div>
    
  )
  
  export default Hello;