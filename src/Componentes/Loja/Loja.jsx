import "./Loja.css";
import "./LojaResponsividade.css";

export const Loja = () => {
  return (
    <section className="caixa-loja" id="Compre-ja">
      <div className="caixa-loja-conteudo">
        <div className="caixa-adquira">
          <h2 className="adquira-h2">Adquira o jogo</h2>

          <p className="texto-loja">
            Red Dead Redemption contém a experiência para um jogador de Red Dead
            Redemption e de Undead Nightmare, além de conteúdo bônus da Edição
            Game of the Year e muito mais: não inclui conteúdo multijogador.
          </p>

          <p className="texto-loja">
            O jogo está disponível para compra pelos links abaixo. Quem já
            possui o jogo para PlayStation 4, Nintendo Switch ou a versão
            digital com retrocompatibilidade no Xbox One pode fazer a
            atualização digital gratuitamente. As versões para dispositivos
            móveis estão disponíveis gratuitamente para assinantes ativos da
            Netflix.
          </p>

          <h2 className="compre-ja-loja-h2">Compre já</h2>

          <div className="caixa-lojas-plataformas">
            <a
              className="lojas-plataformas"
              data-plataforma="pc"
              href="https://store.rockstargames.com/game/buy-red-dead-redemption?_gl=1*t3m0k7*_ga*NTE2ODY2MjQzLjE3NDQzMzQ0NjY.*_ga_PJQ2JYZDQC*czE3Njg1MDgzOTkkbzI5NiRnMSR0MTc2ODUxMDc2NiRqNjAkbDAkaDA."
              target="_blank"
            >
              <img className="logo-pc-img" src="/pc-loja.svg" alt="img pc" />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="netflix"
              href="https://www.netflix.com/game/81757508"
              target="_blank"
            >
              <img
                className="logo-netflix-games"
                src="/netflix-games-loja.svg"
                alt="img netflix games"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="ps5"
              href="http://playstation.com/games/red-dead-redemption"
              target="_blank"
            >
              <img
                className="logo-ps4-e-ps4-img"
                src="/ps5-loja.svg"
                alt="img ps5"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="ps4"
              href="http://playstation.com/games/red-dead-redemption"
              target="_blank"
            >
              <img
                className="logo-ps4-e-ps4-img"
                src="/ps4-loja.svg"
                alt="img ps4"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="xboxseries"
              href="https://www.microsoft.com/store/productid/9p5b3zvdk19d"
              target="_blank"
            >
              <img
                className="logo-xbox-series-img"
                src="/xbox-loja.svg"
                alt="img xbox series x|s"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="xbox"
              href="https://www.microsoft.com/store/productid/9p5b3zvdk19d"
              target="_blank"
            >
              <img
                className="logo-xbox"
                src="/xbox-2-loja.svg"
                alt="img xbox"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="switch2"
              href="https://www.nintendo.com/store/products/red-dead-redemption-nintendo-switch-2-edition-switch-2/"
              target="_blank"
            >
              <img
                className="logo-nintendo-switch-2-img"
                src="/nintendo-switch-2-loja.svg"
                alt="img nintendo switch 2"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="switch"
              href="https://www.nintendo.com/us/store/products/red-dead-redemption-switch/"
              target="_blank"
            >
              <img
                className="logo-switch-img"
                src="/nintendo-switch-loja.svg"
                alt="img nintendo switch"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="appstore"
              href="https://apps.apple.com/app/red-dead-redemption/id6746390893"
              target="_blank"
            >
              <img
                className="logo-app-store-img"
                src="/app-store-loja.svg"
                alt="img app store loja"
              />
            </a>

            <a
              className="lojas-plataformas"
              data-plataforma="googleplay"
              href="https://play.google.com/store/apps/details?id=com.rockstargames.rdr"
              target="_blank"
            >
              <img
                className="logo-google-play"
                src="/google-play-loja.svg"
                alt="img google play"
              />
            </a>
          </div>
        </div>

        <div className="caixa-rdr-e-undead-nightmare">
          <img
            className="capa-red-dead-redemption-e-undead-nightmare"
            src="/capa-red-dead-redemption-e-undead-nightmare.jpg"
            alt="capa red dead img"
          />
        </div>
      </div>
    </section>
  );
};
