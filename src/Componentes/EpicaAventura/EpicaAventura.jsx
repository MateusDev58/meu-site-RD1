import "./EpicaAventura.css";
import "./EpicaAventuraResponsividade.css";

const EpicaAventura = () => {
  return (
    <>
      <section className="caixa-epica-aventura">
        {/* CAIXA 1 */}
        <div className="caixa-1">
          <div className="hero-media">
            <img
              className="personagem-epica"
              src="/Bonnie-MacFarlane.png"
              alt="Bonnie MacFarlane"
            />
          </div>

          <div className="caixa-conteudo">
            <div className="caixa-texto-epica">
              <h1 className="titulo-h2">
                Vivencie a épica aventura no Oeste que marcou uma geração
              </h1>

              <p className="texto-epica-p">
                Faça uma jornada pelos vastos campos do Oeste dos Estados Unidos
                e do México em Red Dead Redemption e na expansão de terror de
                zumbis Undead Nightmare – agora disponíveis para jogar nas
                plataformas modernas.
              </p>
            </div>
          </div>
        </div>

        {/* CAIXA 2 */}
        <div className="caixa-2">
          <div className="hero-media">
            <img
              className="personagem-epica"
              src="/john-marston-epica-aventura.png"
              alt="John Marston"
            />
          </div>

          <div className="caixa-conteudo">
            <div className="caixa-texto-epica">
              <img
                className="logo-red-dead-epica"
                src="/logo-red-dead-epica-aventura.svg"
                alt="logo red dead"
              />

              <p className="texto-epica-p">
                Quando a família do ex-fora da lei John Marston é ameaçada por
                agentes federais, ele é obrigado a caçar a gangue de criminosos
                formada pelos seus antigos amigos. Explore os eventos
                subsequentes ao blockbuster de 2018 Red Dead Redemption 2 na
                aclamada história da jornada de John Marston, na qual ele luta
                para enterrar o próprio passado de violência a cada inimigo
                derrotado.
              </p>
            </div>
          </div>
        </div>

        {/* CAIXA 3 */}
        <div className="caixa-3">
          <div className="hero-media">
            <img
              className="personagem-epica"
              src="/john-marston-zumbi.png"
              alt="John Marston zumbi"
            />
          </div>

          <div className="caixa-conteudo">
            <div className="caixa-texto-epica">
              <img
                className="logo-red-dead-undead-nightmare"
                src="/logo-undead-nightmare.svg"
                alt="logo red dead undead nightmare"
              />

              <p className="texto-epica-p">
                Quando o ex-fora da lei John Marston acorda em sua fazenda, ele
                descobre que o mundo enlouqueceu: da noite para o dia, hordas
                enlouquecidas infestaram as cidades e os postos avançados da
                fronteira americana. Na tentativa desesperada de salvar sua
                família, Marston deve atravessar um mundo devastado pelo caos e
                pela desordem, usando todas as suas habilidades para sobreviver
                tempo suficiente para encontrar uma cura.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EpicaAventura;
