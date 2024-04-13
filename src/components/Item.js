import React from "react";
import { Link } from "react-router-dom";

function Item({ img, id,title, price , handleDelete}) {
  return (
    <div className="item">
    <Link to={'/item/'+id}>
      <img src={"./img_section/" + img} alt={title} />
    </Link>

      <h2>{title}</h2>
      <b>{price}$</b>
      <div className="add-to-cart" onClick={()=> handleDelete(id)}>
        <i className="bi bi-trash3"></i>
      </div>
    </div>

  );
}

export default Item;
