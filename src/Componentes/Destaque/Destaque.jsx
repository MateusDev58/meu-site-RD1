import { useState, useRef } from "react";
import "./Destaque.css";
import "./DestaqueResponsividade.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import ScrollContainer from "react-indiana-drag-scroll";

export const Destaque = () => {
  const destaques = [
    {
      imagem: "/img-gande-destaque-1.png",
      thumb: "/img-destaque-1.png",
      titulo: "Mundo",
      texto:
        "Red Dead Redemption abrange três territórios distintos no Sudoeste americano e no México. Nova Austin é o último posto avançado da fronteira americana e abriga algumas cidades e fortes. Ao sul da fronteira fica a província mexicana de Nuevo Paraíso, onde uma guerra civil está prestes a estourar. O território mais ao norte de West Elizabeth é onde fica a cidade de Blackwater, que está se modernizando rapidamente.",
    },

    {
      imagem: "/img-gande-destaque-2.png",
      thumb: "/img-destaque-2.png",
      titulo: "Fauna",
      texto:
        "Mais de 30 espécies de animais, incluindo gado, animais de estimação e predadores mortíferos, podem ser encontradas nos territórios de Red Dead Redemption. Esses territórios abrigam uma fauna diversa que está espalhada pelas pradarias das fronteiras de Nova Austin, pelos desertos mexicanos ensolarados de Nuevo Paraíso e na região verde e montanhosa de West Elizabeth. Cada território tem sua própria fauna distinta, esperando ser descoberta.",
    },

    {
      imagem: "/img-gande-destaque-3.png",
      thumb: "/img-destaque-3.png",
      titulo: "Caça",
      texto:
        "Os animais espalhados pelo mundo atacam uns aos outros e, às vezes, até você ou o seu cavalo. Proteja-se e defenda-se com a ajuda de armas e ferramentas confiáveis, ou parta para o ataque e cace por esporte ou para lucrar. Você pode comprar itens especiais para ajudar na caça e aumentar as suas chances de sucesso. Depois que você mata um animal, ele pode ser esfolado ou depenado para ser trocado por mercadorias com comerciantes locais.",
    },

    {
      imagem: "/img-gande-destaque-4.png",
      thumb: "/img-destaque-4.png",
      titulo: "Honra e Fama",
      texto:
        "No mundo de Red Dead Redemption, suas ações têm consequências. Na fronteira, a honra ainda tem valor, e a fama se espalha rapidamente. As escolhas que você fizer afetarão seus níveis de honra e fama, mudando a maneira como os habitantes da cidade tratam você, criando a reputação de um pistoleiro respeitado e que cumpre as leis – ou de um notório fora da lei.",
    },

    {
      imagem: "/img-gande-destaque-5.png",
      thumb: "/img-destaque-5.png",
      titulo: "Armas",
      texto:
        "Nos primeiros anos do século 20, as mudanças estavam chegando rapidamente à fronteira americana, e nada acelerou esse processo tanto quanto a rápida evolução da tecnologia das armas. Red Dead Redemption apresenta uma variedade de armas de época autênticas, de mosquetes embalados à mão a rifles de repetição, de pistolas de tiro único ao icônico revólver – e as aterrorizantes primeiras metralhadoras que mudaram para sempre a história das guerras.",
    },
  ];

  const [ativo, setAtivo] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      <section className="caixa-carrossel">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          allowTouchMove={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setAtivo(swiper.activeIndex)}
          className="mySwiper"
        >
          {destaques.map((d, i) => (
            <SwiperSlide key={i}>
              <img className="img-grande-destaque" src={d.imagem} alt="" />
            </SwiperSlide>
          ))}

          <div
            className="seta-carrossel"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src="/botao-esquerda.svg" alt="botao esquerda" />
          </div>

          <div
            className="carrossel"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="/botao-direitaa.svg" alt="botao direita" />
          </div>
        </Swiper>
      </section>

      <section className="caixa-destaque">
        <div className="caixa-destaque-conteudo">
          <ScrollContainer className="caixa-destaque-botoes" horizontal>
            {destaques.map((d, i) => (
              <button
                key={i}
                onClick={() => {
                  swiperRef.current?.slideTo(i);
                  setAtivo(i);
                }}
              >
                <img
                  className="img-destaque-pequena"
                  src={d.thumb}
                  alt="img destaque"
                />
              </button>
            ))}
          </ScrollContainer>

          <div className="caixa-texto-destaque">
            <p className="destaque-p">Destaques</p>
            <h2 className="mundo-h2">{destaques[ativo].titulo}</h2>
            <p className="texto-destaque">{destaques[ativo].texto}</p>
          </div>
        </div>
      </section>
    </>
  );
};
