import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    axios.get("https://northwind.vercel.app/api/orders").then((res) => {
      setOrders(res.data);
    });
  };

  const deleteOrder = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      axios
        .delete("https://northwind.vercel.app/api/orders/" + id)
        .then((res) => {
          loadOrders();
        });
    }
  };

  return (
    <>
      <h1 className="w3-center w3-jumbo">Orders Length: {orders.length}</h1>
      <div className="w3-container w3-margin  w3-border w3-round-large">
        <table className="w3-table w3-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Id</th>
              <th>Employee Id</th>
              <th>Order Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.customerId}</td>
                    <td>{item.employeeId}</td>
                    <td>{moment(item.orderDate).format("DD/MM/yyyy")}</td>
                    <td>
                      <button className="w3-button w3-red" onClick={() => deleteOrder(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
