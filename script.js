import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const h = React.createElement;

const navItems = [
  ["História", "#historia"],
  ["Essência", "#essencia"],
  ["Marca", "#marca"],
  ["Equipe", "#equipe"],
  ["Parcerias", "#parcerias"],
];

const principles = [
  {
    title: "Foco",
    text: "Manter os olhos no objetivo e sustentar o processo mesmo quando o resultado ainda não chegou.",
  },
  {
    title: "Precisão",
    text: "Transformar preparação em resultado por meio de postura, ajuste, repetição e detalhe.",
  },
  {
    title: "Excelência",
    text: "Evoluir continuamente sem se acomodar com o que já foi conquistado.",
  },
];

const mission = [
  {
    title: "Missão",
    text: "Desenvolver atletas de tiro com arco olímpico e paralímpico através de treinamento de excelência, promovendo evolução esportiva e fortalecendo a modalidade na Paraíba.",
  },
  {
    title: "Visão",
    text: "Ser referência no desenvolvimento do tiro com arco no Nordeste, formando atletas capazes de representar a Paraíba e o Brasil nos mais altos níveis do esporte.",
  },
  {
    title: "Propósito",
    text: "Mais do que formar arqueiros, contribuir para o crescimento do tiro com arco paraibano. Cada flecha lançada hoje ajuda a construir o futuro da modalidade amanhã.",
  },
];

const brandSymbols = [
  ["Constelação", "Direção, referência, trajetória, excelência e busca por um caminho."],
  ["Alvo", "Propósito, foco, clareza de direção e evolução constante."],
  ["Flash", "Energia, movimento, decisão e velocidade para transformar intenção em resultado."],
  ["Escudo", "Pertencimento, tradição, força, união e orgulho de vestir a camisa."],
];



const organization = [
  ["Presidente", "Sued Emmanuel Espínola"],
  ["Vice-presidente e coordenadora esportiva", "Michele Soares de Farias"],
  ["Diretor técnico", "Daniel Simões Gomide"],
  ["Fundadoras", "Michele Soares de Farias e Sara Cardoso Pimenta Macedo"],
  ["Treinador de arco composto", "Thiago"],
  ["Atleta filiado", "Euclides Ponce Leon Neto"],
];

const contactLinks = {
  email: "mailto:arqueariaorion@gmail.com",
  instagram: "https://instagram.com/oriontirocomarco",
};

const whatsappLinks = {
  practice: "https://wa.me/5583988963200",
  support: "https://wa.me/5583988227194",
  talk: "https://wa.me/5583988227194",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SplitText({ children, className = "", as = "span", id }) {
  const Tag = as;
  const words = String(children).split(" ");
  return h(
    Tag,
    { className: cx("split-text", className), "aria-label": children, id },
    words.map((word, index) =>
      h(
        "span",
        { className: "split-word", "aria-hidden": "true", style: { "--i": index }, key: `${word}-${index}` },
        word,
        index < words.length - 1 ? "\u00a0" : ""
      )
    )
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand-lockup", href: "#inicio", "aria-label": "Órion Elite, ir para o início", onClick: () => setOpen(false) },
      h("img", { className: "brand-logo", src: "assets/orion-logo.png", alt: "Órion Elite" })
    ),
    h(
      "button",
      {
        className: cx("menu-toggle", open && "is-open"),
        type: "button",
        "aria-label": open ? "Fechar menu" : "Abrir menu",
        "aria-expanded": open,
        onClick: () => setOpen((value) => !value),
      },
      h("span"),
      h("span")
    ),
    h(
      "nav",
      { className: cx("site-nav", open && "is-open"), "aria-label": "Navegação principal" },
      navItems.map(([label, href]) => h("a", { href, key: href, onClick: () => setOpen(false) }, label)),
      h("a", { className: "nav-cta", href: whatsappLinks.talk, target: "_blank", rel: "noopener noreferrer", onClick: () => setOpen(false) }, "Fale com o clube")
    )
  );
}


function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let hideTimer;
    let removeTimer;
    const startExit = () => {
      hideTimer = window.setTimeout(() => setLeaving(true), 520);
      removeTimer = window.setTimeout(() => setMounted(false), 1320);
    };

    if (document.readyState === "complete") {
      startExit();
    } else {
      window.addEventListener("load", startExit, { once: true });
    }

    return () => {
      window.removeEventListener("load", startExit);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return h(
    "div",
    { className: cx("preloader", leaving && "is-leaving"), "aria-hidden": "true" },
    h("img", { className: "preloader-star", src: "assets/estrela-orion.png", alt: "" })
  );
}


