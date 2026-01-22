import "./Footer.css";
import "./FooterResponsividade.css";

export const Footer = () => {
  return (
    <section className="caixa-footer">
      <div className="caixa-conteudo-footer">
        <ul>
          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/contact"
              target="_blank"
            >
              Contato
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/careers"
              target="_blank"
            >
              Carreira
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/community-resources"
              target="_blank"
            >
              Recursos da Comunidade
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://socialclub.rockstargames.com/settings/email?_gl=1*twcmys*_ga*NTE2ODY2MjQzLjE3NDQzMzQ0NjY.*_ga_PJQ2JYZDQC*czE3Njg5MTc2NTMkbzMxOCRnMSR0MTc2ODkxNzc0MyRqNjAkbDAkaDA."
              target="_blank"
            >
              Inscrever-se
            </a>
          </li>
        </ul>

        <ul className="lista-rede-social-ul">
          <li className="lista-rede-social-li">
            <a href="https://instagram.com/rockstargames" target="_blank">
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/instagram/ffffff"
                alt="Instagram"
              />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/x/ffffff"
                alt="X (Twitter)"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/youtube/ffffff"
                alt="YouTube"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/facebook/ffffff"
                alt="Facebook"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/tiktok/ffffff"
                alt="TikTok"
              />
            </a>
          </li>

          <li>
            <a
              href="https://discord.gg/rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/discord/ffffff"
                alt="Discord"
              />
            </a>
          </li>

          <li>
            <a
              href="https://twitch.tv/rockstargames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imagem-rede-social"
                src="https://cdn.simpleicons.org/twitch/ffffff"
                alt="Twitch"
              />
            </a>
          </li>
        </ul>

        <ul>
          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/corpinfo"
              target="_blank"
            >
              Corporativo
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/privacy"
              target="_blank"
            >
              Privacidade
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/cookies"
              target="_blank"
            >
              Política de cookies
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/legal"
              target="_blank"
            >
              Aviso legal
            </a>
          </li>

          <li className="lista-footer-li">
            <a
              className="lista-footer-a"
              href="https://www.rockstargames.com/br/ccpa"
              target="_blank"
            >
              Não vendam ou compartilhem minhas informações pessoais
            </a>
          </li>
        </ul>

        <div className="caixa-Rockstar-footer">
          <p className="cidades-p">Rockstar Games</p>

          <div className="caixa-cidades">
            <p className="cidades-p">Nova York</p>
            <p className="cidades-p">Londres</p>
            <p className="cidades-p">Paris</p>
            <p className="cidades-p">Bogotá</p>
          </div>

          <p className="cidades-p">MCMXCVIII</p>
        </div>
      </div>
    </section>
  );
};
