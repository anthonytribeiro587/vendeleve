import Image from "next/image";

const screens = [
  {
    title: "Início",
    description: "Indicadores, próximas cobranças, últimas vendas e ações rápidas.",
    src: "/screens/dashboard.png",
    alt: "Tela real do painel inicial do VendeLeve com dados demonstrativos",
    featured: true,
  },
  {
    title: "Clientes",
    description: "Dados, observações, compras, parcelas e acesso ao WhatsApp.",
    src: "/screens/clientes.png",
    alt: "Tela real de clientes do VendeLeve com dados demonstrativos",
  },
  {
    title: "Produtos",
    description: "Fotos, códigos, preços, fornecedores, estoque e movimentações.",
    src: "/screens/produtos.png",
    alt: "Tela real de produtos do VendeLeve com dados demonstrativos",
  },
  {
    title: "Nova venda",
    description: "Cliente, produtos, sacola, pagamento, parcelas e vencimentos.",
    src: "/screens/nova-venda.png",
    alt: "Tela real de nova venda do VendeLeve com dados demonstrativos",
  },
  {
    title: "Histórico de vendas",
    description: "Busca, filtros, detalhes, valores e situação de cada venda.",
    src: "/screens/historico.png",
    alt: "Tela real do histórico de vendas do VendeLeve com dados demonstrativos",
  },
  {
    title: "Vencimentos",
    description: "Parcelas abertas, atrasadas, de hoje e dos próximos dias.",
    src: "/screens/vencimentos.png",
    alt: "Tela real de vencimentos do VendeLeve com dados demonstrativos",
  },
  {
    title: "Relatórios",
    description: "Resumo financeiro, comercial, produtos e clientes em destaque.",
    src: "/screens/relatorios.png",
    alt: "Tela real de relatórios do VendeLeve com dados demonstrativos",
    featured: true,
  },
] as const;

export function ScreensGallery() {
  return (
    <section className="section screens-section" id="telas" aria-labelledby="screens-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Capturas fiéis da interface atual</span>
          <h2 id="screens-title">Conheça o VendeLeve por dentro</h2>
          <p>
            As imagens usam a estrutura real do sistema, com a nova identidade VendeLeve
            e dados fictícios preparados somente para demonstração.
          </p>
        </div>

        <div className="screens-grid real-screens-grid">
          {screens.map((screen, index) => (
            <article
              className={`screen-card real-screen-card${screen.featured ? " featured" : ""}`}
              key={screen.title}
            >
              <div className="screen-window real-screen-window">
                <div className="screen-window-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <b>VendeLeve</b>
                </div>

                <div className="real-screen-media">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    priority={index === 0}
                    sizes={
                      screen.featured
                        ? "(max-width: 720px) 100vw, 1180px"
                        : "(max-width: 720px) 100vw, 570px"
                    }
                  />
                </div>
              </div>

              <div className="real-screen-copy">
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
