import React, { useState } from "react";
import { suppliersData } from "../data/suppliersData";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";
import { BiSolidSortAlt } from "react-icons/bi";
const Suppliers = () => {

const [suppliers, setSuppliers] = useState(suppliersData)
const [sortValue, setSortValue] = useState(null)
const [filter, setFilter] = useState(false)


const handleDelete = (id)=>{
const deleteValue = suppliers.filter((c)=>c.id !== id)
setSuppliers([...deleteValue])
}

  const handleSort = (columnName) => {
    setFilter(!filter);
    const sortedData = [...suppliers].sort((a, b) => {
      const aValue = a[columnName].toLowerCase();
      const bValue = b[columnName].toLowerCase();
      if (filter) {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    setSortValue(columnName);
    setSuppliers(sortedData);
  };
  return (
    <>
      <h2 className="w3-center w3-jumbo">Products</h2>
      <div className="w3-container w3-margin  w3-border w3-round-large">
        <table className="w3-table w3-striped">
          <thead>
            <tr>
              <th onClick={() => handleSort("companyName")} style={{cursor:"pointer"}}>
                Company Name
                {sortValue === "companyName" ? (
                  <span>
                    {filter ? (
                      <AiOutlineSortDescending />
                    ) : (
                      <AiOutlineSortAscending />
                    )}
                  </span>
                ) : (
                  <BiSolidSortAlt />
                )}
              </th>
              <th>Contact Name</th>
              <th>Contact Title</th>
              <th>Country </th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.companyName}</td>
                <td>{supplier.contactName}</td>
                <td>{supplier.contactTitle}</td>
                <td>{supplier.address.country}</td>
                <td>{supplier.address.phone}</td>
                <td><button className="w3-button w3-red " onClick={()=>handleDelete(supplier.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Suppliers;
