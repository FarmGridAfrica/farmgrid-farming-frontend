import React from "react";
import { AddFarmForm, AddProductForm } from "../../../Components/form";
import { AdminNav } from "../../../Components/navbar";

const AddFarm = () => {
  return (
    <div>
      <AdminNav />
      <div className="container">
        <AddFarmForm />
      </div>
    </div>
  );
};

export default AddFarm;
