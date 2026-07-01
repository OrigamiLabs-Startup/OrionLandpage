import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const h = React.createElement;

const navItems = [
  ["História", "#historia"],
  ["Essência", "#essencia"],
  ["Marca", "#marca"],
  ["Sued", "#sued"],
  ["Equipe", "#equipe"],
  ["Parcerias", "#parcerias"],
];

const manifestoLines = [
  "A excelência não acontece por acaso.",
  "Ela nasce do foco em cada movimento.",
  "Da precisão em cada ajuste.",
  "Da disciplina em cada treino.",
  "E da coragem de mirar mais longe pela Paraíba.",
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
  ["Flecha", "Trajetória, precisão, movimento e busca por objetivo."],
  ["Escudo", "Pertencimento, tradição, força, união e orgulho de vestir a camisa."],
  ["Verde", "Crescimento, renovação, vitalidade e esperança no futuro da modalidade."],
  ["2026", "O ponto de partida de uma jornada construída com propósito."],
];

const suedTimeline = [
  {
    year: "2024",
    facts: [
      "Campeão brasileiro individual na categoria Barebow.",
      "Vice-campeão brasileiro por equipe.",
      "Campeão invicto no Brasil nas provas indoor e outdoor na categoria Barebow.",
    ],
  },
  {
    year: "2025",
    facts: [
      "Migrou para a modalidade Recurvo.",
      "Campeão paraibano indoor e outdoor.",
      "Sexto lugar na classificação geral do Campeonato Brasileiro Paralímpico.",
    ],
  },
  {
    year: "2026",
    facts: [
      "Quinto lugar no Campeonato Brasileiro Paralímpico, garantindo vaga na seletiva da Seleção Brasileira Paralímpica.",
      "Quarto lugar no Campeonato Brasileiro Paralímpico de 2026.",
      "Quarta colocação na seletiva da Seleção Paralímpica.",
    ],
  },
];

const danielCredentials = [
  "Bacharel em Educação Física - CREF 010273-G/PB",
  "Instrutor Nível II - Brasil Arco / CBTARCO",
  "Juiz estadual de tiro com arco",
  "Campeão Paraibano 2025 Outdoor 70m - Recurvo Masculino Adulto",
  "Técnico do Bolsa Esporte Paraíba",
  "Técnico premiado no Prêmio do Esporte Paraibano 2024",
  "Técnico convidado para o 13º Camping Militar e Civil Paralímpico 2026 no CPB",
  "Ex-Diretor Técnico da FPBTARCO",
  "Técnico do atleta paralímpico Sued Emmanuel",
];

const organization = [
  ["Presidente", "Sued Emmanuel Espínola"],
  ["Vice-presidente", "Michele Soares de Farias"],
  ["Diretor técnico", "Daniel Simões Gomide"],
  ["Fundadoras", "Michele Soares de Farias e Sara Cardoso Pimenta Macedo"],
  ["Treinador de arco composto", "Thiago"],
  ["Coordenadora esportiva", "Michele Soares de Farias"],
];

const athletes = [
  ["Sued Emmanuel Espínola", "Atleta paralímpico / Presidente"],
  ["Daniel Simões Gomide", "Recurvo masculino adulto / Técnico"],
  ["Roberto Sérgio de Figueiroa", "Atleta filiado ativo"],
  ["Thiago Silva de Lima", "Atleta filiado ativo / Treinador"],
  ["Euclides Ponce Leon Neto", "Atleta filiado ativo"],
];

const partnerPaths = [
  "Patrocínio financeiro",
  "Empresas privadas",
  "Marcas interessadas em visibilidade",
  "Apoio institucional",
  "Instituições públicas",
  "Governo e prefeituras",
  "Projetos de incentivo ao esporte",
  "Novos atletas",
];

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
      h("span", { className: "brand-mark", "aria-hidden": "true" }, "Ó"),
      h("span", null, h("strong", null, "Órion"), h("small", null, "Elite"))
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
      h("a", { className: "nav-cta", href: "#contato", onClick: () => setOpen(false) }, "Fale com o clube")
    )
  );
}

