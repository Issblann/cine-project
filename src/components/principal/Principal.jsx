import React from "react";
import "./principal.css";

import superegoImg from "../../assets/imagenes/superego.jpg";
const Principal = () => {
  return (
    <section id="principal">
      <div className="container container-1">
        <p>
          Neyder vive en un paralelo existencial: los negocios ilícitos y
          Javier, su pareja, el cual rompe una promesa que los hace enfrentar un
          deceso que fragmenta su vínculo totalmente. GENERO: Drama social
          TARGET: Neas +13
        </p>
        <img className="principal-img" src={superegoImg} alt="alterEgoImg" />
      </div>
    </section>
  );
};

export default Principal;
