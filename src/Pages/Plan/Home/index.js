import React from "react";
import { InvestmentCard } from "../../../Components/cards";
import { Navbar } from "../../../Components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section class="invest container">
        <h1 class="invest-heading">Investment Packages</h1>
        <div class="collection">
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