function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return h(
    "div",
    { className: cx("preloader", !visible && "is-hidden"), "aria-hidden": !visible },
    h("div", { className: "preloader-mark" }, h("span", null, "Ó")),
    h("p", null, "Foco. Precisão. Excelência.")
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero section-dark", id: "inicio", "aria-labelledby": "hero-title" },
    h("div", { className: "hero-bg", "aria-hidden": "true" }),
    h("div", { className: "hero-grain", "aria-hidden": "true" }),
    h("div", { className: "target-system", "aria-hidden": "true" }, h("span"), h("span"), h("span"), h("i")),
    h(
      "div",
      { className: "hero-shell" },
      h(
        "div",
        { className: "hero-copy-block" },
        h("p", { className: "eyebrow reveal" }, "Clube de tiro com arco olímpico e paralímpico da Paraíba"),
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
          h("a", { className: "button button-secondary", href: "#contato" }, "Quero praticar")
        )
      ),
      h(
        "aside",
        { className: "hero-panel reveal", "aria-label": "Resumo institucional" },
        h("span", null, "Jornada inicial"),
        h("strong", null, "2026"),
        h("p", null, "Marca esportiva, formação técnica e alto rendimento com orgulho paraibano."),
        h(
          "dl",
          null,
          h("div", null, h("dt", null, "Modalidade"), h("dd", null, "Olímpico e Paralímpico")),
          h("div", null, h("dt", null, "Estado"), h("dd", null, "Paraíba")),
          h("div", null, h("dt", null, "Base"), h("dd", null, "Atletas e técnicos"))
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
      { className: "section-shell manifesto-grid" },
      h("div", { className: "section-label reveal" }, "Manifesto"),
      h(
        "div",
        null,
        h("h2", { className: "editorial-title reveal", id: "manifesto-title" }, "Resultados são consequência de preparação."),
        h("div", { className: "manifesto-lines" }, manifestoLines.map((line) => h("p", { className: "line-reveal", key: line }, line))),
        h(
          "div",
          { className: "manifesto-copy reveal" },
          h("p", null, "A Órion Elite foi criada para quem entende que um atleta não nasce pronto. Ele é formado por método, repetição, escuta, ajuste e uma comunidade que sustenta o processo."),
          h("p", null, "Carregamos em nosso nome a responsabilidade de inspirar novos talentos, elevar o nível da modalidade e representar nosso estado com orgulho.")
        ),
        h("p", { className: "signature reveal" }, "Órion Elite", h("span", null, "Foco. Precisão. Excelência."))
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
        h(SplitText, { as: "h2", className: "section-title", id: "origin-title" }, "Uma conversa simples. Uma visão de clube."),
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
        h(SplitText, { as: "h2", className: "section-title", id: "essence-title" }, "Três princípios. Uma direção."),
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
          h("h2", { className: "section-title reveal", id: "mission-title" }, "Alto rendimento também é construção institucional."),
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
      h("div", { className: "brand-visual reveal" }, h("img", { src: "assets/identidade-visual.jpeg", alt: "Identidade visual da Órion Elite" }), h("div", { className: "brand-caption" }, "Constelação. Alvo. Escudo. Pertencimento.")),
      h(
        "div",
        null,
        h("p", { className: "eyebrow reveal" }, "Marca"),
        h("h2", { className: "section-title reveal", id: "brand-title" }, "Um sistema simbólico para direção, propósito e legado."),
        h("div", { className: "symbol-grid" }, brandSymbols.map(([title, text]) => h("article", { className: "symbol-card reveal", key: title }, h("h3", null, title), h("p", null, text))))
      )
    )
  );
}

function Sued() {
  return h(
    "section",
    { className: "sued section-light", id: "sued", "aria-labelledby": "sued-title" },
    h(
      "div",
      { className: "section-shell sued-grid" },
      h(
        "div",
        null,
        h("p", { className: "eyebrow reveal" }, "Presidente e atleta paralímpico"),
        h("h2", { className: "section-title reveal", id: "sued-title" }, "Sued Emmanuel Espínola representa a origem competitiva da Órion."),
        h("p", { className: "large-copy reveal" }, "Conheceu o tiro com arco em 2023 e se tornou o primeiro atleta paralímpico de tiro com arco da Paraíba com formação de Instrutor Nível 1 e Nível 2."),
        h("div", { className: "sued-proof reveal" }, h("span", null, "Barebow"), h("span", null, "Recurvo Paralímpico"), h("span", null, "CPB"), h("span", null, "UFPB"))
      ),
      h(
        "div",
        { className: "timeline" },
        suedTimeline.map((year) => h("article", { className: "timeline-item reveal", key: year.year }, h("strong", null, year.year), h("ul", null, year.facts.map((fact) => h("li", { key: fact }, fact))))),
        h("article", { className: "timeline-item highlight reveal" }, h("strong", null, "Formação"), h("p", null, "Terceiro lugar na Copa Norte-Nordeste em Recurvo Paralímpico, duas clínicas de alto rendimento do Comitê Paralímpico Brasileiro e participação em projeto de alto rendimento na Universidade Federal da Paraíba."))
      )
    )
  );
}

function Team() {
  return h(
    "section",
    { className: "team section-light", id: "equipe", "aria-labelledby": "team-title" },
    h(
      "div",
      { className: "section-shell" },
      h("div", { className: "section-heading" }, h("p", { className: "eyebrow reveal" }, "Equipe técnica"), h("h2", { className: "section-title reveal", id: "team-title" }, "A técnica é parte da identidade. Não um detalhe operacional.")),
      h(
        "article",
        { className: "coach-feature reveal" },
        h("div", { className: "coach-photo" }, h("img", { src: "assets/daniel-gomide.jpeg", alt: "Daniel Simões Gomide, diretor técnico da Órion Elite" })),
        h(
          "div",
          { className: "coach-content" },
          h("p", { className: "coach-role" }, "Diretor técnico / Atleta / Educador esportivo"),
          h("h3", null, "Daniel Simões Gomide"),
          h("p", null, "Bacharel em Educação Física, atleta e técnico de tiro com arco com atuação relevante no desenvolvimento da modalidade na Paraíba. Como atleta, é campeão paraibano outdoor 2025 na categoria Recurvo Masculino Adulto."),
          h("div", { className: "achievement-grid", "aria-label": "Destaques da trajetória de Daniel Gomide" }, danielCredentials.map((item) => h("span", { key: item }, item)))
        )
      ),
      h("div", { className: "org-grid" }, organization.map(([role, name]) => h("article", { className: "org-card reveal", key: `${role}-${name}` }, h("span", null, role), h("strong", null, name))))
    )
  );
}

function Athletes() {
  return h(
    "section",
    { className: "athletes section-dark", id: "atletas", "aria-labelledby": "athletes-title" },
    h(
      "div",
      { className: "section-shell" },
      h("div", { className: "section-heading" }, h("p", { className: "eyebrow reveal" }, "Atletas filiados ativos"), h("h2", { className: "section-title reveal", id: "athletes-title" }, "Uma base de alto rendimento preparada para crescer.")),
      h("div", { className: "athlete-grid" }, athletes.map(([name, role], index) => h("article", { className: "athlete-card reveal", key: name }, h("span", null, String(index + 1).padStart(2, "0")), h("h3", null, name), h("p", null, role))))
    )
  );
}

function Partnerships() {
  return h(
    "section",
    { className: "partners section-light", id: "parcerias", "aria-labelledby": "partners-title" },
    h(
      "div",
      { className: "section-shell partners-grid" },
      h("div", null, h("p", { className: "eyebrow reveal" }, "Parcerias"), h("h2", { className: "section-title reveal", id: "partners-title" }, "Apoiar a Órion é apoiar o tiro com arco na Paraíba.")),
      h(
        "div",
        { className: "partner-copy reveal" },
        h("p", null, "O clube busca parceiros estratégicos que compreendam o valor do esporte como ferramenta de transformação, desenvolvimento, visibilidade e construção de legado."),
        h("p", null, "Estamos abertos a empresas privadas, instituições públicas, projetos governamentais, marcas parceiras, prefeituras e atletas que desejem caminhar ao lado de uma modalidade em crescimento."),
        h("div", { className: "partner-paths", "aria-label": "Formas de parceria" }, partnerPaths.map((path) => h("span", { key: path }, path))),
        h("div", { className: "partner-actions" }, h("a", { className: "button button-dark", href: "mailto:arqueariaorion@gmail.com?subject=Quero apoiar a Órion Elite" }, "Quero apoiar"), h("a", { className: "button button-outline", href: "mailto:arqueariaorion@gmail.com?subject=Quero praticar tiro com arco" }, "Quero praticar"))
      )
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
      h("div", null, h("p", { className: "eyebrow reveal" }, "Contato oficial"), h("h2", { className: "section-title reveal", id: "contact-title" }, "Vamos construir a próxima referência do tiro com arco paraibano.")),
      h(
        "div",
        { className: "contact-panel reveal" },
        h("a", { href: "mailto:arqueariaorion@gmail.com?subject=Quero praticar tiro com arco" }, "Quero praticar tiro com arco"),
        h("a", { href: "mailto:arqueariaorion@gmail.com?subject=Quero apoiar a Órion Elite" }, "Quero apoiar a Órion Elite"),
        h("a", { href: "mailto:arqueariaorion@gmail.com?subject=Quero falar com o clube" }, "Quero falar com o clube"),
        h(
          "dl",
          { className: "contact-list" },
          h("div", null, h("dt", null, "E-mail"), h("dd", null, h("a", { href: "mailto:arqueariaorion@gmail.com" }, "arqueariaorion@gmail.com"))),
          h("div", null, h("dt", null, "Instagram"), h("dd", null, h("a", { href: "https://instagram.com/oriontirocomarco", target: "_blank", rel: "noreferrer" }, "@oriontirocomarco"))),
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
    )
  );
}

function useMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll(".reveal, .line-reveal, .split-text"));

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

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

      window.gsap.to(".target-system", {
        rotate: 18,
        scale: 0.86,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      window.gsap.to(".gold-line", {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: { trigger: ".origin", start: "top 65%", end: "bottom 45%", scrub: true },
      });

      const missionCards = Array.from(document.querySelectorAll(".mission-card"));
      const setMissionActive = (activeIndex) => {
        missionCards.forEach((card, index) => card.classList.toggle("is-active", index === activeIndex));
      };

      if (missionCards.length) {
        if (window.innerWidth <= 980) {
          missionCards.forEach((card) => card.classList.add("is-active"));
        } else {
          setMissionActive(0);

          window.ScrollTrigger.create({
            trigger: ".mission",
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const activeIndex = Math.min(missionCards.length - 1, Math.floor(self.progress * missionCards.length));
              setMissionActive(activeIndex);
            },
          });

          window.gsap.fromTo(
            ".mission-riser",
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "bottom",
              ease: "none",
              scrollTrigger: { trigger: ".mission", start: "top 82%", end: "top top", scrub: true },
            }
          );
        }
      }

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
      h(Manifesto, { key: "manifesto" }),
      h(Origin, { key: "origin" }),
      h(Essence, { key: "essence" }),
      h(Mission, { key: "mission" }),
      h(Brand, { key: "brand" }),
      h(Sued, { key: "sued" }),
      h(Team, { key: "team" }),
      h(Athletes, { key: "athletes" }),
      h(Partnerships, { key: "partners" }),
      h(Contact, { key: "contact" }),
    ],
    []
  );

  return h(React.Fragment, null, h(Preloader), h(Header), h("main", null, sections), h(Footer));
}

createRoot(document.getElementById("root")).render(h(App));
