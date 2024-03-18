import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homelayout from "./styles/homelayout.png";
import "./styles/about.css";
import "./styles/index.css";
import "./styles/homelayout.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


export default function Upiform(props) {
  let history = useNavigate();
  
  const [booleanValue, setBooleanValue] = useState(null); 

  const [loading, setLoading] = useState(false);


  const fetchModuleData = async ()=>{
    fetch('http://127.0.0.1:5000/predictions', { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.boolean_value);
      setBooleanValue(data.boolean_value);
      showToast(data.boolean_value);
    })
    .catch(error => console.error('Error fetching data:', error));
  };  

  const showToast = (value) => {
    if (value === true) {
      toast.success(props.successFraud,{position :"top-center", closeButton: false,autoClose:5000});
    } else { 
      toast.error(props.failureFraud,{position :"top-center", closeButton: false,autoClose:5000});
    }
  }
 
  const [FormData, setFormData] = useState({
    type: "Cash In",
    amount: "",
    oldbalanceorg: "",
    newbalanceorg: "",
    oldbalancedestination: "",
    newbalancedestination: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/formdata/dataip",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: FormData.type,
            amount: FormData.amount,
            oldbalanceorg: FormData.oldbalanceorg,
            newbalanceorg: FormData.newbalanceorg,
            oldbalancedestination: FormData.oldbalancedestination,
            newbalancedestination: FormData.newbalancedestination,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        setFormData({
          type: "Cash In",
          amount: "",
          oldbalanceorg: "",
          newbalanceorg: "",
          oldbalancedestination: "",
          newbalancedestination: "",
        });
        history("/");
        setLoading(true);
        setTimeout(() => {
          fetchModuleData();
          setLoading(false);
        }, 3000);
      } else {
        toast.error("Invalid input of the data...");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
    
  };

  const onchange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  let stylesize = { width: "385px", borderRadius: "8px", padding: "6px" };
  let btnstyle = { width: "380px" };

  return (
    <>
      <div className="maincontainer">
        <div className="leftcontainer">
          <img className="homelayoutimg" src={homelayout} alt="" />
        </div>
        <div className="rightcontainer">
          <div
            className="container mt-4"
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          >
            <form
              onSubmit={handleSubmit}
              className="d-flex align-items-center flex-column"
            >
              <div className="media1 mb-1 mt-1" style={{ width: "400px" }}>
                <div className="p-3">
                  <label
                    htmlFor="type"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Type: &nbsp;
                    <select
                      name="type"
                      id="type"
                      className="selectmedia1 mt-4"
                      style={{
                        width: "385px",
                        borderRadius: "8px",
                        padding: "6px",
                      }}
                      value={FormData.type}
                      onChange={onchange}
                    >
                      <option value="Cash In">Cash In</option>
                      <option value="Cash Out">Cash Out</option>
                      <option value="Payment">Payment</option>
                      <option value="Transfer">Transfer</option>
                      <option value="Debit">Debit</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="media1 mb-4" style={stylesize}>
                <div className="p-1">
                  <label
                    htmlFor="amount"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    {" "}
                    Amount:{" "}
                  </label>
                  <input
                    type="number"
                    className="selectmedia1 form-control"
                    id="amount"
                    name="amount"
                    style={{
                      width: "385px",
                      borderRadius: "8px",
                      padding: "6px",
                    }}
                    value={FormData.amount}
                    onChange={onchange}
                  />
                </div>
              </div>

              <div className="media1 mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                  <label
                    htmlFor="amount"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    {" "}
                    Old Balance Org:{" "}
                  </label>

                  <input
                    type="number"
                    className="selectmedia1 form-control"
                    id="oldbalanceorg"
                    name="oldbalanceorg"
                    style={{
                      width: "385px",
                      borderRadius: "8px",
                      padding: "6px",
                    }}
                    value={FormData.oldbalanceorg}
                    onChange={onchange}
                  />
                </div>
              </div>

              <div className="media1 mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                  <label
                    htmlFor="amount"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    New Balance Org:
                  </label>

                  <input
                    type="number"
                    className="selectmedia1 form-control"
                    id="newbalanceorg"
                    name="newbalanceorg"
                    style={{
                      width: "385px",
                      borderRadius: "8px",
                      padding: "6px",
                    }}
                    value={FormData.newbalanceorg}
                    onChange={onchange}
                  />
                </div>
              </div>

              <div className="media1 mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                  <label
                    htmlFor="amount"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    {" "}
                    Old Balance Destination:{" "}
                  </label>

                  <input
                    type="number"
                    className="selectmedia1 form-control"
                    id="oldbalancedestination"
                    name="oldbalancedestination"
                    style={{
                      width: "385px",
                      borderRadius: "8px",
                      padding: "6px",
                    }}
                    value={FormData.oldbalancedestination}
                    onChange={onchange}
                  />
                </div>
              </div>

              <div className="media1 mt-4 mb-2" style={stylesize}>
                <div className="p-1">
                  <label
                    htmlFor="amount"
                    className={`form-label text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    New Balance Destination:
                  </label>

                  <input
                    type="number"
                    className="selectmedia1 form-control"
                    id="newbalancedestination"
                    name="newbalancedestination"
                    style={{
                      width: "385px",
                      borderRadius: "8px",
                      padding: "6px",
                    }}
                    value={FormData.newbalancedestination}
                    onChange={onchange}
                  />
                </div>
              </div>

              <div className="media2 mt-5 mb-5">
                <div className="p-3">
                  <button
                    type="submit"
                    className="selectmedia2 btn btn-primary"
                    style={{ width: "380px", ...btnstyle }}
                  >
                    {" "}
                    Submit{" "}
                  </button>
                  {loading && <Spinner/>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


Upiform.propTypes = {
  successFraud: PropTypes.string.isRequired,
  failureFraud: PropTypes.string.isRequired,
};

Upiform.defaultProps = {
  successFraud: "Fraud Is Detected",
  failureFraud: "Fraud Is Not Detected",
};