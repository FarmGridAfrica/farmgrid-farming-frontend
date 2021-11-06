import React from "react";
import { InvestmentCard } from "../../../Components/cards";
import { DashboardNav } from "../../../Components/navbar";

const Home = () => {
  return (
    <div>
      <DashboardNav />
      <section className="container">
        <h1 className="invest-heading">Products</h1>
        <div className="collection">
          <InvestmentCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