function Hero() {
  return h(
    "section",
    { className: "hero section-dark", id: "inicio", "aria-labelledby": "hero-title" },
    h("div", { className: "hero-bg", "aria-hidden": "true" }),
    h(
      "div",
      { className: "hero-shell" },
      h(
        "div",
        { className: "hero-copy-block" },
        h(
          "p",
          { className: "eyebrow reveal" },
          "Clube de tiro com arco ",
          h("span", { className: "hero-paralympic-word", "data-text": "paralímpico" }, "paralímpico"),
          " e olímpico da Paraíba"
        ),
        h(SplitText, { as: "h1", className: "hero-title", id: "hero-title" }, "Órion Elite"),
        h("p", { className: "hero-kicker reveal" }, "Foco. Precisão. Excelência."),
        h(
          "p",
          { className: "hero-copy reveal" },
          "Uma constelação como direção. Um alvo como propósito. Um escudo como pertencimento. Uma mira para levar a Paraíba mais longe no tiro com arco."
        ),
        h(
          "div",
          { className: "hero-actions reveal" },
          h("a", { className: "button button-primary", href: "#historia" }, "Conheça a história"),
          h("a", { className: "button button-secondary", href: whatsappLinks.practice, target: "_blank", rel: "noopener noreferrer" }, "Quero praticar")
        )
      )
    )
  );
}


function Manifesto() {
  return h(
    "section",
    { className: "manifesto section-light", id: "manifesto", "aria-labelledby": "manifesto-title" },
    h(
      "div",
      { className: "section-shell" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow reveal" }, "Manifesto"),
        h("h2", { className: "section-title reveal", id: "manifesto-title" }, "Resultados são consequência de preparação"),
        h("p", { className: "section-intro reveal" }, "A excelência nasce do foco em cada movimento, da precisão em cada ajuste e da coragem de mirar mais longe pela Paraíba.")
      ),
      h(
        "div",
        { className: "manifesto-copy reveal" },
        h("p", null, "A Órion Elite foi criada para quem entende que um atleta não nasce pronto. Ele é formado por método, repetição, escuta, ajuste e uma comunidade que sustenta o processo."),
        h("p", null, "Carregamos em nosso nome a responsabilidade de inspirar novos talentos, elevar o nível da modalidade e representar nosso estado com orgulho.")
      )
    )
  );
}


function Origin() {
  return h(
    "section",
    { className: "origin section-dark", id: "historia", "aria-labelledby": "origin-title" },
    h(
      "div",
      { className: "section-shell origin-grid" },
      h(
        "div",
        { className: "origin-sticky" },
        h("p", { className: "eyebrow reveal" }, "Origem real"),
        h(SplitText, { as: "h2", className: "section-title", id: "origin-title" }, "Uma conversa simples. Uma visão de clube"),
        h("div", { className: "gold-line", "aria-hidden": "true" })
      ),
      h(
        "div",
        { className: "story-panel reveal" },
        h("p", null, "Antes de ser clube, a Órion Elite nasceu do reconhecimento de uma trajetória: Sued Emmanuel Espínola representava a Paraíba como atleta paralímpico de alto rendimento, enquanto Daniel Simões Gomide acumulava uma caminhada sólida como atleta, técnico, educador esportivo e formador de talentos."),
        h("p", null, "Foi a partir do incentivo de Sara Cardoso Pimenta Macedo, irmã de Sued, que a possibilidade ganhou forma. Ao lado de Michele Soares de Farias, Sara, Sued e Daniel deram início à construção de uma organização com identidade forte, estrutura de alto rendimento e propósito claro.")
      )
    )
  );
}

function Essence() {
  return h(
    "section",
    { className: "essence section-dark", id: "essencia", "aria-labelledby": "essence-title" },
    h(
      "div",
      { className: "section-shell" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow reveal" }, "Essência"),
        h(SplitText, { as: "h2", className: "section-title", id: "essence-title" }, "Três princípios. Uma direção"),
        h("p", { className: "section-intro reveal" }, "A excelência é construída através do foco no processo e da precisão em cada detalhe.")
      ),
      h(
        "div",
        { className: "principles-grid" },
        principles.map((item, index) =>
          h("article", { className: "principle-card reveal", key: item.title }, h("span", { className: "principle-number" }, `0${index + 1}`), h("h3", null, item.title), h("p", null, item.text))
        )
      )
    )
  );
}

