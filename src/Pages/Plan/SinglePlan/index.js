import React from "react";
import { InvestmentCard, ProductCard } from "../../../Components/cards";
import { Navbar } from "../../../Components/navbar";

const SinglePlan = () => {
  return (
    <div>
      <Navbar />
      <section class="invest container">
        <h1 class="invest-heading">Investment Packages</h1>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempora vitae blanditiis mollitia ut laborum repellendus aspernatur,
          voluptate suscipit perferendis molestias aperiam alias odit excepturi
          maxime ratione. Maiores, nam laudantium!
        </p>

        <h1 class="invest-heading">Products</h1>
        <div class="collection">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="center-btn">
          <div className="btn-medium">Invest</div>
        </div>
      </section>
    </div>
  );
};

export default SinglePlan;
