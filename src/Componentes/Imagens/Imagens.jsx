import { useState } from "react";
import "./Imagens.css";
import "./ImagensResponsividade.css";
import { Modal } from "./Modal.jsx";
import ScrollContainer from "react-indiana-drag-scroll";

export const Imagens = () => {
  const [galeriaAtiva, setGaleriaAtiva] = useState("pc");
  const [conjuntoOriginal, setConjuntoOriginal] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemAtual, setImagemAtual] = useState("");
  const [plataformaAtual, setPlataformaAtual] = useState(null);

  const abrirModal = (plataforma, img) => {
    setPlataformaAtual(plataforma);
    setImagemAtual(img);
    setModalAberto(true);
  };

  return (
    <section>
      <div className="caixa-imagens">
        <div className="caixa-imagens-conteudo">
          <div className="caixa-imagem">
            <h2 className="imagens-h2">Imagens</h2>
            <ScrollContainer className="caixa-plataforma-consoles">
              <button
                className={`botao-plataforma ${
                  galeriaAtiva === "pc" ? "ativo" : ""
                }`}
                onClick={() => setGaleriaAtiva("pc")}
              >
                PC
              </button>

              <button
                className={`botao-plataforma ${
                  galeriaAtiva === "ps5" ? "ativo" : ""
                }`}
                onClick={() => setGaleriaAtiva("ps5")}
              >
                PLAYSTATION 5
              </button>

              <button
                className={`botao-plataforma ${
                  galeriaAtiva === "switch" ? "ativo" : ""
                }`}
                onClick={() => setGaleriaAtiva("switch")}
              >
                NINTENDO SWITCH 2
              </button>

              <button
                className={`botao-plataforma ${
                  galeriaAtiva === "mobile" ? "ativo" : ""
                }`}
                onClick={() => setGaleriaAtiva("mobile")}
              >
                DISPOSITIVOS MÓVEIS
              </button>

              <button
                className={`botao-plataforma ${
                  galeriaAtiva === "original" ? "ativo" : ""
                }`}
                onClick={() => {
                  setGaleriaAtiva("original");
                  setConjuntoOriginal(0);
                }}
              >
                ORIGINAL
              </button>
            </ScrollContainer>
          </div>

          {/*  PC  */}

          {galeriaAtiva === "pc" && (
            <div>
              <div className="caixa-imagem-pc">
                <img
                  className="imagem-grande"
                  src="/img-pc.jpg"
                  alt="img pc"
                  onClick={() => abrirModal("pc", "/img-pc.jpg")}
                />

                <div className="caixa-imagem-pequena">
                  <img
                    className="imagem-pequena"
                    src="/img-pc-2.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-2.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-3.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-3.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-4.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-4.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-5.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-5.jpg")}
                  />
                </div>
              </div>

              <div className="caixa-imagem-pc">
                <div className="caixa-imagem-pequena">
                  <img
                    className="imagem-pequena"
                    src="/img-pc-7.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-7.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-8.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-8.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-9.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-9.jpg")}
                  />

                  <img
                    className="imagem-pequena"
                    src="/img-pc-10.jpg"
                    alt="img pc"
                    onClick={() => abrirModal("pc", "/img-pc-10.jpg")}
                  />
                </div>

                <img
                  className="imagem-grande"
                  src="/img-pc-6.jpg"
                  alt="img pc"
                  onClick={() => abrirModal("pc", "/img-pc-6.jpg")}
                />
              </div>
            </div>
          )}

          {/*  PS5  */}

          {galeriaAtiva === "ps5" && (
            <div className="caixa-imagem-ps5">
              <img
                className="imagem-grande"
                src="/img-ps5.jpg"
                alt="img ps5"
                onClick={() => abrirModal("ps5", "/img-ps5.jpg")}
              />

              <div className="caixa-imagem-pequena">
                <img
                  className="imagem-pequena"
                  src="/img-ps5-2.jpg"
                  alt="img ps5"
                  onClick={() => abrirModal("ps5", "/img-ps5-2.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-ps5-3.jpg"
                  alt="img ps5"
                  onClick={() => abrirModal("ps5", "/img-ps5-3.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-ps5-4.jpg"
                  alt="img ps5"
                  onClick={() => abrirModal("ps5", "/img-ps5-4.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-ps5-5.jpg"
                  alt="img ps5"
                  onClick={() => abrirModal("ps5", "/img-ps5-5.jpg")}
                />
              </div>
            </div>
          )}

          {/*  SWITCH  */}

          {galeriaAtiva === "switch" && (
            <div className="caixa-imagem-switch-2">
              <div className="caixa-imagem-pequena">
                <img
                  className="imagem-pequena"
                  src="/img-switch-2.jpg"
                  alt="img switch 2"
                  onClick={() => abrirModal("switch", "/img-switch-2.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-switch-2-2.jpg"
                  alt="img switch 2"
                  onClick={() => abrirModal("switch", "/img-switch-2-2.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-switch-2-3.jpg"
                  alt="img switch 2"
                  onClick={() => abrirModal("switch", "/img-switch-2-3.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-switch-2-4.jpg"
                  alt="img switch 2"
                  onClick={() => abrirModal("switch", "/img-switch-2-4.jpg")}
                />
              </div>

              <img
                className="imagem-grande"
                src="/img-switch-2-5.jpg"
                alt="img switch 2"
                onClick={() => abrirModal("switch", "/img-switch-2-5.jpg")}
              />
            </div>
          )}

          {/*  MOBILE */}

          {galeriaAtiva === "mobile" && (
            <div className="caixa-imagem-mobile">
              <img
                className="imagem-grande"
                src="/img-mobile.jpg"
                alt="img mobile"
                onClick={() => abrirModal("mobile", "/img-mobile.jpg")}
              />

              <div className="caixa-imagem-pequena">
                <img
                  className="imagem-pequena"
                  src="/img-mobile-2.jpg"
                  alt="img mobile"
                  onClick={() => abrirModal("mobile", "/img-mobile-2.jpg")}
                />
                <img
                  className="imagem-pequena"
                  src="/img-mobile-3.jpg"
                  alt="img mobile"
                  onClick={() => abrirModal("mobile", "/img-mobile-3.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-mobile-4.jpg"
                  alt="img mobile"
                  onClick={() => abrirModal("mobile", "/img-mobile-4.jpg")}
                />

                <img
                  className="imagem-pequena"
                  src="/img-mobile-5.jpg"
                  alt="img mobile"
                  onClick={() => abrirModal("mobile", "/img-mobile-5.jpg")}
                />
              </div>
            </div>
          )}

          {/*  ORIGINAL  */}
          {galeriaAtiva === "original" && (
            <>
              {/* CONJUNTO 1 */}
              {conjuntoOriginal === 0 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-2.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-2.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-3.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-3.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-4.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-4.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-5.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-5.jpg")
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-6.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-6.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-7.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-7.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-8.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-8.jpg")
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-9.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal("original", "/img-original-conjunto-9.jpg")
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-10.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-10.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* CONJUNTO 2 */}

              {conjuntoOriginal === 1 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-11.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-11.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-12.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-12.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-13.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-13.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-14.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-14.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-15.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-15.jpg"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-16.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-16.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-17.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-17.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-18.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-18.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-19.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-19.jpg"
                          )
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-20.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-20.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* CONJUNTO 3 */}

              {conjuntoOriginal === 2 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-21.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-21.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-22.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-22.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-23.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-23.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-24.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-24.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-25.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-25.jpg"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-26.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-26.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-27.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-27.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-28.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-28.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-29.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-29.jpg"
                          )
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-30.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-30.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* CONJUNTO 4 */}

              {conjuntoOriginal === 3 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-31.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-31.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-32.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-32.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-33.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-33.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-34.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-34.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-35.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-35.jpg"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-36.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-36.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-37.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-37.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-38.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-38.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-39.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-39.jpg"
                          )
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-40.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-40.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* CONJUNTO 5 */}

              {conjuntoOriginal === 4 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-41.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-41.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-42.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-42.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-43.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-43.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-44.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-44.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-45.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-45.jpg"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-46.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-46.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-47.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-47.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-48.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-48.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-49.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-49.jpg"
                          )
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-50.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-50.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* CONJUNTO 6 */}

              {conjuntoOriginal === 5 && (
                <div>
                  <div className="caixa-imagem-original">
                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-51.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-51.jpg")
                      }
                    />

                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-52.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-52.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-53.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-53.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-54.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-54.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-55.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-55.jpg"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="caixa-imagem-original">
                    <div className="caixa-imagem-pequena">
                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-56.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-56.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-57.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-57.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-58.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-58.jpg"
                          )
                        }
                      />

                      <img
                        className="imagem-pequena"
                        src="/img-original-conjunto-59.jpg"
                        alt="img original"
                        onClick={() =>
                          abrirModal(
                            "original",
                            "/img-original-conjunto-59.jpg"
                          )
                        }
                      />
                    </div>

                    <img
                      className="imagem-grande"
                      src="/img-original-conjunto-60.jpg"
                      alt="img original"
                      onClick={() =>
                        abrirModal("original", "/img-original-conjunto-60.jpg")
                      }
                    />
                  </div>
                </div>
              )}

              {/* NAVEGAÇÃO ORIGINAL */}
              <div className="caixa-botao-passar">
                <div className="caixa-botao-original">
                  <button
                    className="seta-botao-img"
                    onClick={() =>
                      setConjuntoOriginal((prev) => (prev > 0 ? prev - 1 : 5))
                    }
                  >
                    <img
                      className="botao-passar"
                      src="botao-esquerda.svg"
                      alt=""
                    />
                  </button>

                  <p className="numeros">{conjuntoOriginal + 1} / 6</p>

                  <button
                    className="seta-botao-img"
                    onClick={() =>
                      setConjuntoOriginal((prev) => (prev < 5 ? prev + 1 : 0))
                    }
                  >
                    <img
                      className="botao-passar"
                      src="botao-direitaa.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {modalAberto && (
        <Modal
          plataforma={plataformaAtual}
          imagemInicial={imagemAtual}
          onClose={() => setModalAberto(false)}
        />
      )}
    </section>
  );
};
