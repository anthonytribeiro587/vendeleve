"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

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
    alt: "Tela real do painel inicial do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 767,
  },
  {
    title: "Clientes",
    description: "Dados, observações, compras, parcelas e acesso ao WhatsApp.",
    src: "/screens/clientes.png",
    alt: "Tela real de clientes do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 777,
  },
  {
    title: "Produtos",
    description: "Fotos, códigos, preços, fornecedores, estoque e movimentações.",
    src: "/screens/produtos.png",
    alt: "Tela real de produtos do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 777,
  },
  {
    title: "Nova venda",
    description: "Cliente, produtos, sacola, pagamento, parcelas e vencimentos.",
    src: "/screens/nova-venda.png",
    alt: "Tela real de nova venda do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 790,
  },
  {
    title: "Histórico de vendas",
    description: "Busca, filtros, detalhes, valores e situação de cada venda.",
    src: "/screens/historico.png",
    alt: "Tela real do histórico de vendas do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 772,
  },
  {
    title: "Vencimentos",
    description: "Parcelas abertas, atrasadas, de hoje e dos próximos dias.",
    src: "/screens/vencimentos.png",
    alt: "Tela real de vencimentos do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 779,
  },
  {
    title: "Relatórios",
    description: "Resumo financeiro, comercial, produtos e clientes em destaque.",
    src: "/screens/relatorios.png",
    alt: "Tela real de relatórios do VendeLeve com dados demonstrativos",
    width: 1600,
    height: 775,
  },
];

export function ScreensGallery() {
  const [selectedScreen, setSelectedScreen] = useState<ScreenItem | null>(null);

  useEffect(() => {
    if (!selectedScreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedScreen(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedScreen]);

  return (
    <section className="section screens-section" id="telas" aria-labelledby="screens-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Telas reais do sistema</span>
          <h2 id="screens-title">Veja o VendeLeve como ele realmente é</h2>
          <p>
            Capturas fiéis da interface atual, exibidas em tamanho legível e com opção
            de ampliar no computador ou no celular.
          </p>
        </div>

        <div className="real-screens-list">
          {screens.map((screen, index) => (
            <article
              className={`real-screen-row${index % 2 === 1 ? " is-reversed" : ""}`}
              key={screen.title}
            >
              <div className="real-screen-copy">
                <span className="real-screen-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
                <button
                  className="real-screen-open"
                  type="button"
                  onClick={() => setSelectedScreen(screen)}
                  aria-label={`Ampliar a tela ${screen.title}`}
                >
                  <Icon name="search" /> Ampliar tela
                </button>
              </div>

              <button
                className="real-screen-preview"
                type="button"
                onClick={() => setSelectedScreen(screen)}
                aria-label={`Abrir a tela ${screen.title} em tamanho ampliado`}
              >
                <span className="real-screen-preview-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <b>VendeLeve</b>
                </span>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  className="real-screen-shot"
                  priority={index === 0}
                  sizes="(max-width: 720px) calc(100vw - 44px), (max-width: 1100px) 70vw, 820px"
                />
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedScreen && (
        <div
          className="screen-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Tela ampliada: ${selectedScreen.title}`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedScreen(null);
          }}
        >
          <div className="screen-lightbox-panel">
            <div className="screen-lightbox-header">
              <div>
                <strong>{selectedScreen.title}</strong>
                <span>{selectedScreen.description}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreen(null)}
                aria-label="Fechar imagem ampliada"
              >
                <Icon name="close" />
              </button>
            </div>

            <div className="screen-lightbox-scroll">
              <Image
                src={selectedScreen.src}
                alt={selectedScreen.alt}
                width={selectedScreen.width}
                height={selectedScreen.height}
                className="screen-lightbox-image"
                sizes="96vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
