import React from "react";
import { Link } from "react-router-dom";

export const InvestmentCard = () => {
  return (
    <div className="card">
      <div className="sqaure-image">
        <img src={"/img/auth/farm.jpg"} />
      </div>
      <div className="grid mt-3">
        <h1 className="mt-2">Package</h1>
        <span>15%</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maiores.
      </p>
      <Link className="link" to="/plan/id">
        <div className="btn-medium">Invest</div>
      </Link>
    </div>
  );
};

export const ProductCard = () => {
  return (
    <div className="card">
      <div className="sqaure-image">
        <img src={"/img/auth/farm.jpg"} />
      </div>
      <div className="grid mt-3">
        <h1 className="mt-2">Package</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maiores.
      </p>
    </div>
  );
};
