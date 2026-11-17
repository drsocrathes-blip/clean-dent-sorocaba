import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Rotulo, Simbolo } from "@/components/Simbolo";

const TITULO = "Clean Dent Odontologia";
const DESCRICAO =
  "Clínica odontológica em Sorocaba desde 1998. Humanodontia: dentística, periodontia, ortodontia e implantodontia. Agende sua avaliação pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA =
  "https://wa.me/5515997828613?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Clean%20Dent.";
const WA_DUVIDA =
  "https://wa.me/5515997828613?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20um%20tratamento.";
const NOVA_ABA = { target: "_blank", rel: "noopener noreferrer" } as const;

const MENU = [
  { id: "humanodontia", rotulo: "Humanodontia" },
  { id: "clinica", rotulo: "A clínica" },
  { id: "tratamentos", rotulo: "Tratamentos" },
  { id: "tecnologia", rotulo: "Tecnologia" },
  { id: "equipe", rotulo: "Equipe" },
  { id: "estrutura", rotulo: "Estrutura" },
  { id: "contato", rotulo: "Contato" },
];

const GALERIA = [
  { src: "img/entrada.webp", alt: "Recepção com poltrona, janela ampla e porta de vidro com o símbolo da Clean Dent", legenda: "Recepção" },
  { src: "img/consultorio-1.webp", alt: "Consultório com cadeira odontológica azul e monitor", legenda: "Consultório" },
  { src: "img/consultorio-3.webp", alt: "Consultório com cadeira odontológica bordô e armários", legenda: "Consultório" },
  { src: "img/escritorio.webp", alt: "Sala com quadro de paisagem e mesa com dois monitores", legenda: "Sala de planejamento" },
  { src: "img/sala-conversa.webp", alt: "Sala clara com mesa branca e flores", legenda: "Sala de conversa" },
  { src: "img/esterilizacao.webp", alt: "Bancada de inox e autoclaves na área de esterilização", legenda: "Esterilização" },
];

