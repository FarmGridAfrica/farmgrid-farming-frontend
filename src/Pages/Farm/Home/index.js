import React from "react";
import { InvestmentCard } from "../../../Components/cards";
import { Navbar } from "../../../Components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="invest container">
        <h1 className="invest-heading">Investment Packages</h1>
        <div className="collection">
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
