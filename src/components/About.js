import React from 'react';
import visionmission from "./visionmission.jpg"
import 'I:/1WebD/upidetect/src/index.css';
import 'I:/1WebD/upidetect/src/components/about.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function About(props) {
  let myStyle ={
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'#042743':'white',
    marginLeft: '1cm',
    marginRight: '1cm',
    marginTop: '1cm',
    marginBottom: '1cm'}
    
    let myStyle1 = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white',
        marginTop: '1cm',
        marginBottom: '2cm'}

    let myStyle2 = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%'}
    
  return (
    <>
      <div style={myStyle}>
      UPI frauds are becoming increasingly common in India due to the rise of digital transactions. There were over 95,000 cases of UPI fraud reported in the 2022-23 financial year, according to finance ministry data. Understanding the types of UPI payment frauds can help you stay safe. Fraudsters often employ tactics such as UPI ID fraud, where they create fake IDs to deceive users. To protect yourself, change your UPI PIN regularly and be aware of common scams. Remember, UPI scams prey on fear, greed and emotion. Stay vigilant and educate yourself to avoid falling victim to UPI fraud.
    </div>
    <div style={myStyle1}>
        <img src={visionmission} alt="" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div style={myStyle2}>
        <div className="left">
            <ul className='temp'>
                <li>Contact Us:</li>
                <li>Email: 
                  <div className='emailadjust'>
                    {props.email}
                    </div>
                    </li>
                <li>Helpline No.: {props.helpline}</li>
            </ul>
        </div >
        <div className="right">
        <div className="container">
        <input type="checkbox" name="" id=""/>
        <div className="links">
        <Link to="#" style={{'--i':1}}><i className="fab fa-facebook" id="fb"></i></Link>
        <Link to="#" style={{'--i':2}}><i className="fab fa-instagram" id="ig"></i></Link>
        <Link to="#" style={{'--i':3}}><i className="fab fa-twitter" id="tw"></i></Link>
        <Link to="#" style={{'--i':4}}><i className="fab fa-whatsapp" id="wa"></i></Link>
        </div>
        </div>
        </div>
    </div>
    </>
  );
}

About.propTypes = {
  email: PropTypes.string.isRequired,
  helpline: PropTypes.string.isRequired,
};

About.defaultProps = {
  email: "complaintupidetect@gmail.com",
  helpline: "1800-000-000",
};