const EQUIPE_CORPO = [
  {
    src: "img/avatar-dr-mario.jpg",
    alt: "Dr. Mario Cezar",
    nome: "Dr. Mario Cezar",
    funcao: "Clínica geral, implantodontia e prótese",
    cro: "CRO-SP 159583",
  },
  {
    src: "img/avatar-dr-rafael.jpg",
    alt: "Dr. Rafael Spada",
    nome: "Dr. Rafael Spada",
    funcao: "Dentística e reabilitação oral",
    cro: "CRO-SP 104948",
  },
  {
    src: "img/avatar-dr-jose-augusto.jpg",
    alt: "Dr. José Augusto Sobral",
    nome: "Dr. José Augusto Sobral",
    funcao: "Prótese dentária",
    cro: "CRO-SP 141281",
  },
];

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function Index() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState<string | null>(null);
  const [foto, setFoto] = useState<number | null>(null);
  const [copiado, setCopiado] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const secoes = MENU.map((m) => document.getElementById(m.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secoes.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (foto === null) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFoto(null);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [foto]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copiar = async () => {
    const numero = "(15) 99782-8613";
    try {
      await navigator.clipboard.writeText(numero);
    } catch {
      const t = document.createElement("textarea");
      t.value = numero;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopiado(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopiado(false), 1800);
  };

  const fotoAtual = foto !== null ? GALERIA[foto] : null;

  return (
    <>
      <div className="faixa" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
      <header className={`topo${rolou ? " rolou" : ""}${aberto ? " aberto" : ""}`} id="topo">
        <div className="wrap">
          <a className="marca" href="#inicio" aria-label="Clean Dent, início">
            <img src="img/logo-colorida.png" alt="Clean Dent®" />
          </a>
          <nav className="menu" id="menu" aria-label="Principal">
            {MENU.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={ativo === m.id ? "ativo" : undefined}
                onClick={() => setAberto(false)}
              >
                {m.rotulo}
              </a>
            ))}
          </nav>
          <div className="lado">
            <a className="btn btn-primario" href={WA} {...NOVA_ABA}>
              Agendar
            </a>
            <button
              className="abrir-menu"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
              aria-controls="menu"
              onClick={() => setAberto((v) => !v)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="wrap">
            <Simbolo className="hero-simbolo" size={44} />
            <span className="rotulo">Clínica odontológica em Sorocaba · desde 1998</span>
            <h1>
              Aqui você é atendido como <em>pessoa</em>, não só como um paciente.
            </h1>
            <p className="lead">
              Tecnologia avançada, atendimento próximo e explicações claras, com tratamentos
              pensados para durar. É assim que a Clean Dent cuida de famílias de Sorocaba há mais
              de 25 anos.
            </p>
            <div className="acoes">
              <a className="btn btn-primario" href={WA} {...NOVA_ABA}>
                Agendar avaliação pelo WhatsApp
              </a>
              <a className="btn btn-linha" href="#tratamentos">
                Ver tratamentos
              </a>
            </div>
          </div>
        </section>

        <div className="fatos">
          <div className="wrap">
            <div className="fato">
              <strong>Desde 1998</strong>
              <span>cuidando de sorrisos</span>
            </div>
            <div className="fato">
              <strong>USP-Bauru</strong>
              <span>formação dos fundadores</span>
            </div>
            <div className="fato">
              <strong>4 áreas</strong>
              <span>de atendimento</span>
            </div>
            <div className="fato">
              <strong>Jardim Paulistano</strong>
              <span>Rua Perdizes, 87</span>
            </div>
          </div>
        </div>

        <section className="secao humano" id="humanodontia">
            <Simbolo variante="branco" className="marca-dagua" />
          <div className="wrap">
            <Rotulo variante="branco">Humanodontia</Rotulo>
            <h2>
              Cuidar da saúde bucal com a mesma atenção que se dá a uma <em>pessoa</em>, não só a
              um dente.
            </h2>
            <div className="pilares">
              <div className="pilar">
                <h3>Experiência</h3>
                <p>
                  Fundadores formados pela USP-Bauru, com pós-graduação e mais de 25 anos de
                  clínica em Sorocaba.
                </p>
              </div>
              <div className="pilar">
                <h3>Tecnologia</h3>
                <p>
                  Aparelhos modernos de diagnóstico e tratamento, para mais precisão e conforto em
                  cada etapa.
                </p>
              </div>
              <div className="pilar">
                <h3>Acolhimento</h3>
                <p>
                  Cada paciente é recebido e acompanhado de perto, da primeira consulta até depois
                  do tratamento.
                </p>
              </div>
              <div className="pilar">
                <h3>Cuidado que dura</h3>
                <p>Procedimentos práticos e eficazes, sem manutenções desnecessárias.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="secao sobre" id="clinica">
          <div className="wrap">
            <figure>
              <img
                src="img/dr-taka-retrato.webp"
                alt="Dr. Takayuki Oizumi, sorrindo, de terno escuro"
              />
              <figcaption>
                Dr. Takayuki Oizumi, fundador e responsável técnico da Clean Dent.
              </figcaption>
            </figure>
            <div className="texto">
              <Rotulo>A clínica</Rotulo>
              <h2>Uma clínica que conhece cada paciente pelo nome.</h2>
              <p>
                A Clean Dent nasceu em 1998 da ideia que hoje a gente chama de{" "}
                <strong>humanodontia</strong>: olhar para quem está na cadeira antes de olhar para
                o dente. Mais de duas décadas depois, muitos pacientes trazem os filhos e os netos.
              </p>
              <p>
                Cada etapa é explicada antes de começar, sem pressa e sem termos difíceis. Assim
                você entende o que está sendo feito e decide com tranquilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="secao tratamentos" id="tratamentos">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Tratamentos</Rotulo>
              <h2>O que a gente faz.</h2>
              <p>
                Todo tratamento começa com uma avaliação presencial, para indicar o que faz
                sentido para você.
              </p>
            </div>
            <div className="lista-trat">
              <article className="trat">
                <h3>Dentística</h3>
                <span className="simples">Restaurações e recuperação dos dentes</span>
                <p>
                  Trata cáries, dentes quebrados ou desgastados, devolvendo forma, cor e função.
                </p>
              </article>
              <article className="trat">
                <h3>Periodontia</h3>
                <span className="simples">Saúde da gengiva</span>
                <p>
                  Cuida da gengiva e do osso que sustentam os dentes. Gengiva que sangra ao escovar
                  merece uma avaliação.
                </p>
              </article>
              <article className="trat">
                <h3>Ortodontia</h3>
                <span className="simples">Alinhamento dos dentes e da mordida</span>
                <p>
                  Corrige dentes tortos e o encaixe da mordida, o que ajuda na mastigação e na
                  limpeza.
                </p>
              </article>
              <article className="trat">
                <h3>Implantodontia</h3>
                <span className="simples">Reposição de dentes perdidos</span>
                <p>
                  O implante substitui a raiz do dente perdido e recebe uma coroa por cima.
                  Indicado após avaliação com exames.
                </p>
              </article>
            </div>
            <div className="outros">
              <Rotulo as="h3">Outros serviços</Rotulo>
              <div className="lista-trat lista-outros">
                {[
                  ["Odontologia do estilo de vida", "Saúde bucal ligada à rotina", "Olha para a boca junto com os hábitos do dia a dia, como alimentação, sono e estresse, para prevenir problemas e manter os resultados."],
                  ["Laudos odontológicos", "Documentos técnicos", "Laudos e pareceres sobre a saúde bucal do paciente, para fins clínicos, trabalhistas, de seguro ou judiciais."],
                  ["Canabidiol na odontologia", "Prescrição com acompanhamento", "Avaliação e prescrição de canabidiol quando houver indicação clínica, com acompanhamento do dentista e conforme as normas da Anvisa."],
                ].map(([t, l, p]) => (
                  <article className="trat" key={t}>
                    <h3>{t}</h3>
                    <span className="simples">{l}</span>
                    <p>{p}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="trat-nota">
              Dúvida sobre qual é o seu caso?{" "}
              <a className="link" href={WA_DUVIDA} {...NOVA_ABA}>
                Fale com a clínica pelo WhatsApp
              </a>
            </p>
          </div>
        </section>

        <section className="secao tecnologia" id="tecnologia">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Tecnologia</Rotulo>
              <h2>Equipamentos modernos a serviço do seu tratamento.</h2>
              <p>
                Equipamentos modernos de diagnóstico e tratamento, para mais precisão e conforto
                em cada etapa.
              </p>
            </div>
          </div>
        </section>

        <section className="secao jornada">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Como funciona</Rotulo>
              <h2>Do primeiro contato ao acompanhamento.</h2>
            </div>
            <ol className="passos">
              <li className="passo">
                <h3>Contato</h3>
                <p>Você chama no WhatsApp e escolhe o melhor dia e horário.</p>
              </li>
              <li className="passo">
                <h3>Avaliação</h3>
                <p>Consulta presencial para examinar com calma e ouvir o que você sente e espera.</p>
              </li>
              <li className="passo">
                <h3>Plano explicado</h3>
                <p>As opções, as etapas e o tempo de cada uma, em linguagem simples.</p>
              </li>
              <li className="passo">
                <h3>Acompanhamento</h3>
                <p>Retornos depois do tratamento para manter o resultado.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="secao equipe" id="equipe">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Equipe</Rotulo>
              <h2>Quem cuida de você.</h2>
            </div>
            <div className="fundadores">
              <article className="dentista">
                <div className="avatar avatar-iniciais" aria-hidden="true">TM</div>
                <div>
                  <h3>Dra. Tânia Medrano</h3>
                  <p className="funcao">Fundadora</p>
                  <p className="cro">CRO-SP 26179</p>
                  <ul className="bio-lista">
                    <li>Cirurgiã-dentista formada pela USP-Bauru (1982)</li>
                    <li>Pós-graduada em Periodontia pela USP-Bauru</li>
                    <li>Pós-graduada pela Faculdade São Leopoldo Mandic</li>
                  </ul>
                </div>
              </article>
              <article className="dentista">
                <img className="avatar" src="img/avatar-dr-taka.webp" alt="Dr. Takayuki Oizumi" />
                <div>
                  <h3>Dr. Takayuki Oizumi</h3>
                  <p className="funcao">Fundador e responsável técnico</p>
                  <p className="cro">CRO-SP 23827</p>
                  <ul className="bio-lista">
                    <li>Cirurgião-dentista formado pela USP-Bauru (1981)</li>
                    <li>
                      Especialista em Ortopedia Funcional dos Maxilares e Ortodontia (SPO, Sociedade
                      Paulista de Ortodontia)
                    </li>
                    <li>Pós-graduado em Prótese pela USP-Bauru</li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="corpo">
              {EQUIPE_CORPO.map((d) => (
                <article className="dentista" key={d.nome}>
                  <img className="avatar" src={d.src} alt={d.alt} />
                  <div>
                    <h3>{d.nome}</h3>
                    <p className="funcao">{d.funcao}</p>
                    <p className="cro">{d.cro}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao estrutura" id="estrutura">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Estrutura</Rotulo>
              <h2>Um espaço tranquilo, pensado para o seu conforto.</h2>
              <p>Recepção ampla, consultórios bem iluminados e área de esterilização própria.</p>
            </div>
            <div className="galeria">
              {GALERIA.map((g, i) => (
                <button key={g.src} type="button" onClick={() => setFoto(i)}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <span>{g.legenda}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="secao contato" id="contato">
          <div className="wrap">
            <div className="cabeca">
              <Rotulo>Contato</Rotulo>
              <h2>Venha nos visitar.</h2>
              <p>
                O agendamento é feito pelo WhatsApp. A gente responde e combina o melhor horário
                para você.
              </p>
              <div className="acoes">
                <a className="btn btn-primario" href={WA} {...NOVA_ABA}>
                  Agendar pelo WhatsApp
                </a>
                <a
                  className="btn btn-linha"
                  href="https://www.google.com/maps/search/?api=1&query=Rua%20Perdizes%2C%2087%2C%20Jardim%20Paulistano%2C%20Sorocaba%20SP"
                >
                  Como chegar
                </a>
              </div>
            </div>
            <dl className="dados">
              <div className="dado">
                <dt>Endereço</dt>
                <dd>
                  Rua Perdizes, 87, Jardim Paulistano
                  <br />
                  Sorocaba/SP
                </dd>
              </div>
              <div className="dado">
                <dt>WhatsApp</dt>
                <dd>
                  (15) 99782-8613
                  <button className="copiar" type="button" onClick={copiar}>
                    {copiado ? "Copiado" : "Copiar"}
                  </button>
                </dd>
              </div>
              <div className="dado">
                <dt>Instagram</dt>
                <dd>
                  <a className="link" href="https://www.instagram.com/cleandentodonto/">
                    @cleandentodonto
                  </a>
                </dd>
              </div>
              <div className="dado">
                <dt>Horários</dt>
                <dd>
                  Segunda a sexta
                  <br />
                  8h às 12h e 14h às 18h45
                  <br />
                  <span style={{ color: "var(--cinza)", fontSize: 15 }}>
                    Sábados, domingos e feriados: fechado
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="wrap">
          <div className="grade">
            <div>
              <img src="img/logo-negativa.png" alt="Clean Dent®" />
              <p style={{ marginTop: 18 }}>Humanodontia em Sorocaba desde 1998.</p>
            </div>
            <div>
              <h4>Visite</h4>
              <p>
                Rua Perdizes, 87
                <br />
                Jardim Paulistano, Sorocaba/SP
                <br />
                Segunda a sexta, 8h às 12h e 14h às 18h45
              </p>
            </div>
            <div>
              <h4>Fale com a gente</h4>
              <p>
                WhatsApp (15) 99782-8613
                <br />
                <a href="https://www.instagram.com/cleandentodonto/">@cleandentodonto</a>
              </p>
            </div>
          </div>
          <div className="legal">
            <span>Clean Dent® · Responsável técnico: Dr. Takayuki Oizumi, CRO-SP 23827</span>
            <span>Site desenvolvido por NEXO.MEDIA</span>
          </div>
        </div>
      </footer>

      <a className="flutuante" href={WA} {...NOVA_ABA} aria-label="Agendar pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={WHATSAPP_PATH} />
        </svg>
      </a>

      {fotoAtual && (
        <div
          className="visor"
          role="dialog"
          aria-modal="true"
          aria-label={fotoAtual.legenda}
          onClick={(e) => {
            if (e.target === e.currentTarget) setFoto(null);
          }}
        >
          <button type="button" aria-label="Fechar" onClick={() => setFoto(null)} autoFocus>
            ×
          </button>
          <figure onClick={(e) => e.target === e.currentTarget && setFoto(null)}>
            <img src={fotoAtual.src} alt={fotoAtual.alt} />
            <p>{fotoAtual.legenda}</p>
          </figure>
        </div>
      )}
    </>
  );
}
