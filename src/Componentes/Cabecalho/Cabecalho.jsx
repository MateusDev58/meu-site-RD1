import { useState, useEffect } from "react";
import "./Cabecalho.css";
import "./CabecalhoResponsividade.css";
import ScrollContainer from "react-indiana-drag-scroll";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    if (menuAberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuAberto]);

  return (
    <>
      <header className="cabecalho">
        <div className="cabecalho-container">
          <div className="lado-esquerdo">
            <button
              className="caixa-menu-hamburguer"
              aria-label="Abrir menu"
              onClick={toggleMenu}
            >
              <span className="linha-horizontal-hamburguer"></span>
              <span className="linha-horizontal-hamburguer"></span>
              <span className="linha-horizontal-hamburguer"></span>
            </button>

            <div className="caixa-imagem">
              <div
                className="rockstar-container"
                aria-label="logo rockstar games"
              >
                <svg
                  className="rockstar-svg"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="logo rockstar games"
                >
                  <defs>
                    <mask
                      id="rockstar-cutout"
                      maskUnits="userSpaceOnUse"
                      maskContentUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                    >
                      <rect x="0" y="0" width="32" height="32" fill="white" />
                      <path
                        d="M23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z"
                        fill="black"
                      />
                    </mask>
                  </defs>

                  <path
                    className="r-base"
                    mask="url(#rockstar-cutout)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949Z"
                    fill="currentColor"
                  />

                  <path
                    className="r-glow"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="vertical"></div>

              <img
                className="logo-red-dead-redemption-cabecalho"
                src="/logo-red-dead-redemption-cabecalho.svg"
                alt="logo red dead redemption"
              />
            </div>
          </div>

          <a className="Compre-ja" href="#Compre-ja">
            Compre já
          </a>
        </div>
      </header>

      {menuAberto && (
        <nav className="menu-mobile">
          <div className="caixa-jogos">
            <p className="jogos-p">JOGOS</p>
          </div>

          <ScrollContainer className="caixa-capa-jogos">
            <a href="https://www.rockstargames.com/br/VI" target="_blank">
              <img
                className="capa-jogos-img"
                src="/capa-gta-6.jpg"
                alt="capa gta 6"
              />
            </a>

            <a href="https://www.rockstargames.com/br/gta-v" target="_blank">
              <img
                className="capa-jogos-img"
                src="/capa-gta-5.jpg"
                alt="capa gta 5"
              />
            </a>

            <a
              href="https://www.rockstargames.com/br/gta-online"
              target="_blank"
            >
              <img
                className="capa-jogos-img"
                src="/capa-gta-5-online.jpg"
                alt="capa gta 5 online"
              />
            </a>

            <a
              href="https://www.rockstargames.com/br/reddeadredemption2"
              target="_blank"
            >
              <img
                className="capa-jogos-img"
                src="/capa-red-dead-2.jpg"
                alt="capa red dead 2"
              />
            </a>

            <a
              href="https://www.rockstargames.com/reddeadredemption"
              target="_blank"
            >
              <img
                className="capa-jogos-img"
                src="/capa-red-dead-1.jpg"
                alt="capa red dead"
              />
            </a>
          </ScrollContainer>

          <div className="caixa-lista-cabecalho">
            <ul>
              <li className="caixa-lista-cabecalho-li">
                <a
                  className="caixa-lista-cabecalho-a"
                  href="https://www.rockstargames.com/br/newswire"
                  target="_blank"
                >
                  Boletim
                </a>
              </li>

              <li className="caixa-lista-cabecalho-li">
                <a
                  className="caixa-lista-cabecalho-a"
                  href="https://www.rockstargames.com/br/videos"
                  target="_blank"
                >
                  Vídeos
                </a>
              </li>

              <li className="caixa-lista-cabecalho-li">
                <a
                  className="caixa-lista-cabecalho-a"
                  href="https://www.rockstargames.com/br/downloads"
                  target="_blank"
                >
                  Downloads
                </a>
              </li>

              <li className="caixa-lista-cabecalho-li">
                <a
                  className="caixa-lista-cabecalho-a"
                  href="https://store.rockstargames.com/pt-BR?_gl=1*1svjjaj*_ga*NTE2ODY2MjQzLjE3NDQzMzQ0NjY.*_ga_PJQ2JYZDQC*czE3NjcyODc0NjYkbzI1NSRnMSR0MTc2NzI4OTc2MSRqNDQkbDAkaDA."
                  target="_blank"
                >
                  loja
                  <span>
                    <img className="seta" src="/seta-direita.svg" alt="seta" />
                  </span>
                </a>
              </li>

              <li className="caixa-lista-cabecalho-li">
                <a
                  className="caixa-lista-cabecalho-a"
                  href="https://support.rockstargames.com/?_gl=1*1lqdro1*_ga*NTE2ODY2MjQzLjE3NDQzMzQ0NjY.*_ga_PJQ2JYZDQC*czE3NjcyODc0NjYkbzI1NSRnMSR0MTc2NzI4OTgxMiRqNjAkbDAkaDA."
                  target="_blank"
                >
                  suporte
                  <span>
                    <img
                      className="seta"
                      src="/seta-direita.svg"
                      alt="seta img"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="caixa-compre-ja">
            <a
              className="Compre-ja-2"
              href="#Compre-ja"
              onClick={() => setMenuAberto(false)}
            >
              Compre já
            </a>
          </div>

          <div className="caixa-inicio">
            <ul className="lista-ul-inicio">
              <li>
                <a className="lista-inicio-a" href="#" target="_blank">
                  <span>
                    <img
                      className="img-inicio"
                      src="/logo-rockstar.svg"
                      alt="logo rockstar"
                    />
                  </span>
                  Início
                </a>
              </li>

              <li>
                <a
                  className="lista-inicio-a"
                  href="https://www.rockstargames.com/br/games"
                  target="_blank"
                >
                  <span>
                    <img
                      className="img-inicio"
                      src="/jogos-img.svg"
                      alt="jogos img"
                    />
                  </span>
                  Jogos
                </a>
              </li>

              <li>
                <a
                  className="lista-inicio-a"
                  href="https://www.rockstargames.com/br/newswire"
                  target="_blank"
                >
                  <span>
                    <img
                      className="img-inicio"
                      src="/Boletim.svg"
                      alt="boletim img"
                    />
                  </span>
                  Boletim
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Cabecalho;
