import React from "react";
import { Link } from 'react-router-dom';

export function Product({ data }) {
  return (
    <div className="card my-5 ">
      <div className="container ">
      <img style={{height:250}} src={data.pic} className="img-fluid card-img-top pt-2" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="text-success" style={{fontSize: 20, fontWeight: 700}}>{data.price}</p>
        </div>
      </div>
      <Link to={"/detail/" + data.id}><span className="btn btn-primary w-100">جزعیات</span></Link>
    </div>
  );
}
