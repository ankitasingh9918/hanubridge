import React from "react";

function service() {
  return (
   <div className=" py-5 text-center text-white  bg-primary ">
    <h1>Service Page</h1>
    <p>Welcome Service Page</p>
     <a
      href="https://wa.me/8423811106?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services."
      className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        fontSize: "28px",
        zIndex: 1000,
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
   </div>
  );
}

export default service;
