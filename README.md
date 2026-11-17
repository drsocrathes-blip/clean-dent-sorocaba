# Clean Dent Sorocaba

Recrie fielmente o site institucional da Clean Dent (clínica odontológica em Sorocaba/SP) a partir do HTML e CSS completos que estão no final desta mensagem.

REGRAS
1. Site de uma página só, 100% estático: React + Vite + Tailwind, sem banco de dados, sem login, sem backend, sem Supabase. O resultado do build (pasta dist) será hospedado na HostGator, então nada pode depender de servidor da Lovable. Use caminhos relativos nos assets (base './' no Vite).
2. Mantenha exatamente os textos, a ordem das seções, as cores, as fontes (Fraunces e Plus Jakarta Sans pelo Google Fonts), os tamanhos, os espaçamentos e os pontos de quebra responsivos do CSS abaixo. Pode converter para Tailwind ou manter o CSS em um arquivo próprio, o que for mais fiel. Não reescreva, não resuma e não acrescente nenhum texto.
3. Os trechos com a classe "pendente" (fundo amarelo) e os espaços "Foto" são reservas de propósito para conteúdo que ainda vai chegar: mantenha como estão.
4. Comportamentos:
   - Menu fixo no topo (sticky). Em telas até 960px os links somem e aparece um botão redondo de três linhas que abre o menu em lista abaixo do topo; ao clicar num link o menu fecha. O ícone vira um X quando aberto.
   - O link do menu correspondente à seção visível fica destacado (linha magenta embaixo no desktop; texto magenta no mobile), usando IntersectionObserver com rootMargin '-45% 0px -50% 0px'.
   - O topo ganha uma linha de sombra fina (classe "rolou") quando a página rola mais de 8px.
   - Galeria: ao clicar numa foto, abre um visor em tela cheia (fundo grafite 94%) com a foto e a legenda; fecha com o botão ×, clicando fora ou com Esc.
   - Botão "Copiar" ao lado do WhatsApp copia "(15) 99782-8613" e mostra "Copiado" por 1,8s.
   - Botão flutuante redondo de WhatsApp no canto inferior direito, com o ícone oficial do WhatsApp em branco sobre o turquesa profundo #0A7D76.
5. Imagens: baixe cada arquivo abaixo e salve em public/img com o nome indicado. São originais em alta resolução; otimize para web (largura máxima 1600px, logos em PNG transparente). Se não conseguir baixar, use a URL diretamente e me avise.
- img/logo-colorida.png → https://lh3.googleusercontent.com/d/1Ep2XhLdVlzuWPfrxNFRQmqhnlpVQGZHJ=w2000
- img/logo-negativa.png → https://lh3.googleusercontent.com/d/1W9ypDak8I3rs-OJJGdh7frnzIGhEWVwC=w2000
- img/dr-taka-retrato.webp → https://lh3.googleusercontent.com/d/1Dl7IYd50jfgu0FHQ_fZRicoxJmWYK1vy=w2000
- img/avatar-dr-taka.webp → https://lh3.googleusercontent.com/d/1mZb5GCdpZn13AJQnjKLHmO5ZmSJhH5p9=w2000 (foto vertical; no círculo do avatar, recorte no rosto: object-fit cover, object-position 50% 22%, ou gere um recorte quadrado do rosto)
- img/entrada.webp → https://lh3.googleusercontent.com/d/1GDS1LCuPZVXedVciA8RVogqLhTjTv39k=w2000
- img/consultorio-1.webp → https://lh3.googleusercontent.com/d/1ttKOeLtCR4-ApD5zo78UAnqGJv-ZuddU=w2000
- img/consultorio-3.webp → https://lh3.googleusercontent.com/d/1MF1uwh8q3_BDjzvaPDVHo5gjNKdQc5D9=w2000
- img/escritorio.webp → https://lh3.googleusercontent.com/d/1m2EMZtGrMR3L2pohJ2pALTno8VkBCCk5=w2000
- img/sala-conversa.webp → https://lh3.googleusercontent.com/d/1igSiGHLm1y0P9G0N1OLOFX_kjSbjxzwU=w2000
- img/esterilizacao.webp → https://lh3.googleusercontent.com/d/1gdAlQIXGSBPjQ8GTgrbA3JC6SvLH-UO4=w2000
6. Idioma: português do Brasil (lang="pt-BR"). Título da página: "Clean Dent Odontologia". Meta description: "Clínica odontológica em Sorocaba desde 1998. Humanodontia: dentística, periodontia, ortodontia e implantodontia. Agende sua avaliação pelo WhatsApp."

