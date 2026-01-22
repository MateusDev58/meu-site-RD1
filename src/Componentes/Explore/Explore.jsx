import "./Explore.css";
import "./ExploreResponsividade.css";

export const Explore = () => {
  return (
    <section className="caixa-explore">
      <div className="caixa-conteudo-explore">
        <div>
          <h2 className="explore-mais-h2">Explore mais</h2>
        </div>
        <div class="caixa-produtos">
          {/* card 1 */}

          <a
            class="produto-card"
            href="https://store.rockstargames.com/pt-br/red-dead-redemption-collection?_gl=1*itc8ky*_ga*NTE2ODY2MjQzLjE3NDQzMzQ0NjY.*_ga_PJQ2JYZDQC*czE3Njg3NzI1MTAkbzMwNyRnMSR0MTc2ODc3MzAyOSRqNTkkbDAkaDA."
            target="_blank"
          >
            <img
              className="produto-explore-img"
              src="/camisa-redemption.jpg"
              alt="camisa img"
            />

            <span class="span-explore">
              Confira os produtos de <br /> Red Dead
            </span>
          </a>

          {/* card 2 */}

          <a class="produto-card" href="https://lnk.to/RDROST" target="_blank">
            <img
              className="produto-explore-img"
              src="/img-john-trilha-sonora.jpg"
              alt="trilha sonora"
            />

            <span class="span-trilha-sonora">
              Ouça a trilha sonora <br /> original
            </span>
          </a>

          {/* card 3 */}

          <a
            class="produto-card"
            href="https://www.rockstargames.com/br/downloads?collection=3&series=34"
            target="_blank"
          >
            <img
              className="produto-explore-img"
              src="/img-baixa-artes.jpg"
              alt="camisa img"
            />

            <span class="span-artes">Baixe artes</span>
          </a>
        </div>
      </div>

      <div className="caixa-18">
        <a
          className="caixa-link-18"
          href="https://www.esrb.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-18"
            src="/img-ESRB.svg"
            alt="Classificação ESRB Mature 17+"
          />

          <p className="sangue">
            Sangue e Gore, Violência Intensa, Nudez, Linguagem Forte, Conteúdo
            Sexual Explícito, Uso de Drogas.
          </p>
        </a>
      </div>
    </section>
  );
};
