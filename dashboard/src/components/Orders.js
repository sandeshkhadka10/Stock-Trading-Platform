import React, { useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [editQty, setEditQty] = useState("");
  const [editPrice, setEditPrice] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  };

  const handleEditClick = (order) => {
    setEditOrder(order);
    setEditQty(order.qty);
    setEditPrice(order.price);
  };

  const handleCancelClick = () => {
    setEditOrder(null);
  };

  const handleEditSave = async() =>{
    try{
       await axios.put(`http://localhost:3002/editOrder/${editOrder._id}`,{
        qty:Number(editQty),
        price:Number(editPrice)
       });
       setEditOrder(null);
       fetchOrders();
    }catch(error){
      console.log("Failed to update order", error);
    }
  }

  return (
    <div className="orders">
      <div className="no-orders">
        <h3 className="title">Orders({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Model</th>
            </tr>
            {allOrders.map((stock, index) => {
              const total = stock.price * stock.qty;

              return (
                <tr key={index}>
                  <td>{new Date(stock.timestamp).toLocaleDateString()}</td>
                  <td>{stock.model}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{total}</td>
                  <td>
                    <button onClick={() => handleEditClick(stock)} style={{padding:"3px"}}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {editOrder && (
          <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
              <div className="inputs">
                <fieldset>
                  <legend>Qty.</legend>
                  <input
                    type="number"
                    onChange={(e) => setEditQty(e.target.value)}
                    value={editQty}
                  />
                </fieldset>
                <fieldset>
                  <legend>Price</legend>
                  <input
                    type="number"
                    step="0.05"
                    onChange={(e) => setEditPrice(e.target.value)}
                    value={editPrice}
                  />
                </fieldset>
              </div>
            </div>

            <div className="buttons">
              <span>Margin required ₹140.65</span>
              <div>
                <Link className="btn btn-blue" onClick={handleEditSave}>Apply</Link>
                <Link
                  to=""
                  className="btn btn-grey"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
