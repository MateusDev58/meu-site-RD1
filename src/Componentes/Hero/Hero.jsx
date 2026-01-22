import "./Hero.css";
import "./HeroResponsividade.css";

const Hero = () => {
  return (
    <>
      <section className="caixa-hero">
        <div className="hero-ratio"></div>

        <div className="hero-bg"></div>

        <div className="caixa-john">
          <img
            className="john-marston"
            src="/john-marston-hero.png"
            alt="John Marston"
          />

          <img
            className="john-mobile"
            src="/john-marston-celular.png"
            alt="John Marston"
          />
        </div>

        <div className="caixa-logo">
          <img
            className="logo-red-dead-hero-img"
            src="/logo-red-dead.svg"
            alt="logo red dead"
          />

          <div className="caixa-botao">
            <a className="compre-ja-hero" href="#Compre-ja">
              Compre já
            </a>

            <a
              className="ver-trailer"
              href="https://www.youtube.com/watch?v=SlkizyzZ8k4"
              target="_blank"
            >
              <span>
                <img
                  className="icone-play-img"
                  src="icone-play.svg"
                  alt="icone play"
                />
              </span>
              Ver trailer
            </a>
          </div>
        </div>

        <div className="hero-container">
          <div className="caixa-plataforma">
            <p className="ja-disponivel">
              Já disponível para PlayStation 5, Xbox Series X|S, Nintendo Switch
              2, PC, iOS, Android e Netflix.
            </p>

            <p className="ja-disponivel">
              Também disponível para Nintendo Switch, PlayStation 4 e Xbox One
              (via retrocompatibilidade).
            </p>
          </div>
        </div>
      </section>

      {/*  BLOCO MOBILE SEPARADO  */}
      <section>
        <div className="caixa-plataforma-celular">
          <a className="compre-ja-hero" href="#Compre-ja">
            Compre já
          </a>

          <a
            className="ver-trailer"
            href="http://localhost:5173/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className="icone-play-img"
                src="icone-play.svg"
                alt="icone play"
              />
            </span>
            ver trailer
          </a>

          <div className="caixa-plataforma-texto">
            <p className="plataformas-disponivel-p">
              Já disponível para PlayStation 5, Xbox Series X|S, Nintendo Switch
              2, PC, iOS, Android e Netflix.
            </p>

            <p className="plataformas-disponivel-p">
              Também disponível para Nintendo Switch, PlayStation 4 e Xbox One
              (via retrocompatibilidade).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
