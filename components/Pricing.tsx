import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon, type IconName } from "./Icon";

const included: Array<{ title: string; text: string }> = [
  { title: "Cadastro de clientes", text: "Telefone, aniversário, observações e histórico." },
  { title: "Produtos e estoque", text: "Controle de quantidade, atenção e movimentações." },
  { title: "Vendas e parcelas", text: "Venda à vista ou parcelada com vencimentos." },
  { title: "Vencimentos", text: "Parcelas abertas, próximas e atrasadas." },
  { title: "Histórico de vendas", text: "Consulte vendas, produtos, valores e status." },
  { title: "Relatórios", text: "Resumo financeiro e comercial da sua loja." },
  { title: "Atalho para WhatsApp", text: "Acesse a conversa do cliente com rapidez." },
  { title: "Acesso pelo celular", text: "Use o sistema de onde estiver." },
  { title: "Acesso no computador", text: "Mais conforto para a rotina da loja." },
];

const benefits: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "gift", title: "Feito para pequenas lojas", text: "Pensado para uma rotina simples, direta e organizada." },
  { icon: "phone", title: "Suporte humano", text: "Atendimento próximo para ajudar na utilização." },
  { icon: "spark", title: "Simplicidade que vende", text: "Mais controle e menos tempo perdido com anotações." },
];

const launchMessage = "Olá! Conheci o VendeLeve e quero garantir a condição de lançamento de R$ 100 por mês para os primeiros 20 clientes.";

export function Pricing() {
  return (
    <section className="section pricing-section" id="planos" aria-labelledby="pricing-title">
      <div className="container">
        <article className="launch-offer">
          <div className="launch-offer-top">
            <div className="launch-price-block">
              <span className="launch-badge"><Icon name="spark" /> Para os primeiros 20 clientes</span>
              <span className="launch-kicker">Oferta de lançamento</span>
              <h2 id="pricing-title">Plano Lançamento</h2>
              <p>Tenha clientes, produtos, estoque, vendas, parcelas, vencimentos e relatórios em um só sistema.</p>
              <div className="launch-price"><small>R$</small><strong>100</strong><span>/mês</span></div>
              <div className="launch-implantation">Implantação e configuração inicial a partir de <strong>R$ 500</strong>.</div>
            </div>

            <div className="launch-value-card">
              <div className="launch-value-list">
                <span><Icon name="check" /> Todas as funções atuais do VendeLeve</span>
                <span><Icon name="check" /> Atualizações e correções do sistema</span>
                <span><Icon name="check" /> Suporte para utilização</span>
                <span><Icon name="check" /> Acesso pelo celular e computador</span>
              </div>
              <a className="button primary full" href={createWhatsAppUrl(launchMessage)} target="_blank" rel="noopener noreferrer">Quero esta condição <Icon name="arrow" /></a>
              <a className="launch-whatsapp" href={createWhatsAppUrl(launchMessage)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Falar no WhatsApp</a>
            </div>

            <div className="launch-store-art" aria-hidden="true">
              <div className="store-heart"><Icon name="gift" /></div>
              <div className="store-roof"><i /><i /><i /><i /><i /></div>
              <div className="store-building"><span className="store-door" /><span className="store-window" /><span className="store-box"><Icon name="package" /></span></div>
            </div>
          </div>

          <div className="launch-included">
            <div className="launch-included-heading"><span /><h3>Tudo o que sua loja precisa, em um só sistema</h3><span /></div>
            <div className="launch-included-grid">
              {included.map((item) => <div className="launch-feature" key={item.title}><span><Icon name="check" /></span><div><strong>{item.title}</strong><small>{item.text}</small></div></div>)}
            </div>
          </div>
        </article>

        <div className="launch-benefits">
          {benefits.map(({ icon, title, text }) => <article key={title}><span><Icon name={icon} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
