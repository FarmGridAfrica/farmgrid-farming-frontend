import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcLock } from "react-icons/fc";

export const InvestmentCard = ({ farm }) => {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    setFlag(farm.country.split(" ").join(""));
  }, []);
  return (
    <div className="card my-2">
      <div className="card-label">
        <FcLock className="icon" />
        <p>Decentralized and offline insured</p>
      </div>
      <div className="sqaure-image">
        <img src={farm.photo ? farm.photo : "/img/auth/farm.jpg"} />
      </div>

      <div className="m-1">
        <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
          <div style={{ display: "flex" }}>
            <h3 className="font-weight-normal">{farm.farmName} </h3>
            <img
              className="rounded country-image-size"
              src={`/img/flagicon/${flag}.png`}
              style={{ width: "30px", marginLeft: "5px" }}
            />
          </div>

          <h3 className="font-weight-normal success text-end">
            {farm.annualPercentageYield}%
          </h3>
        </div>

        <p
          style={{
            height: "40px",
            overflow: "hidden",
            textAlign: "justify",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          {farm.description}
        </p>
        <Link className="link" to={`/farm/${farm._id}`}>
          <div className="btn-medium">Stake</div>
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
            {farm.annualPercentageYield}%
          </h3>
        </div>
        <p className="my-1">{farm.description}</p>
      </div>
    </div>
  );
};