CSS COMPLETO

:root{--magenta:#D20771;--magenta-escuro:#A8055A;--grafite:#1D2422;--cinza:#5B6864;--turquesa:#3DAFBB;--turquesa-prof:#0A7D76;--turquesa-claro:#7FD9CE;--areia:#E6E1D7;--creme:#FAF8F4;--branco:#FFFFFF;--texto-claro:#B9C2BF;--f-titulo:"Fraunces",Georgia,"Times New Roman",serif;--f-texto:"Plus Jakarta Sans",Arial,Helvetica,sans-serif;--max:1120px;color-scheme:light}
*{box-sizing:border-box}
html{scroll-behavior:smooth;background:var(--creme)}
body{margin:0;background:var(--creme);color:var(--grafite);font-family:var(--f-texto);font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
h1,h2,h3{font-family:var(--f-titulo);font-weight:400;line-height:1.15;text-wrap:balance;margin:0}
p{margin:0}
.wrap{max-width:var(--max);margin:0 auto;padding-left:24px;padding-right:24px}
.rotulo{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--turquesa-prof)}
:focus-visible{outline:2px solid var(--magenta);outline-offset:4px;border-radius:4px}
.btn{display:inline-flex;align-items:center;gap:10px;font:600 16px/1 var(--f-texto);text-decoration:none;border-radius:999px;padding:16px 28px;border:1.5px solid transparent;transition:background .2s,color .2s,border-color .2s;cursor:pointer}
.btn-primario{background:var(--turquesa-prof);color:var(--branco)}
.btn-primario:hover{background:#075E59}
.btn-linha{border-color:var(--areia);color:var(--grafite);background:transparent}
.btn-linha:hover{border-color:var(--grafite)}
.link{color:var(--turquesa-prof);font-weight:600;text-decoration:none;border-bottom:1.5px solid currentColor;padding-bottom:2px}
.link:hover{color:var(--magenta)}
.faixa{display:grid;grid-template-columns:1fr 2fr;height:6px}
.faixa span:first-child{background:var(--magenta)}
.faixa span:last-child{background:var(--turquesa-prof)}
.topo{position:sticky;top:0;z-index:50;background:rgba(250,248,244,.96);backdrop-filter:blur(8px)}
.topo .wrap{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-block:18px}
.topo .marca img{height:44px;width:auto}
.menu{display:flex;gap:34px;font-size:15px}
.menu a{text-decoration:none;color:var(--cinza);position:relative;padding-block:6px}
.menu a:hover{color:var(--grafite)}
.menu a.ativo{color:var(--grafite)}
.menu a.ativo::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:2px;background:var(--magenta)}
.topo .btn{padding:12px 20px;font-size:15px}
.topo.rolou{box-shadow:0 1px 0 var(--areia)}
.lado{display:flex;align-items:center;gap:10px}
.abrir-menu{display:none;width:46px;height:46px;border-radius:50%;border:1.5px solid var(--areia);background:transparent;cursor:pointer;place-items:center;padding:0}
.abrir-menu span{display:block;width:18px;height:1.5px;background:var(--grafite);position:relative;transition:transform .2s}
.abrir-menu span::before,.abrir-menu span::after{content:"";position:absolute;left:0;width:18px;height:1.5px;background:var(--grafite);transition:transform .2s}
.abrir-menu span::before{top:-6px}.abrir-menu span::after{top:6px}
.topo.aberto .abrir-menu span{background:transparent}
.topo.aberto .abrir-menu span::before{transform:translateY(6px) rotate(45deg)}
.topo.aberto .abrir-menu span::after{transform:translateY(-6px) rotate(-45deg)}
@media (max-width:960px){.abrir-menu{display:grid}.menu{display:none;position:absolute;left:0;right:0;top:100%;flex-direction:column;gap:0;background:var(--creme);border-bottom:1px solid var(--areia);box-shadow:0 18px 30px -24px rgba(29,36,34,.45);padding:4px 24px 12px}.topo.aberto .menu{display:flex}.menu a{padding:15px 0;border-top:1px solid var(--areia);font-size:17px;color:var(--grafite)}.menu a:first-child{border-top:0}.menu a.ativo::after{display:none}.menu a.ativo{color:var(--magenta)}}
@media (max-width:480px){.topo .marca img{height:36px}.topo .btn{padding:11px 16px;font-size:14px}}
.hero{padding-block:clamp(72px,11vw,140px) clamp(64px,9vw,112px);text-align:center}
.hero .wrap{display:flex;flex-direction:column;align-items:center;gap:28px}
.hero h1{font-size:clamp(40px,6.2vw,78px);letter-spacing:-.015em;max-width:15ch}
.hero h1 em{font-style:italic;color:var(--magenta)}
.hero .lead{font-size:clamp(18px,1.6vw,20px);color:var(--cinza);max-width:560px}
.hero .acoes{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:8px}
.fatos .wrap{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--areia);border-bottom:1px solid var(--areia)}
.fato{padding:30px 8px;text-align:center;min-width:0}
.fato strong{display:block;font-family:var(--f-titulo);font-weight:400;font-size:26px;line-height:1.2}
.fato span{font-size:14px;color:var(--cinza)}
@media (max-width:720px){.fatos .wrap{grid-template-columns:1fr 1fr}.fato:nth-child(-n+2){border-bottom:1px solid var(--areia)}}
.secao{padding-block:clamp(80px,10vw,128px)}
section{scroll-margin-top:84px}
.cabeca{max-width:620px;display:flex;flex-direction:column;gap:16px}
.cabeca h2{font-size:clamp(32px,4vw,46px)}
.cabeca p{color:var(--cinza);font-size:18px}
.humano{background:var(--grafite);color:var(--creme)}
.humano .rotulo{color:var(--turquesa-claro)}
.humano h2{font-size:clamp(30px,3.9vw,50px);max-width:22ch;margin-top:20px}
.humano h2 em{font-style:italic;color:var(--turquesa-claro)}
.pilares{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;margin-top:72px}
.pilar{border-top:2px solid var(--magenta);padding-top:28px;min-width:0}
.pilar:nth-child(2){border-color:var(--turquesa)}
.pilar:nth-child(3){border-color:var(--creme)}
.pilar h3{font-family:var(--f-texto);font-weight:700;font-size:20px;color:var(--creme)}
.pilar p{color:var(--texto-claro);font-size:16px;margin-top:10px}
@media (max-width:820px){.pilares{grid-template-columns:1fr;gap:36px;margin-top:52px}}
.sobre .wrap{display:grid;grid-template-columns:5fr 6fr;gap:clamp(40px,7vw,96px);align-items:center}
.sobre figure{margin:0}
.sobre img{width:100%;aspect-ratio:4/5;object-fit:cover;object-position:50% 18%}
.dupla{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.foto-vaga{aspect-ratio:4/5;background:var(--areia);display:grid;place-items:center;text-align:center;font-size:14px;font-weight:600;color:var(--cinza);line-height:1.4;padding:12px}
.sobre figcaption{font-size:14px;color:var(--cinza);margin-top:14px}
.sobre .texto{display:flex;flex-direction:column;gap:18px;min-width:0}
.sobre .texto h2{font-size:clamp(32px,4vw,46px);margin-bottom:6px}
.sobre .texto p{color:#3a4441}
@media (max-width:820px){.sobre .wrap{grid-template-columns:1fr}.sobre figure{max-width:420px}}
.tratamentos{border-top:1px solid var(--areia)}
.lista-trat{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;margin-top:64px}
.trat{border-top:2px solid var(--turquesa);padding-top:26px;display:flex;flex-direction:column;gap:10px;min-width:0}
.trat:nth-child(odd){border-color:var(--magenta)}
.trat h3{font-size:26px}
.trat .simples{font-size:15px;font-weight:600;color:var(--turquesa-prof);line-height:1.45}
.trat p{color:var(--cinza);font-size:16px}
.trat-nota{margin-top:56px;color:var(--cinza)}
@media (max-width:960px){.lista-trat{grid-template-columns:1fr 1fr;gap:44px 36px}}
@media (max-width:540px){.lista-trat{grid-template-columns:1fr}}
.jornada{background:var(--branco);border-block:1px solid var(--areia)}
.passos{list-style:none;margin:64px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:40px;counter-reset:p}
.passo{counter-increment:p;min-width:0}
.passo::before{content:counter(p,decimal-leading-zero);display:block;font-family:var(--f-titulo);font-size:40px;line-height:1;color:var(--magenta)}
.passo h3{font-family:var(--f-texto);font-weight:700;font-size:18px;margin-top:20px}
.passo p{color:var(--cinza);font-size:16px;margin-top:8px}
@media (max-width:860px){.passos{grid-template-columns:1fr 1fr;gap:44px 32px}}
@media (max-width:480px){.passos{grid-template-columns:1fr}}
.fundadores{display:grid;grid-template-columns:1fr 1fr;gap:56px;margin-top:64px}
.corpo{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-top:56px;padding-top:56px;border-top:1px solid var(--areia)}
.dentista{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start;min-width:0}
.avatar{width:112px;height:112px;border-radius:50%;object-fit:cover;background:var(--areia);display:grid;place-items:center;font:600 12px var(--f-texto);letter-spacing:.12em;text-transform:uppercase;color:var(--cinza);flex:none}
.corpo .avatar{width:88px;height:88px}
.dentista h3{font-size:26px}
.corpo .dentista h3{font-size:22px}
.dentista .funcao{font-size:15px;font-weight:600;color:var(--magenta);margin-top:6px}
.dentista .cro{font-size:14px;color:var(--cinza)}
.dentista .bio{color:#3a4441;font-size:16px;margin-top:14px}
.pendente{background:#FFF1C9;color:#5d4600;padding:0 5px}
@media (max-width:900px){.fundadores{grid-template-columns:1fr;gap:44px}.corpo{grid-template-columns:1fr 1fr;gap:40px 28px}}
@media (max-width:560px){.corpo{grid-template-columns:1fr}.avatar{width:88px;height:88px}}
.estrutura{border-top:1px solid var(--areia)}
.galeria{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:64px}
.galeria button{padding:0;border:0;background:var(--areia);cursor:zoom-in;display:block;min-width:0;text-align:left;color:inherit;font:inherit}
.galeria img{width:100%;aspect-ratio:3/2;object-fit:cover;transition:opacity .25s}
.galeria button:hover img{opacity:.88}
.galeria span{display:block;background:var(--creme);font-size:14px;color:var(--cinza);padding-top:10px}
@media (max-width:720px){.galeria{grid-template-columns:1fr 1fr;gap:12px}}
.visor{position:fixed;inset:0;z-index:100;background:rgba(29,36,34,.94);display:grid;place-items:center;padding:24px}
.visor img{max-height:80vh;width:auto}
.visor p{color:var(--texto-claro);text-align:center;margin-top:14px;font-size:15px}
.visor button{position:absolute;top:18px;right:18px;background:transparent;color:var(--creme);border:1px solid var(--texto-claro);width:44px;height:44px;border-radius:50%;font-size:22px;cursor:pointer}
.contato{background:var(--branco);border-top:1px solid var(--areia)}
.contato .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,7vw,96px);align-items:start}
.dados{margin:0;display:flex;flex-direction:column}
.dado{display:grid;grid-template-columns:120px 1fr;gap:16px;padding-block:18px;border-bottom:1px solid var(--areia);min-width:0}
.dado:first-child{border-top:1px solid var(--areia)}
.dado dt{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--cinza);padding-top:4px}
.dado dd{margin:0;min-width:0}
.copiar{margin-left:10px;font:600 13px var(--f-texto);color:var(--turquesa-prof);background:none;border:1px solid var(--areia);border-radius:999px;padding:3px 11px;cursor:pointer}
.contato .acoes{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
@media (max-width:820px){.contato .wrap{grid-template-columns:1fr}.dado{grid-template-columns:1fr;gap:2px}}
.rodape{background:var(--grafite);color:var(--texto-claro);font-size:15px}
.rodape .wrap{padding-block:64px 36px}
.rodape .grade{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px}
.rodape img{height:56px;width:auto}
.rodape h4{font:700 12px var(--f-texto);letter-spacing:.14em;text-transform:uppercase;color:var(--creme);margin:0 0 12px}
.rodape a{color:var(--texto-claro)}
.rodape a:hover{color:var(--creme)}
.rodape .legal{margin-top:48px;padding-top:24px;border-top:1px solid #344039;display:flex;flex-wrap:wrap;gap:10px 28px;justify-content:space-between;font-size:13px;color:#8f9a96}
@media (max-width:760px){.rodape .grade{grid-template-columns:1fr}}
.flutuante{position:fixed;right:20px;bottom:20px;z-index:70;width:56px;height:56px;border-radius:50%;background:var(--turquesa-prof);display:grid;place-items:center;box-shadow:0 10px 24px -10px rgba(29,36,34,.5)}
.flutuante svg{width:28px;height:28px;fill:var(--branco)}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}

HTML COMPLETO (WA = https://wa.me/5515997828613?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Clean%20Dent. — todos os links de WhatsApp abrem em nova aba)

<div class="faixa" aria-hidden="true"><span></span><span></span></div>
<header class="topo" id="topo">
  <div class="wrap">
    <a class="marca" href="#inicio" aria-label="Clean Dent, início"><img src="img/logo-colorida.png" alt="Clean Dent®"></a>
    <nav class="menu" id="menu" aria-label="Principal">
      <a href="#humanodontia">Humanodontia</a>
      <a href="#clinica">A clínica</a>
      <a href="#tratamentos">Tratamentos</a>
      <a href="#equipe">Equipe</a>
      <a href="#estrutura">Estrutura</a>
      <a href="#contato">Contato</a>
    </nav>
    <div class="lado">
      <a class="btn btn-primario" href="WA">Agendar</a>
      <button class="abrir-menu" aria-label="Abrir menu"><span></span></button>
    </div>
  </div>
</header>

<main id="inicio">
  <section class="hero"><div class="wrap">
    <span class="rotulo">Clínica odontológica em Sorocaba · desde 1998</span>
    <h1>Aqui você é atendido como <em>pessoa</em>, não só como um paciente.</h1>
    <p class="lead">Atendimento próximo, explicações claras e tratamentos pensados para durar. É assim que a Clean Dent cuida de famílias de Sorocaba há mais de 25 anos.</p>
    <div class="acoes">
      <a class="btn btn-primario" href="WA">Agendar avaliação pelo WhatsApp</a>
      <a class="btn btn-linha" href="#tratamentos">Ver tratamentos</a>
    </div>
  </div></section>

  <div class="fatos"><div class="wrap">
    <div class="fato"><strong>Desde 1998</strong><span>cuidando de sorrisos</span></div>
    <div class="fato"><strong>USP-Bauru</strong><span>formação dos fundadores</span></div>
    <div class="fato"><strong>4 áreas</strong><span>de atendimento</span></div>
    <div class="fato"><strong>Jardim Paulistano</strong><span>Rua Perdizes, 87</span></div>
  </div></div>

  <section class="secao humano" id="humanodontia"><div class="wrap">
    <span class="rotulo">Humanodontia</span>
    <h2>Cuidar da saúde bucal com a mesma atenção que se dá a uma <em>pessoa</em>, não só a um dente.</h2>
    <div class="pilares">
      <div class="pilar"><h3>Acolhimento</h3><p>Cada paciente é recebido e acompanhado de perto, da primeira consulta até depois do tratamento.</p></div>
      <div class="pilar"><h3>Cuidado que dura</h3><p>Procedimentos práticos e eficazes, sem manutenções desnecessárias.</p></div>
      <div class="pilar"><h3>Experiência</h3><p>Fundadores formados pela USP-Bauru, com mais de 25 anos de clínica em Sorocaba.</p></div>
    </div>
  </div></section>

  <section class="secao sobre" id="clinica"><div class="wrap">
    <figure>
      <div class="dupla">
        <img src="img/dr-taka-retrato.webp" alt="Dr. Takayuki Oizumi, sorrindo, de terno escuro">
        <div class="foto-vaga"><span>Foto da Dra. Tânia<br>e Dr. Taka</span></div>
      </div>
      <figcaption>Dr. Takayuki Oizumi e Dra. Tânia Medrano, fundadores da Clean Dent.</figcaption>
    </figure>
    <div class="texto">
      <span class="rotulo">A clínica</span>
      <h2>Uma clínica que conhece cada paciente pelo nome.</h2>
      <p>A Clean Dent nasceu em 1998 da ideia que hoje a gente chama de <strong>humanodontia</strong>: olhar para quem está na cadeira antes de olhar para o dente. Mais de duas décadas depois, muitos pacientes trazem os filhos e os netos.</p>
      <p>Cada etapa é explicada antes de começar, sem pressa e sem termos difíceis. Assim você entende o que está sendo feito e decide com tranquilidade.</p>
    </div>
  </div></section>

  <section class="secao tratamentos" id="tratamentos"><div class="wrap">
    <div class="cabeca">
      <span class="rotulo">Tratamentos</span>
      <h2>O que a gente faz.</h2>
      <p>Todo tratamento começa com uma avaliação presencial, para indicar o que faz sentido para você.</p>
    </div>
    <div class="lista-trat">
      <article class="trat"><h3>Dentística</h3><span class="simples">Restaurações e recuperação dos dentes</span><p>Trata cáries, dentes quebrados ou desgastados, devolvendo forma, cor e função.</p></article>
      <article class="trat"><h3>Periodontia</h3><span class="simples">Saúde da gengiva</span><p>Cuida da gengiva e do osso que sustentam os dentes. Gengiva que sangra ao escovar merece uma avaliação.</p></article>
      <article class="trat"><h3>Ortodontia</h3><span class="simples">Alinhamento dos dentes e da mordida</span><p>Corrige dentes tortos e o encaixe da mordida, o que ajuda na mastigação e na limpeza.</p></article>
      <article class="trat"><h3>Implantodontia</h3><span class="simples">Reposição de dentes perdidos</span><p>O implante substitui a raiz do dente perdido e recebe uma coroa por cima. Indicado após avaliação com exames.</p></article>
    </div>
    <p class="trat-nota">Dúvida sobre qual é o seu caso? <a class="link" href="https://wa.me/5515997828613?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20um%20tratamento.">Fale com a clínica pelo WhatsApp</a></p>
  </div></section>

  <section class="secao jornada"><div class="wrap">
    <div class="cabeca"><span class="rotulo">Como funciona</span><h2>Do primeiro contato ao acompanhamento.</h2></div>
    <ol class="passos">
      <li class="passo"><h3>Contato</h3><p>Você chama no WhatsApp e escolhe o melhor dia e horário.</p></li>
      <li class="passo"><h3>Avaliação</h3><p>Consulta presencial para examinar com calma e ouvir o que você sente e espera.</p></li>
      <li class="passo"><h3>Plano explicado</h3><p>As opções, as etapas e o tempo de cada uma, em linguagem simples.</p></li>
      <li class="passo"><h3>Acompanhamento</h3><p>Retornos depois do tratamento para manter o resultado.</p></li>
    </ol>
  </div></section>

  <section class="secao equipe" id="equipe"><div class="wrap">
    <div class="cabeca"><span class="rotulo">Equipe</span><h2>Quem cuida de você.</h2></div>
    <div class="fundadores">
      <article class="dentista">
        <img class="avatar" src="img/avatar-dr-taka.webp" alt="Dr. Takayuki Oizumi">
        <div><h3>Dr. Takayuki Oizumi</h3><p class="funcao">Fundador e responsável técnico</p><p class="cro">CRO-SP 23827</p><p class="bio">O Dr. Taka fundou a Clean Dent em 1998. Formado pela USP-Bauru, acompanha muitos pacientes desde a primeira consulta na clínica.</p></div>
      </article>
      <article class="dentista">
        <div class="avatar">Foto</div>
        <div><h3>Dra. Tânia Medrano</h3><p class="funcao">Fundadora</p><p class="cro">CRO-SP <span class="pendente">a confirmar</span></p><p class="bio">Formada pela USP-Bauru, divide com o Dr. Taka o atendimento e a condução da clínica.</p></div>
      </article>
    </div>
    <div class="corpo">
      (3 cartões iguais a este:)
      <article class="dentista">
        <div class="avatar">Foto</div>
        <div><h3><span class="pendente">Nome do dentista</span></h3><p class="funcao"><span class="pendente">Área de atuação</span></p><p class="cro">CRO-SP <span class="pendente">a confirmar</span></p></div>
      </article>
    </div>
  </div></section>

  <section class="secao estrutura" id="estrutura"><div class="wrap">
    <div class="cabeca"><span class="rotulo">Estrutura</span><h2>Um espaço tranquilo, pensado para o seu conforto.</h2><p>Recepção ampla, consultórios bem iluminados e área de esterilização própria.</p></div>
    <div class="galeria">
      <button><img src="img/entrada.webp" alt="Recepção com poltrona, janela ampla e porta de vidro com o símbolo da Clean Dent"><span>Recepção</span></button>
      <button><img src="img/consultorio-1.webp" alt="Consultório com cadeira odontológica azul e monitor"><span>Consultório</span></button>
      <button><img src="img/consultorio-3.webp" alt="Consultório com cadeira odontológica bordô e armários"><span>Consultório</span></button>
      <button><img src="img/escritorio.webp" alt="Sala com quadro de paisagem e mesa com dois monitores"><span>Sala de planejamento</span></button>
      <button><img src="img/sala-conversa.webp" alt="Sala clara com mesa branca e flores"><span>Sala de conversa</span></button>
      <button><img src="img/esterilizacao.webp" alt="Bancada de inox e autoclaves na área de esterilização"><span>Esterilização</span></button>
    </div>
  </div></section>

  <section class="secao contato" id="contato"><div class="wrap">
    <div class="cabeca">
      <span class="rotulo">Contato</span>
      <h2>Venha nos visitar.</h2>
      <p>O agendamento é feito pelo WhatsApp. A gente responde e combina o melhor horário para você.</p>
      <div class="acoes">
        <a class="btn btn-primario" href="WA">Agendar pelo WhatsApp</a>
        <a class="btn btn-linha" href="https://www.google.com/maps/search/?api=1&query=Rua%20Perdizes%2C%2087%2C%20Jardim%20Paulistano%2C%20Sorocaba%20SP">Como chegar</a>
      </div>
    </div>
    <dl class="dados">
      <div class="dado"><dt>Endereço</dt><dd>Rua Perdizes, 87, Jardim Paulistano<br>Sorocaba/SP</dd></div>
      <div class="dado"><dt>WhatsApp</dt><dd>(15) 99782-8613<button class="copiar">Copiar</button></dd></div>
      <div class="dado"><dt>Instagram</dt><dd><a class="link" href="https://www.instagram.com/cleandentodonto/">@cleandentodonto</a></dd></div>
      <div class="dado"><dt>Horários</dt><dd>Segunda a sexta<br>8h às 12h e 14h às 18h45<br><span style="color:var(--cinza);font-size:15px">Sábados, domingos e feriados: fechado</span></dd></div>
    </dl>
  </div></section>
</main>

<footer class="rodape"><div class="wrap">
  <div class="grade">
    <div><img src="img/logo-negativa.png" alt="Clean Dent®"><p style="margin-top:18px">Humanodontia em Sorocaba desde 1998.</p></div>
    <div><h4>Visite</h4><p>Rua Perdizes, 87<br>Jardim Paulistano, Sorocaba/SP<br>Segunda a sexta, 8h às 12h e 14h às 18h45</p></div>
    <div><h4>Fale com a gente</h4><p>WhatsApp (15) 99782-8613<br><a href="https://www.instagram.com/cleandentodonto/">@cleandentodonto</a></p></div>
  </div>
  <div class="legal"><span>Clean Dent® · Responsável técnico: Dr. Takayuki Oizumi, CRO-SP 23827</span><span>Site desenvolvido por NEXO.MEDIA</span></div>
</div></footer>

<a class="flutuante" href="WA" aria-label="Agendar pelo WhatsApp">(ícone do WhatsApp)</a>
<div class="visor" hidden>(visor da galeria)</div>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clean-dent-sorocaba.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/70a4dc11-6bc3-4764-9bcf-4894cd80522e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
