import React,{useState,useEffect} from "react";

import axios from "axios";

const Orders = () => {
  const [allOrders,setAllOrders] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders").then((res)=>{
      console.log(res.data);
      setAllOrders(res.data);
    },[]);
  });
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
            {allOrders.map((stock,index)=>{
              const total = stock.price * stock.qty;

              return(
                <tr key={index}>
                  <td>{new Date(stock.timestamp).toLocaleDateString()}</td>
                  <td>{stock.model}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{total}</td>
                </tr>
              )
            })}
          </table>

         </div>
      </div>
    </div>
  )
};

export default Orders;
