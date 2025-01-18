import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const VendeTuTech = () => {
  return (
    <div className="vendeTuTech">
      <img
        className="imgVendeTuTech"
        src="https://i.postimg.cc/yxcJH4Sd/MOVI-A2-horizontal-5.png"
        alt="Vende tu tech"
      />

      <Button
        to="/"
        as={NavLink}
        variant="danger"
        className="volverInicio"
      >
        Volver al inicio
      </Button>
    </div>
  );
};

export default VendeTuTech;
