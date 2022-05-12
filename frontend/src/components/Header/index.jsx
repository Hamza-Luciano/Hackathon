import React from "react";
import SHeader from "./style";
import tree from "../../assets/tree.jpg";

export default function Header() {
  return (
    <SHeader img={tree}>
      <div className="headerTxt">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dolores delectus hic, mollitia fugiat earum.
        </p>
      </div>
    </SHeader>
  );
}
