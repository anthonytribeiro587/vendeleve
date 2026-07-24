"use client";

import Image from "next/image";
import { useState } from "react";

type ScreenItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const screens: ScreenItem[] = [
  {
    title: "Início",
    description: "Indicadores, próximas cobranças, últimas vendas e ações rápidas.",
    src: "/screens/dashboard.png",
    alt: "Tela real do painel inicial do VendeLeve",
    width: 1600,
    height: 769,
  },
  {
    title: "Clientes",
    description: "Dados, observações, compras, parcelas e acesso ao WhatsApp.",
    src: "/screens/clientes.png",
    alt: "Tela real de clientes do VendeLeve",
    width: 1600,
    height: 779,
  },
  {
    title: "Produtos",
    description: "Fotos, códigos, preços, fornecedores, estoque e movimentações.",
    src: "/screens/produtos.png",
    alt: "Tela real de produtos do VendeLeve",
    width: 1600,
    height: 744,
  },
  {
    title: "Nova venda",
    description: "Cliente, produtos, sacola, pagamento, parcelas e vencimentos.",
    src: "/screens/nova-venda.png",
    alt: "Tela real de nova venda do VendeLeve",
    width: 1600,
    height: 792,
  },
  {
    title: "Histórico",
    description: "Busca, filtros, detalhes, valores e situação de cada venda.",
    src: "/screens/historico.png",
    alt: "Tela real do histórico de vendas do VendeLeve",
    width: 1600,
    height: 773,
  },
  {
    title: "Vencimentos",
    description: "Parcelas abertas, atrasadas, de hoje e dos próximos dias.",
    src: "/screens/vencimentos.png",
    alt: "Tela real de vencimentos do VendeLeve",
    width: 1600,
    height: 746,
  },
  {
    title: "Relatórios",
    description: "Resumo financeiro, comercial, produtos e clientes em destaque.",
    src: "/screens/relatorios.png",
    alt: "Tela real de relatórios do VendeLeve",
    width: 1600,
    height: 741,
  },
];

export function ScreensGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? screens.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === screens.length - 1 ? 0 : current + 1));
  }

  return (
    <section
      className="section screens-section compact-screens-section"
      id="telas"
      aria-labelledby="screens-title"
    >
      <div className="container">
        <div className="section-heading centered compact-screens-heading">
          <span className="eyebrow">Telas reais do sistema</span>
          <h2 id="screens-title">Conheça o VendeLeve por dentro</h2>
          <p>
            Selecione uma tela para visualizar. As imagens abaixo foram extraídas
            diretamente da interface real, sem reconstrução por inteligência artificial.
          </p>
        </div>

        <div
          className="screen-tabs"
          role="tablist"
          aria-label="Telas disponíveis do VendeLeve"
        >
          {screens.map((screen, index) => (
            <button
              key={screen.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="vendeleve-screen-panel"
              className={activeIndex === index ? "screen-tab active" : "screen-tab"}
              onClick={() => setActiveIndex(index)}
            >
              {screen.title}
            </button>
          ))}
        </div>

        <article
          id="vendeleve-screen-panel"
          className="compact-screen-showcase"
          role="tabpanel"
          aria-live="polite"
        >
          <div className="compact-screen-copy">
            <span className="compact-screen-number">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{activeScreen.title}</h3>
              <p>{activeScreen.description}</p>
            </div>

            <div className="compact-screen-controls" aria-label="Navegação das telas">
              <button type="button" onClick={goToPrevious} aria-label="Tela anterior">
                ←
              </button>
              <span>
                {activeIndex + 1} de {screens.length}
              </span>
              <button type="button" onClick={goToNext} aria-label="Próxima tela">
                →
              </button>
            </div>
          </div>

          <div className="compact-screen-window">
            <div className="screen-window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <b>VendeLeve</b>
            </div>

            <Image
              key={activeScreen.src}
              src={activeScreen.src}
              alt={activeScreen.alt}
              width={activeScreen.width}
              height={activeScreen.height}
              className="compact-screen-image"
              priority={activeIndex === 0}
              sizes="(max-width: 720px) 100vw, (max-width: 1180px) 75vw, 900px"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
