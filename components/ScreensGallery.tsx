import Image from "next/image";

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
  return (
    <section className="section screens-section" id="telas" aria-labelledby="screens-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Telas reais do sistema</span>
          <h2 id="screens-title">Veja o VendeLeve como ele realmente é</h2>
          <p>
            Aqui você vê capturas da interface atual do sistema, com dados fictícios
            de demonstração e sem promessas de recursos que ainda não existem.
          </p>
        </div>

        <div className="screens-grid real-screens-grid">
          {screens.map((screen, index) => (
            <article className="screen-card real-screen-card" key={screen.title}>
              <div className="screen-window real-screen-window">
                <div className="screen-window-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <b>VendeLeve</b>
                </div>

                <div className="real-screen-frame">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    className="real-screen-shot"
                    priority={index < 2}
                    sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 46vw"
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
