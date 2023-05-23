import React from "react";
import useToggleText from "../../hooks/useImageToggle";
import "./spinoff.css";
import principalImg from "../../assets/imagenes/principal.jpg";
const SpinOff = () => {
  const [showText, toggleText] = useToggleText(false);
  return (
    <section id="spin-off">
      <div className="container">
        <h1 className="title title-4">SUPEREGO</h1>
        <img src={principalImg} onClick={toggleText} alt="principalImg" />
        {showText && (
          <p>
            Breiner ha cumplido ya 3 años de condena, hasta que un día, es
            llamado por un oficial que le dice que alguien ha pagado su fianza
            de los años que le faltaban. El líder de la pandilla en la que
            trabajaba lo ha venido a sacar para que cumpla un encargo más para
            él, que consiste en buscar, capturar y asesinar a Javier Estupiñán,
            que lleva desaparecido un largo tiempo desde que se le encargó matar
            a un fugado. Breiner acepta el encargo, solamente para aprovechar la
            condición de libertad que le brindan para poder cumplir con su
            misión propia, la de encontrar a su hermano, que hace tiempo no pudo
            ver desde su estancia en la cárcel. Por lo que, Breiner va a la
            dirección que se le ordena, para cumplir con el trabajo. Al llegar,
            toca la puerta de la residencia, en donde una señora le deja pasar
            al preguntar por Javier. Breiner se adentra en la vivienda y entra a
            la pieza en la cual se encontraba su objetivo, que al verlo, lo
            agarra del cuello y le apunta con su arma. En el momento en que
            estaba apunto de disparar, alguien entra corriendo a la pieza, a lo
            que Breiner se sorprende al ver que esa persona era su hermano
            Neyder. Después de aquella escena, los tres se sientan a hablar,
            poniéndose en contexto sobre la situación en la que se encontraban
            en aquel momento. Breiner furioso y sintiéndose engañado por la
            pandilla, y sobre todo con el líder de esta, ya que fue él quien le
            encargó ir en busca de quien salvó la vida de su hermano, decide
            vengarse y va devuelta a la pandilla. Allá, Breiner entra con
            normalidad, pidiendo urgentemente hablar con el líder. Al verlo,
            este le pregunta que porque trae las manos vacías y que que sucedió
            con el encargo. Como acto siguiente Breiner saca su arma y le
            dispara. FIN.
          </p>
        )}
        <p>
          Si quieres ver más click <span></span>
          <a href="https://instagram.com/super_.ego?igshid=MzNlNGNkZWQ4Mg==">
            aqui:
          </a>
        </p>
        <p>
          <a href="https://drive.google.com/file/d/1-3AmpIpEbLMRvB4_BW2Ho8MHcVIgMUpE/view?usp=drivesdk">
            Superego
          </a>
        </p>
      </div>
    </section>
  );
};

export default SpinOff;
