import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceLists = ({ services }) => {
  return (
    <div className="col-lg-9">
      <div className="row mb-4">
        {services.map((service) => (
          <ServiceItem service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceLists;
