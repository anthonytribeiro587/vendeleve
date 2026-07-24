import { Icon } from "./Icon";

const before = ["Anotações em cadernos", "Planilhas desatualizadas", "Conversas perdidas no WhatsApp", "Vencimentos esquecidos", "Dificuldade para encontrar vendas", "Estoque sem atualização"];
const after = ["Informações em um só lugar", "Histórico completo de cada cliente", "Vendas registradas e fáceis de consultar", "Parcelas e vencimentos acompanhados", "Estoque atualizado conforme as movimentações", "Relatórios claros para acompanhar a loja"];

export function BeforeAfter() {
  return (
    <section className="section before-after-section" aria-labelledby="before-after-title">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">Mais controle sem complicar a rotina</span><h2 id="before-after-title">Do caderno para uma gestão mais leve</h2></div>
        <div className="comparison-grid">
          <article className="comparison-card before"><span className="comparison-label">Antes</span><h3>Informações espalhadas e difíceis de acompanhar</h3><ul>{before.map((item) => <li key={item}><Icon name="close" />{item}</li>)}</ul></article>
          <span className="comparison-arrow"><Icon name="arrow" /></span>
          <article className="comparison-card after"><span className="comparison-label">Com o VendeLeve</span><h3>Uma visão mais organizada da rotina da loja</h3><ul>{after.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}
