import React from "react";

export const InvestmentCard = () => {
  return (
    <div class="card">
      <div class="sqaure-image">
        <img src={"/img/auth/farm.jpg"} />
      </div>
      <div className="grid mt-3">
        <h1 className="mt-2">Package</h1>
        <span>15%</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maiores.
      </p>
      <div className="btn-medium">Invest</div>
    </div>
  );
};

export const ProductCard = () => {
  return (
    <div class="card">
      <div class="sqaure-image">
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
