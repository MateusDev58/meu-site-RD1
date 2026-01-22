import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Hero from "./Componentes/Hero/Hero";
import EpicaAventura from "./Componentes/EpicaAventura/EpicaAventura";
import { Imagens } from "./Componentes/Imagens/Imagens";
import { Destaque } from "./Componentes/Destaque/Destaque";
import { Loja } from "./Componentes/Loja/Loja";
import { Explore } from "./Componentes/explore/explore";
import { Footer } from "./Componentes/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <nav>
          <Cabecalho />
        </nav>
      </header>

      <section>
        <Hero />
      </section>

      <section>
        <EpicaAventura />
      </section>

      <section>
        <Imagens />
      </section>

      <section>
        <Destaque />
      </section>

      <section>
        <Loja />
      </section>

      <section>
        <Explore />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