function Mission() {
  return h(
    "section",
    { className: "mission section-light", id: "missao", "aria-labelledby": "mission-title" },
    h("div", { className: "mission-riser", "aria-hidden": "true" }),
    h(
      "div",
      { className: "section-shell mission-pin-shell" },
      h(
        "div",
        { className: "mission-layout" },
        h(
          "div",
          { className: "mission-left" },
          h("p", { className: "eyebrow reveal" }, "Missão, visão e propósito"),
          h("h2", { className: "section-title reveal", id: "mission-title" }, "Alto rendimento também é construção institucional"),
          h("p", { className: "mission-lede reveal" }, "A Órion Elite nasce como clube, mas se organiza como instituição: direção clara, formação contínua e compromisso com o futuro do tiro com arco paraibano.")
        ),
        h(
          "div",
          { className: "mission-accordion", "aria-label": "Missão, visão e propósito" },
          mission.map((item, index) =>
            h(
              "article",
              { className: cx("mission-card reveal", index === 0 && "is-active"), "data-mission-index": index, key: item.title },
              h("span", { className: "mission-card-title" }, item.title),
              h("div", { className: "mission-card-copy" }, h("p", null, item.text))
            )
          )
        )
      )
    )
  );
}

function Brand() {
  return h(
    "section",
    { className: "brand-section section-dark", id: "marca", "aria-labelledby": "brand-title" },
    h(
      "div",
      { className: "section-shell brand-grid" },
      h(
        "div",
        { className: "brand-copy" },
        h("p", { className: "eyebrow reveal" }, "Marca"),
        h("h2", { className: "section-title reveal", id: "brand-title" }, "Um sistema simbólico para direção, propósito e legado"),
        h("p", { className: "section-intro reveal" }, "A identidade da Órion nasce da união entre orientação, alvo, velocidade e pertencimento, símbolos que sustentam a forma como o clube se apresenta e cresce.")
      ),
      h("div", { className: "symbol-grid" }, brandSymbols.map(([title, text]) => h("article", { className: "symbol-card reveal", key: title }, h("h3", null, title), h("p", null, text))))
    )
  );
}


const athleteProfilesCompact = [
  {
    id: "sued",
    name: "Sued Emmanuel Espinola",
    shortName: "Sued",
    role: "Atleta paralímpico / Presidente",
    image: "assets/sued.jpeg",
    alt: "Sued Emmanuel Espinola, atleta paralímpico e presidente da Órion Elite",
    headline: "Atleta paralímpico, presidente da Órion e instrutor nível 1 e 2.",
    summary: "Conheceu o tiro com arco em 2023 e se tornou uma referência paralímpica da Paraíba. Une alto rendimento, representatividade e liderança na origem da Órion.",
    facts: ["Campeão brasileiro Barebow 2024", "Seletiva da Seleção Paralímpica", "Alto rendimento na UFPB"],
  },
  {
    id: "daniel",
    name: "Daniel Simoes Gomide",
    shortName: "Daniel",
    role: "Diretor técnico",
    image: "assets/daniel-gomide.jpeg",
    alt: "Daniel Simões Gomide, diretor técnico da Órion Elite",
    headline: "Educador físico, instrutor nível 2 e diretor técnico da equipe.",
    summary: "Daniel combina formação acadêmica, experiência competitiva e gestão técnica. Atua na organização dos treinos e no desenvolvimento esportivo da Órion.",
    facts: ["Bacharel em Educação Física", "Instrutor Brasil Arco / CBTARCO", "Técnico premiado em 2024"],
  },
  {
    id: "tiago",
    name: "Thiago Silva",
    shortName: "Thiago",
    role: "Atleta e treinador de arco composto",
    image: "assets/thiago.jpeg",
    alt: "Thiago Silva, atleta e treinador de arco composto da Órion Elite",
    headline: "Atleta multicampeão paraibano e formador de talentos.",
    summary: "Thiago representa experiência no arco composto. Soma títulos estaduais, medalhas regionais e atuação direta na formação de atletas na Paraíba.",
    facts: ["Títulos indoor e outdoor", "Medalhas em Copas Nordeste", "Ex-presidente da FPBTARCO"],
  },
  {
    id: "roberto",
    name: "Roberto Figueiroa",
    shortName: "Roberto",
    role: "Atleta de tiro com arco paralímpico",
    image: "assets/roberto.jpeg",
    alt: "Roberto Figueiroa, atleta de tiro com arco paralímpico da Órion Elite",
    headline: "Atleta paralímpico com pódios nacionais e participação nos Meets Paraolímpicos Loterias Caixa.",
    summary: "Roberto reúne resultados nacionais em Barebow e Recurvo: foi 3º por equipes em 2024, 3º individual e campeão por equipes em 2025, além de 4º por equipes em 2026. Também conquistou pódios nos Meets Paraolímpicos Loterias Caixa entre 2024 e 2025.",
    facts: ["3º por equipes no Brasileiro Barebow 2024", "3º individual e campeão por equipes no Brasileiro Barebow 2025", "1º em Pernambuco e Natal/RN nos Meets Paraolímpicos Loterias Caixa 2025"],
  },
  {
    id: "igor",
    name: "Igor",
    shortName: "Igor",
    role: "Atleta da Órion Elite",
    image: "assets/Igor.jpeg",
    alt: "Igor, atleta da Órion Elite",
    headline: "Atleta da instituição.",
    summary: "Perfil em atualização.",
    facts: [],
  },
  {
    id: "leon",
    name: "Leon",
    shortName: "Leon",
    role: "Atleta da Órion Elite",
    image: "assets/Leon.jpeg",
    alt: "Leon, atleta da Órion Elite",
    headline: "Atleta da instituição.",
    summary: "Perfil em atualização.",
    facts: [],
  },
];

