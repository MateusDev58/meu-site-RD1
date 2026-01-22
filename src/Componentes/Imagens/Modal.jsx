import { useState } from "react";
import "./Modal.css";
import "./ModalResponsividade.css";

export const Modal = ({ plataforma, imagemInicial, onClose }) => {
  const imagens = {
    pc: [
      "/img-pc.jpg",
      "/img-pc-2.jpg",
      "/img-pc-3.jpg",
      "/img-pc-4.jpg",
      "/img-pc-5.jpg",
      "/img-pc-6.jpg",
      "/img-pc-7.jpg",
      "/img-pc-8.jpg",
      "/img-pc-9.jpg",
      "/img-pc-10.jpg",
    ],

    ps5: [
      "/img-ps5.jpg",
      "/img-ps5-2.jpg",
      "/img-ps5-3.jpg",
      "/img-ps5-4.jpg",
      "/img-ps5-5.jpg",
    ],

    switch: [
      "/img-switch-2.jpg",
      "/img-switch-2-2.jpg",
      "/img-switch-2-3.jpg",
      "/img-switch-2-4.jpg",
      "/img-switch-2-5.jpg",
    ],

    mobile: [
      "/img-mobile.jpg",
      "/img-mobile-2.jpg",
      "/img-mobile-3.jpg",
      "/img-mobile-4.jpg",
      "/img-mobile-5.jpg",
    ],

    original: [
      "/img-original-conjunto.jpg",
      "/img-original-conjunto-2.jpg",
      "/img-original-conjunto-3.jpg",
      "/img-original-conjunto-4.jpg",
      "/img-original-conjunto-5.jpg",
      "/img-original-conjunto-6.jpg",
      "/img-original-conjunto-7.jpg",
      "/img-original-conjunto-8.jpg",
      "/img-original-conjunto-9.jpg",
      "/img-original-conjunto-10.jpg",
      "/img-original-conjunto-11.jpg",
      "/img-original-conjunto-12.jpg",
      "/img-original-conjunto-13.jpg",
      "/img-original-conjunto-14.jpg",
      "/img-original-conjunto-15.jpg",
      "/img-original-conjunto-16.jpg",
      "/img-original-conjunto-17.jpg",
      "/img-original-conjunto-18.jpg",
      "/img-original-conjunto-19.jpg",
      "/img-original-conjunto-20.jpg",
      "/img-original-conjunto-21.jpg",
      "/img-original-conjunto-22.jpg",
      "/img-original-conjunto-23.jpg",
      "/img-original-conjunto-24.jpg",
      "/img-original-conjunto-25.jpg",
      "/img-original-conjunto-26.jpg",
      "/img-original-conjunto-27.jpg",
      "/img-original-conjunto-28.jpg",
      "/img-original-conjunto-29.jpg",
      "/img-original-conjunto-30.jpg",
      "/img-original-conjunto-31.jpg",
      "/img-original-conjunto-32.jpg",
      "/img-original-conjunto-33.jpg",
      "/img-original-conjunto-34.jpg",
      "/img-original-conjunto-35.jpg",
      "/img-original-conjunto-36.jpg",
      "/img-original-conjunto-37.jpg",
      "/img-original-conjunto-38.jpg",
      "/img-original-conjunto-39.jpg",
      "/img-original-conjunto-40.jpg",
      "/img-original-conjunto-41.jpg",
      "/img-original-conjunto-42.jpg",
      "/img-original-conjunto-43.jpg",
      "/img-original-conjunto-44.jpg",
      "/img-original-conjunto-45.jpg",
      "/img-original-conjunto-46.jpg",
      "/img-original-conjunto-47.jpg",
      "/img-original-conjunto-48.jpg",
      "/img-original-conjunto-49.jpg",
      "/img-original-conjunto-50.jpg",
      "/img-original-conjunto-51.jpg",
      "/img-original-conjunto-52.jpg",
      "/img-original-conjunto-53.jpg",
      "/img-original-conjunto-54.jpg",
      "/img-original-conjunto-55.jpg",
      "/img-original-conjunto-56.jpg",
      "/img-original-conjunto-57.jpg",
      "/img-original-conjunto-58.jpg",
      "/img-original-conjunto-59.jpg",
      "/img-original-conjunto-60.jpg",
    ],
  };

  const lista = imagens[plataforma];

  const indexInicial = lista.indexOf(imagemInicial);

  const [index, setIndex] = useState(indexInicial);

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i < lista.length - 1 ? i + 1 : 0));
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i > 0 ? i - 1 : lista.length - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="caixa-botao-modal">
        <div className="vazio"></div>

        <div className="caixa-botao-passar-modal">
          <button className="modal-seta" onClick={prev}>
            <img
              className="seta-modal-img"
              src="botao-esquerda.svg"
              alt="seta"
            />
          </button>

          <button className="modal-seta" onClick={next}>
            <img
              className="seta-modal-img"
              src="botao-direitaa.svg"
              alt="seta"
            />
          </button>
        </div>

        <button className="modal-fechar-botao" onClick={onClose}>
          X
        </button>
      </div>

      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <div className="galeria-pc-modal">
          <img
            className="imagem-ampliada"
            src={lista[index]}
            alt="imagem ampliada"
          />
        </div>
      </div>
    </div>
  );
};
