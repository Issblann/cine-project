import React from "react";
import "./alterEgo.css";
import useToggleText from "../../hooks/useImageToggle";
import ImgEgo1 from "../../assets/imagenes/Imagen_ego1.jpg";
import ImgEgo2 from "../../assets/imagenes/Imagen_ego2.jpg";
import ImgEgo3 from "../../assets/imagenes/Imagen_ego3.jpg";
import ImgEgo4 from "../../assets/imagenes/Imagen_ego4.jpg";
import ImgEgo5 from "../../assets/imagenes/Imagen_ego5.jpg";
import Imagen_alterego1 from "../../assets/imagenes/alterego.jpg";

const AlterEgo = () => {
  const [showText, toggleText] = useToggleText(false);
  return (
    <section id="alter-ego">
      <div className="container">
        <h1 className="title title-3">ALTER EGO</h1>
        <img
          src={Imagen_alterego1}
          onClick={toggleText}
          alt="Imagen_alterego1"
        />
        {showText && (
          <div>
            <p>
              Neyder se encuentra en la plaza, haciendo un poco de tiempo en la
              plaza antes de ir a trabajar, comienza a rapear. En eso, una chica
              se le acerca y se presenta, diciéndole que tiene mucho talento y
              que lo quiere invitar a tomar un café a cierta hora y lugar
              específico, dándole su número para aclarar detalles por si al
              final acepta. Neyder debe tomar la decisión de sí salir temprano
              de trabajar y asistir al encuentro que le propone la chica o hacer
              horas extras, como siempre, para conseguir el dinero que necesita
              para subsistir ya que si situación después de huir de su comunidad
              es un tanto crítica.
            </p>
            <p>
              <b> Neyder acepta la invitación.</b>
            </p>
            <p>
              Se encuentran en la cafetería, allí Marcela se presenta y le
              invita un café, mientras le comenta acerca de un concurso que se
              realizará en la plaza y que está organizando su universidad junto
              a otras organizaciones, así invitándolo a participar. Neyder y la
              chica comienzan a practicar juntos para el concurso, durante el
              transcurso de los días, la chica comienza a generar sentimientos
              por Neyder. Entonces, durante un ensayo ella se confiesa y le
              propone ser novios.
            </p>
            <p>
              <b>Neyder acepta salir con ella</b>
            </p>
            <p>
              Ambos continúan ensayando y su relación crece. Los días pasan y el
              día del concurso llega, los dos se presentan y terminan ganando el
              primer puesto, como un dúo. Por lo que, con la plata que ganaron,
              deciden irse a vivir fuera del país y compartir su vida juntos.
              (FINAL #1)
            </p>

            <p>
              En la noche del concurso, ambos se van caminando hacia la casa de
              él, celebrando su victoria, lo que ninguno sabía o se había dado
              cuenta era que alguien los estaba siguiendo, aquel de nombre
              Javier. Al verlos juntos, Javier lo llama por su nombre, Neyder al
              darse la vuelta recibe un disparo en el pecho y muere. (FINAL #2).
            </p>
            <p>
              <b>Neyder no acepta salir con ella.</b>
            </p>
            <p>
              Ambos continúan ensayando juntos a pesar del rechazo porque su
              relación de amigos y compañeros de equipo es más fuerte que las
              emociones unilaterales de Marcela. Los días pasan y el día del
              concurso llega, los dos se presentan y terminan ganando el primer
              puesto. ↓ En la noche del concurso, Javier se va caminando solo
              hacia su casa, contento por su victoria, pero lo que él no sabía o
              no se había dado cuenta era que alguien lo estaba siguiendo, aquel
              de nombre Javier. El cual lo llama y Neyder se sorprende por su
              aparición. Javier apunta con un arma a Neyder, pero la mano le
              tiembla y declara que no es capaz de hacerle algo tan horrible a
              alguien que sigue amando, que le habían puesto de trabajo matarlo
              por haberse fugado de la pandilla. Ambos tienen un momento emotivo
              de reencuentro, Javier felicita a Neyder por lograr salir de lo
              que él no ha sido capaz, diciéndole que se siente muy feliz por
              él. A ambos los invade la nostalgia por los recuerdos de cuando
              estaban juntos. Javier toma la decisión de no matar a Neyder y le
              dice que va a dejar la pandilla, sólo si le permite quedarse a su
              lado. Ambos se fugan
            </p>
          </div>
        )}

        <div>
          <img src={ImgEgo1} alt="Imagen_ego1" />
          <img src={ImgEgo2} alt="Imagen_ego2" />
          <img src={ImgEgo3} alt="Imagen_ego3" />
          <img src={ImgEgo4} alt="Imagen_ego4" />
          <img src={ImgEgo5} alt="Imagen_ego5" />
        </div>
      </div>
    </section>
  );
};

export default AlterEgo;