function TeamCommunityRefined() {
  const [activeAthlete, setActiveAthlete] = useState(null);
  const selectedAthlete = athleteProfilesCompact.find((athlete) => athlete.id === activeAthlete);
  const athleteLoop = [...athleteProfilesCompact, ...athleteProfilesCompact, ...athleteProfilesCompact];
  const renderAthleteBlock = (blockIndex) =>
    h(
      "div",
      { className: "athlete-loop-block", "aria-hidden": blockIndex === 1 ? "true" : undefined },
      athleteLoop.map((athlete, index) => renderAthleteCard(athlete, `${blockIndex}-${index}`))
    );

  const renderAthleteCard = (athlete, index) =>
    h(
      "button",
      {
        className: cx("team-card refined-athlete-card", selectedAthlete?.id === athlete.id && "is-active", selectedAthlete && selectedAthlete.id !== athlete.id && "is-dimmed"),
        type: "button",
        key: `${athlete.id}-${index}`,
        onClick: (event) => {
          event.stopPropagation();
          setActiveAthlete(athlete.id);
        },
        "aria-pressed": selectedAthlete?.id === athlete.id,
        "aria-label": `Ver informações de ${athlete.name}`,
      },
      h("span", { className: "team-photo" }, h("img", { src: athlete.image, alt: athlete.alt, loading: "lazy" })),
      h("span", { className: "team-card-copy" }, h("strong", null, athlete.shortName), h("small", null, athlete.role))
    );

  const closeDetails = () => setActiveAthlete(null);

  return h(
    "section",
    { className: cx("team section-light team-refined", selectedAthlete && "is-detail-open"), id: "equipe", "aria-labelledby": "team-title", onClick: selectedAthlete ? closeDetails : undefined },
    h(
      "div",
      { className: "section-shell" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow reveal" }, "Equipe e comunidade"),
        h("h2", { className: "section-title reveal", id: "team-title" }, "Pessoas que sustentam a direção técnica e institucional da Órion"),
        h("p", { className: "section-intro reveal" }, "O carrossel apresenta atletas e lideranças do clube. Clique em uma foto para pausar o loop e ver um resumo da trajetória.")
      )
    ),
    h(
      "div",
      { className: cx("athlete-full-bleed-stage reveal", selectedAthlete && "has-selection"), onClick: selectedAthlete ? closeDetails : undefined },
      h(
        "div",
        { className: cx("team-carousel scroll-container", selectedAthlete && "is-paused") },
        h(
          "div",
          {
            className: "infinite-scroll",
            "aria-label": "Carrossel infinito de atletas",
            style: { animationPlayState: selectedAthlete ? "paused" : "running" },
          },
          renderAthleteBlock(0),
          renderAthleteBlock(1)
        )
      ),
      selectedAthlete &&
        h(
          "div",
          { className: "athlete-detail-overlay", role: "dialog", "aria-modal": "true", "aria-label": `Resumo de ${selectedAthlete.name}`, onClick: (event) => event.stopPropagation() },
          h(
            "article",
            { className: "athlete-detail-card" },
            h("button", { type: "button", className: "athlete-detail-close", onClick: closeDetails, "aria-label": "Fechar resumo e retomar carrossel" }, "×"),
            h("div", { className: "athlete-detail-media" }, h("img", { src: selectedAthlete.image, alt: selectedAthlete.alt })),
            h(
              "div",
              { className: "athlete-detail-content" },
              h("p", { className: "eyebrow" }, selectedAthlete.role),
              h("h3", null, selectedAthlete.name),
              h("strong", null, selectedAthlete.headline),
              h("p", null, selectedAthlete.summary),
              h("ul", null, selectedAthlete.facts.map((fact) => h("li", { key: fact }, fact)))
            )
          )
        )
    ),
    h(
      "div",
      { className: "section-shell team-mentions-shell" },
      h("div", { className: "org-grid team-mentions", "aria-label": "Funções e pessoas da equipe e comunidade" },
        organization.map(([role, name]) => h("article", { className: "org-card reveal", key: `${role}-${name}` }, h("span", null, role), h("strong", null, name)))
      )
    )
  );
}

