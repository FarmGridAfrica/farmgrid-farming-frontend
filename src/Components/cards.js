import React from "react";
import { Link } from "react-router-dom";

export const InvestmentCard = ({ farm }) => {
  return (
    <div className="card my-2">
      <div className="sqaure-image">
        <img src={farm.photo ? farm.photo : "/img/auth/farm.jpg"} />
      </div>
      <div className="m-1">
        <div className="display-grid-2">
          <h3 className="font-weight-normal">{farm.farmName}</h3>
          <h3 className="font-weight-normal success text-end">
            {farm.returnOfInvestment}%
          </h3>
        </div>
        <p className="my-1">{farm.description}</p>
        <Link className="link" to={`/farm/${farm._id}`}>
          <div className="btn-medium">Invest</div>
        </Link>
      </div>
    </div>
  );
};

export const ProductCard = ({ farm }) => {
  return (
    <div className="card">
      <div className="sqaure-image">
        <img src={farm.photo ? farm.photo : "/img/auth/farm.jpg"} />
      </div>
      <div className="m-1 p-1">
        <div className="display-grid-2">
          <h3 className="font-weight-normal">{farm.farmName}</h3>
          <h3 className="font-weight-normal success text-end">
            {farm.returnOfInvestment}%
          </h3>
        </div>
        <p className="my-1">{farm.description}</p>
      </div>
    </div>
  );
};
