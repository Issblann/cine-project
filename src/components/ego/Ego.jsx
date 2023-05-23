import React from "react";
import useToggleText from "../../hooks/useImageToggle";
import ImgEgo1 from "../../assets/imagenes/Imagen_ego1.jpg";
import ImgEgo2 from "../../assets/imagenes/Imagen_ego2.jpg";
import ImgEgo3 from "../../assets/imagenes/Imagen_ego3.jpg";
import ImgEgo4 from "../../assets/imagenes/Imagen_ego4.jpg";
import ImgEgo5 from "../../assets/imagenes/Imagen_ego5.jpg";
import superego from "../../assets/imagenes/superego.jpg";
import "./ego.css";
const Ego = () => {
  const [showText, toggleText] = useToggleText(false);
  return (
    <section id="ego">
      <div className="container">
        <h1 onClick={toggleText} className="title title-2">
          EGO
        </h1>

        {showText && (
          <p>
            Neyder (21) reside en una población repleta de pandillas desde su
            niñez, viéndose obligado a ser parte de negocios ilícitos para
            sustentar su vida y la de su familia. Javier (22) es amigo de Neyder
            desde su niñez, ambos acompañándose en la travesía de hacer
            actividades ilegales, apoyándose mutuamente para no dejarse dominar
            por el miedo y, de alguna manera, permitiendo que otro tipo de
            emociones florezcan entre la relación que llevaban ambos. Un día,
            reciben la propuesta de llevar su trabajo a mayores, siendo
            invitados a tomar la posición de sicarios, ambos se sorprenden ya
            que las sumas de dinero ofrecidas son realmente buenas, pero en el
            pasado, Neyder y Javier se habían prometido jamás ir más allá de ser
            cobradores o camellos, preocupándose por la seguridad del otro al
            ser pareja y mantener sus ideales al creer no ser capaces de cargar
            con la culpa. Por lo tanto, el hecho de aceptar ese trabajo
            representaría la ruptura de una promesa. Después de unas semanas,
            Javier recibe un mensaje recordándole la oferta pendiente, él viendo
            a su alrededor, nota un hogar decadente y las necesidades de escapar
            de allí con Neyder le piden a gritos dejar de lado sus creencias y
            someterse a la culpa de tomar vidas ajenas si con ello puede cumplir
            ese deseo lo más rápido posible. A espaldas de Neyder, Javier acepta
            y emprende su camino con los datos que le son brindados por una de
            las cabezas de otra pandilla y a pesar del peso del remordimiento,
            cumple con lo acordado y, por primera vez, toma la vida de otro ser
            humano. Además del sonido estruendoso del arma, escucha pasos
            rápidos a sus espaldas justo cuando se proponía escapar del lugar y
            luego alguien lo agarra con mucha fuerza, él evita emitir sonido
            alguno para no revelar su identidad, pero las alarmas en su cerebro
            se encienden al notar que es una conocida y que el cuerpo que se
            desangra a su costado es su familiar. Ella lo ataca con fuerza,
            llora, grita y hace lo posible por quitarle las telas que cubren su
            rostro, sorprendentemente lo logra por un momento y su cara cambia
            totalmente al notar quién es; Javier aprovecha el instante de
            sorpresa para tratar de cubrir su rostro nuevamente y escabullirse
            lo más rápido posible. Al regresar a casa con Neyder, se traga la
            culpa que lo invade porque el chico lo recibe con mucha alegría al
            haber conseguido más dinero trabajando, él disfraza sus ganancias de
            la misma manera y él le cree ciegamente, ambos contentos por estar
            cada vez más cerca de su objetivo. Al día siguiente, una mujer
            irrumpe en su casa, asustando a la pareja por los golpes en la
            puerta y los fuertes gritos que resonaban en el exterior, Javier
            teme por lo peor, pero aún así deciden abrirle porque después de un
            tiempo ella no cede a abandonar el lugar. Yulié (25) empuja a Javier
            apenas ingresa a la casa, Neyder intenta defenderlo porque no sabe
            qué pasa, pero ella comienza a insultarlo y gritarle con dolor que
            sabe que fue Javier quién mató a su hermano, resaltando la traición
            que sentía por haber trabajado con él en el pasado y que de esa
            manera le pagaba el destino. A partir de esto, inicia una nueva
            discusión entre Neyder y Javier, el primero aún costandole aceptar
            las acciones de su pareja a pesar de la promesa que habían pactado
            hace mucho tiempo, al principio dudando de sí debería creerle a
            Yulié, pero al notar que Javier no era capaz de emitir palabra
            alguna, algo se desmoronó en él. (Insertar drama). Neyder decide
            partir solo, sintiéndose engañado e incapaz de seguir viviendo junto
            a Javier. Escapa por su cuenta, con el poco dinero que había
            recolectado, cambiando su identidad y dejando todo su pasado
            estancado en aquel lugar.
          </p>
        )}

        {/* <div>
          <img src={ImgEgo1} alt="Imagen_ego1" />
          <img src={ImgEgo2} alt="Imagen_ego2" />
          <img src={ImgEgo3} alt="Imagen_ego3" />
          <img src={ImgEgo4} alt="Imagen_ego4" />
          <img src={ImgEgo5} alt="Imagen_ego5" />
        </div> */}
      </div>
    </section>
  );
};

export default Ego;
