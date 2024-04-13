import React from "react";
import Item from "./Item";

function Items({items, handleDelete}) {
  return (
    <main>
      {items.map((el) => (
        <Item key={el.id} id={el.id} handleDelete={handleDelete} img={el.img} price={el.price} title={el.title}/>
      ))}
    </main>
  );
}

export default Items;
