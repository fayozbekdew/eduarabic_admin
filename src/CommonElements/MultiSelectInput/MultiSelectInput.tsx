import React from "react";
import { Input } from "reactstrap";

export default function MultiSelectInput() {
  return (
    <div
      style={{ height: "100%", minHeight: "100px" }}
      className="border d-flex flex-column p-2 gap-1"
    >
      <div className=" w-100 h-100 bg-red border w-100 "></div>
      <span className="d-flex align-items-center gap-4 w-100">
        <Input
          // onChange={getUserData}
          name="firstName"
          type="url"
          placeholder={"Kurs uchun afzalliglar"}
        />
        <button type="button" className="btn btn-primary">
          +
        </button>
      </span>
    </div>
  );
}