function SupportersMarquee() {
  const resolveUrl = "https://matricula.resolveeducacao.com.br/";
  const sponsorSet = [
    { type: "logo", name: "Resolve Educação", image: "assets/resolve-educacao.png" },
    { type: "cta", text: "Sua marca pode ser a próxima", helper: "Apoia o esporte" },
  ];
  const sponsorLoop = [...sponsorSet, ...sponsorSet, ...sponsorSet, ...sponsorSet];

  const renderSponsor = (item, blockIndex, itemIndex) =>
    item.type === "logo"
      ? h(
          "a",
          {
            className: "sponsor-logo-card",
            href: resolveUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Abrir site da Resolve Educação",
            key: `sponsor-logo-${blockIndex}-${itemIndex}`,
          },
          h("img", { src: item.image, alt: item.name, loading: "lazy" })
        )
      : h(
          "article",
          { className: "sponsor-cta-card", key: `sponsor-cta-${blockIndex}-${itemIndex}` },
          h("strong", null, item.text),
          h("span", null, item.helper)
        );

  const renderSponsorBlock = (blockIndex) =>
    h(
      "div",
      { className: "sponsor-loop-block", "aria-hidden": blockIndex === 1 ? "true" : undefined },
      sponsorLoop.map((item, itemIndex) => renderSponsor(item, blockIndex, itemIndex))
    );

  return h(
    "section",
    { className: "sponsor-marquee-section", id: "apoiadores", "aria-label": "Apoiadores da Órion Elite" },
    h(
      React.Fragment,
      null,
      h(
        "div",
        { className: "sponsor-section-heading" },
        h("p", { className: "eyebrow" }, "Apoiadores"),
        h("h2", { id: "supporters-title" }, "Empresas que acreditam na Orion")
      ),
      h(
        "div",
        { className: "sponsor-marquee" },
        h(
          "div",
          { className: "sponsor-track", "aria-label": "Carrossel infinito de patrocinadores" },
          renderSponsorBlock(0),
          renderSponsorBlock(1)
        )
      )
    )
  );
}

function Partnerships() {
  return h(
    "section",
    { className: "partners section-light", id: "parcerias", "aria-labelledby": "partners-title" },
    h(
      "div",
      { className: "section-shell partners-simple" },
      h("p", { className: "eyebrow reveal" }, "Parcerias"),
      h("h2", { className: "section-title reveal", id: "partners-title" }, "Sua marca pode apoiar o futuro do tiro com arco na Paraíba"),
      h("p", { className: "section-intro reveal" }, "A Órion Elite busca parceiros que queiram caminhar com um clube em formação, com direção institucional, desenvolvimento técnico e compromisso esportivo."),
      h("div", { className: "partner-actions reveal" }, h("a", { className: "button button-dark", href: whatsappLinks.support, target: "_blank", rel: "noopener noreferrer" }, "Quero apoiar a Órion"))
    )
  );
}


