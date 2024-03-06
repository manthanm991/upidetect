import React, { useState } from "react";
import homelayout from "./homelayout.png"
import 'I:/1WebD/upidetect/src/index.css';
import "I:/1WebD/upidetect/src/components/homelayout.png"

export default function Upiform(props) {
    const [formData, setFormData] = useState({
        type: "Cash In",
        amount: "",
        oldBalanceOrg: "",
        newBalanceOrg: "",
        oldBalanceDestination: "",
        newBalanceDestination: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            type: "Cash In",
            amount: "",
            oldBalanceOrg: "",
            newBalanceOrg: "",
            oldBalanceDestination: "",
            newBalanceDestination: "",
          });
      };

     let stylesize={width:'385px', borderRadius:'8px', padding:'6px'}
     
  return (
    <>
    <div className="maincontainer">
        <div className="leftcontainer">
            <img className="homelayoutimg" src={homelayout} alt="" />
        </div>
        <div className="rightcontainer">
            <div className="container mt-4" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <form className="d-flex align-items-center flex-column" onSubmit={handleSubmit}>
                <div className="mb-1 mt-1" style={{width:'400px'}}>
                <div className="p-3">
                <label htmlFor="type" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                    Type: &nbsp;
                    <select name="type" id="type" className="mt-4" style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.type} onChange={handleChange}>
                    <option value="Cash In" >Cash In</option>
                    <option value="Cash Out">Cash Out</option>
                    <option value="Payment">Payment</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Debit">Debit</option>
                    </select>
                </label>
                    </div>
                </div>
                <div className="mb-4"  style={stylesize}>
                <div className="p-1">
                <label htmlFor="amount" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                    Amount:
                </label>
                <input type="number" className="form-control" id="amount" name="amount" style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.amount}
                      onChange={handleChange}/>
                </div>
                </div>
                <div className="mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                <label htmlFor="amount" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                    Old Balance Org:
                </label>
                <input type="text" className="form-control" id="oldBalanceOrg" name="oldBalanceOrg"  style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.oldBalanceOrg}
                      onChange={handleChange}/>
                </div>
                </div>
                <div className="mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                <label htmlFor="amount" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                New Balance Org:
                </label>
                <input type="text" className="form-control" id="newBalanceOrg" name="newBalanceOrg"  style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.newBalanceOrg}
                      onChange={handleChange}/>
                </div>
                </div>
                <div className="mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                <label htmlFor="amount" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                Old Balance Destination:
                </label>
                <input type="text" className="form-control" id="oldBalanceDestination" name="oldBalanceDestination"  style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.oldBalanceDestination}
                      onChange={handleChange}/>
                </div>
                </div>
                <div className="mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                <label htmlFor="amount" className={`form-label text-${props.mode ==='light'?'dark':'light'}`}>
                New Balance Destination:
                </label>
                <input type="text" className="form-control" id="newBalanceDestination" name="newBalanceDestination"  style={{width:'385px', borderRadius:'8px', padding:'6px'}} value={formData.newBalanceDestination}
                      onChange={handleChange}/>
                </div>
                </div>
                <div className="mt-5 mb-5">
                <div className="p-3">
                <button type="submit" className="btn btn-primary" style={{width:'380px'}}> Submit </button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    </>
  );
}
