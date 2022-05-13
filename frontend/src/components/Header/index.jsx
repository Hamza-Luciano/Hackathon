import React from "react";
import SHeader from "./style";
import tree from "../../assets/tree.jpg";

export default function Header() {
  return (
    <SHeader img={tree}>
      <div className="headerTxt">
        <h2>Mieux nous connaître</h2>
        <p>Change your world est une organisation indépendante écologique.</p>
        <p>
          Il vous permetra à titre informatif de vous renseigné sur les données
          environnementales{" "}
        </p>
      </div>
    </SHeader>
  );
}