function Contact() {
  return h(
    "section",
    { className: "contact section-dark", id: "contato", "aria-labelledby": "contact-title" },
    h(
      "div",
      { className: "section-shell contact-grid" },
      h("div", null, h("p", { className: "eyebrow reveal" }, "Contato oficial"), h("h2", { className: "section-title reveal", id: "contact-title" }, "Vamos construir a próxima referência do tiro com arco paraibano")),
      h(
        "div",
        { className: "contact-panel reveal" },
        h("a", { href: whatsappLinks.practice, target: "_blank", rel: "noopener noreferrer" }, "Quero praticar tiro com arco"),
        h("a", { href: whatsappLinks.support, target: "_blank", rel: "noopener noreferrer" }, "Quero apoiar a Órion"),
        h("a", { href: whatsappLinks.talk, target: "_blank", rel: "noopener noreferrer" }, "Quero falar com o clube"),
        h(
          "dl",
          { className: "contact-list" },
          h("div", null, h("dt", null, "E-mail"), h("dd", null, h("a", { href: contactLinks.email }, "arqueariaorion@gmail.com"))),
          h("div", null, h("dt", null, "Instagram"), h("dd", null, h("a", { href: contactLinks.instagram, target: "_blank", rel: "noopener noreferrer" }, "@oriontirocomarco"))),
          h("div", null, h("dt", null, "CNPJ"), h("dd", null, "64.505.635/0001-23")),
          h("div", null, h("dt", null, "Nome jurídico"), h("dd", null, "Clube Órion Elite de Tiro com Arco"))
        )
      )
    )
  );
}


function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(
      "div",
      { className: "footer-inner" },
      h("div", null, h("strong", null, "Órion Elite"), h("p", null, "Foco. Precisão. Excelência.")),
      h("nav", { "aria-label": "Links do rodapé" }, h("a", { href: "#inicio" }, "Início"), h("a", { href: "#historia" }, "História"), h("a", { href: "#marca" }, "Marca"), h("a", { href: "#contato" }, "Contato")),
      h("p", null, "© 2026 Órion Elite. CNPJ 64.505.635/0001-23.")
    ),
    h(
      "p",
      { className: "footer-credit" },
      "Página desenvolvida pela ",
      h("a", { href: "https://origamilab.vercel.app/" }, "Origami Lab"),
      "."
    )
  );
}

function useMotion() {
  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll(".reveal, .line-reveal, .split-text"));

    let lenis;
    let rafId = 0;
    let onLenisScroll;

    if (window.Lenis) {
      lenis = new window.Lenis({ lerp: 0.08, wheelMultiplier: 0.88, smoothWheel: true });
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      if (lenis) {
        onLenisScroll = () => window.ScrollTrigger.update();
        lenis.on("scroll", onLenisScroll);
      }

      revealNodes.forEach((node) => {
        window.gsap.fromTo(
          node,
          { y: node.classList.contains("split-text") ? 0 : 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: node.classList.contains("split-text") ? 0.01 : 0.9,
            ease: "power3.out",
            onStart: () => node.classList.add("is-visible"),
            scrollTrigger: { trigger: node, start: "top 86%", once: true },
          }
        );
      });

      window.gsap.to(".hero-bg", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });


      window.gsap.to(".gold-line", {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: { trigger: ".origin", start: "top 65%", end: "bottom 45%", scrub: true },
      });

      window.ScrollTrigger.refresh();
    } else if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
      );
      revealNodes.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    } else {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && onLenisScroll && typeof lenis.off === "function") lenis.off("scroll", onLenisScroll);
      if (lenis) lenis.destroy();
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

function App() {
  useMotion();
  const sections = useMemo(
    () => [
      h(Hero, { key: "hero" }),
      h(SupportersMarquee, { key: "supporters-marquee" }),
      h(Manifesto, { key: "manifesto" }),
      h(Origin, { key: "origin" }),
      h(Essence, { key: "essence" }),
      h(Mission, { key: "mission" }),
      h(Brand, { key: "brand" }),
      h(TeamCommunityRefined, { key: "team" }),
      h(Partnerships, { key: "partners" }),
      h(Contact, { key: "contact" }),
    ],
    []
  );

  return h(React.Fragment, null, h(Preloader), h(Header), h("main", null, sections), h(Footer));
}

createRoot(document.getElementById("root")).render(h(App));
