import React from 'react'
import { productData } from '../data/productData'

const Product = () => {
  return (
    <>
      <h2 className="w3-center w3-jumbo">Products</h2>
      <div className="w3-container w3-margin  w3-border w3-round-large">
        <table class="w3-table w3-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Quantity Per</th>
            </tr>
          </thead>

          <tbody>
            {productData.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.quantityPerUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product
