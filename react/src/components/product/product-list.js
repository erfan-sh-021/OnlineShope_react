import React from "react";
import { Product } from './product';

export function ProductList(props) {
  return props.products.map((item) => (
    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
      <Product data={item} />
    </div>
  ));
}
