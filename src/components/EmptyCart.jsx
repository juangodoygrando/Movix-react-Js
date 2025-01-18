import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <img
        src="https://i.postimg.cc/rwLwXcQC/MOVI-A2-horizontal-4.png"
        alt="Vende tu tech"
        className="empty-cart-logo"
      />
      <Button
        to="/"
        as={NavLink}
        variant="danger"
        className="empty-cart-button"
      >
        Ir a comprar
      </Button>
    </div>
  );
};

export default EmptyCart;
