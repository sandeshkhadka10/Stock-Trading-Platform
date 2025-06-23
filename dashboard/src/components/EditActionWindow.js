import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./EditActionWindow.css";

import axios from "axios";

import GeneralContext from "./GeneralContext";

const EditActionWindow = ({ uid }) => {
  const [editStockQuantity, setEditStockQuantity] = useState("");
  const [editStockPrice, setEditStockPrice] = useState("");
  const [allHoldings, setAllHoldings] = useState([]);

  const handleEditClick = () => {
    axios.post("http://localhost:3002//editOrder/${editOrder._id}", {
      name: uid,
      qty: editStockQuantity,
      price:editStockPrice
    })
    .then(() => {
        axios.get("http://localhost:3002/allHoldings").then((res) => {
          setAllHoldings(res.data);
        });
      });
    generalContext.closeSellWindow();
  };

  const generalContext = useContext(GeneralContext);
  const handleCancelClick = () => {
    generalContext.closeEditWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty" 
              id="qty"
              onChange={(e) => setEditStockQuantity(e.target.value)}
              value={editStockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setEditStockPrice(e.target.value)}
              value={editStockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <Link className="btn btn-blue" onClick={handleEditClick}>
            Apply
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditActionWindow;
