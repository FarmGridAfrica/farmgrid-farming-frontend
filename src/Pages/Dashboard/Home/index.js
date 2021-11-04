import React from "react";
import { InvestmentCard } from "../../../Components/cards";
import { DashboardNav } from "../../../Components/navbar";

const Home = () => {
  return (
    <div>
      <DashboardNav />
      <section className="container">
        <h1 class="invest-heading mt-5">Products</h1>
        <div class="collection">
          <InvestmentCard />
        </div>
      </section>
    </div>
  );
};

export default Home;