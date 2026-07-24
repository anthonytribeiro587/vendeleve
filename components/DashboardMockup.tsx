import { Icon } from "./Icon";
import { Logo } from "./Logo";

const charges = [
  ["MC", "Mariana Costa", "2/3", "15/08/2026", "R$ 120,00"],
  ["JA", "Juliana Alves", "1/4", "18/08/2026", "R$ 85,00"],
  ["FL", "Fernanda Lima", "3/3", "20/08/2026", "R$ 60,00"],
];

const sales = [
  ["Venda nº 038", "Juliana Alves", "10/08/2026", "R$ 289,90"],
  ["Venda nº 037", "Mariana Costa", "09/08/2026", "R$ 159,90"],
  ["Venda nº 036", "Fernanda Lima", "08/08/2026", "R$ 239,80"],
];

const nav = [
  ["Geral", "Início", "spark"], ["Operação", "Vendas", "bag"], ["", "Histórico de vendas", "history"],
  ["Cadastro", "Clientes", "users"], ["", "Produtos", "tag"], ["Controle", "Vencimentos", "calendar"],
  ["", "Relatórios", "chart"], ["Configurações", "Configurações", "shield"],
] as const;

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "dashboard-shell compact" : "dashboard-shell"} aria-label="Prévia ilustrativa do painel VendeLeve">
      <aside className="mock-sidebar">
        <Logo compact />
        <div className="mock-nav">
          {nav.map(([section, label, icon], index) => <div key={`${label}-${index}`}>{section && <span className="mock-nav-section">{section}</span>}<span className={label === "Início" ? "mock-nav-item active" : "mock-nav-item"}><Icon name={icon} />{label}</span></div>)}
        </div>
        <div className="mock-plan"><span className="initial-badge">VL</span><span><strong>Sua loja</strong><small>Plano VendeLeve</small></span><Icon name="chevron" /></div>
      </aside>
      <div className="mock-main">
        <div className="mock-topbar"><h3>Início</h3><div className="mock-top-actions"><button type="button"><Icon name="users" /> Novo cliente</button><button type="button" className="accent"><Icon name="bag" /> Nova venda</button></div></div>
        <div className="metric-grid">
          <Metric icon="users" label="Clientes ativos" value="86" note="+8 este mês" tone="peach" />
          <Metric icon="bag" label="Vendas do mês" value="R$ 12.480,00" note="28 vendas neste mês" tone="rose" />
          <Metric icon="wallet" label="A receber" value="R$ 4.320,00" note="12 parcelas" tone="yellow" />
          <Metric icon="calendar" label="Atrasados" value="R$ 780,00" note="3 parcelas" tone="red" />
        </div>
        <div className="mock-table-grid">
          <div className="mock-panel"><PanelHeading icon="calendar" title="Próximas cobranças" /><div className="table-head"><span>Cliente</span><span>Parcela</span><span>Vencimento</span><span>Valor</span></div>{charges.map(([initial, name, parcel, date, value]) => <div className="table-row" key={name}><span className="client-cell"><b>{initial}</b>{name}</span><span>{parcel}</span><span>{date}</span><strong>{value}</strong></div>)}</div>
          <div className="mock-panel"><PanelHeading icon="bag" title="Últimas vendas" /><div className="table-head sales"><span>Venda</span><span>Cliente</span><span>Total</span><span>Status</span></div>{sales.map(([sale, name, , value]) => <div className="table-row sales" key={sale}><span>{sale}</span><span>{name}</span><strong>{value}</strong><em>Pago</em></div>)}</div>
        </div>
        {!compact && <div className="quick-actions"><PanelHeading icon="spark" title="Ações rápidas" /><div className="quick-grid"><span><Icon name="bag" /><b>Nova venda</b><small>Criar uma venda</small></span><span><Icon name="users" /><b>Novo cliente</b><small>Cadastrar cliente</small></span><span><Icon name="calendar" /><b>Ver vencimentos</b><small>Acompanhar parcelas</small></span></div></div>}
      </div>
    </div>
  );
}

function Metric({ icon, label, value, note, tone }: { icon: "users" | "bag" | "wallet" | "calendar"; label: string; value: string; note: string; tone: string }) {
  return <div className={`metric-card ${tone}`}><span className="metric-icon"><Icon name={icon} /></span><span><small>{label}</small><strong>{value}</strong><em>{note}</em></span></div>;
}

function PanelHeading({ icon, title }: { icon: "calendar" | "bag" | "spark"; title: string }) {
  return <div className="panel-heading"><span><Icon name={icon} /> <strong>{title}</strong></span><button type="button">Ver todos</button></div>;
}

export function PhoneMockup() {
  return (
    <div className="phone-shell" aria-label="Prévia ilustrativa do VendeLeve no celular">
      <div className="phone-notch" /><div className="phone-status"><span>9:41</span><span>● ● ◼</span></div><div className="phone-title"><strong>Início</strong><Icon name="spark" /></div>
      <div className="phone-metrics"><span><small>Vendas do mês</small><strong>R$ 12.480</strong><em>28 vendas</em></span><span><small>A receber</small><strong>R$ 4.320</strong><em>12 parcelas</em></span><span className="danger"><small>Atrasados</small><strong>R$ 780</strong><em>3 parcelas</em></span></div>
      <div className="phone-list"><div className="phone-list-title"><strong>Próximas cobranças</strong><small>Ver todas</small></div>{charges.slice(0, 3).map(([initial, name, parcel, , value]) => <div key={name}><b>{initial}</b><span><strong>{name}</strong><small>Parcela {parcel}</small></span><em>{value}</em></div>)}</div>
      <div className="phone-nav"><span className="active"><Icon name="spark" /><small>Início</small></span><span><Icon name="bag" /><small>Vendas</small></span><span><Icon name="users" /><small>Clientes</small></span><span><Icon name="menu" /><small>Mais</small></span></div>
    </div>
  );
}

const showcaseClients = [
  ["AS", "Ana Clara Souza"],
  ["JP", "João Pereira"],
  ["ML", "Maria Luiza"],
  ["RS", "Ricardo Santos"],
];

const showcaseProducts = [
  ["Perfume Elegance", "9 un."],
  ["Bolsa Charm", "4 un."],
  ["Kit Presente", "6 un."],
];

export function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-label="Prévia ilustrativa do VendeLeve no celular">
      <div className="showcase-halo" />

      <article className="showcase-float showcase-clients">
        <div className="showcase-card-title"><strong>Clientes</strong><Icon name="users" /></div>
        <div className="showcase-search"><Icon name="search" /> Buscar cliente...</div>
        {showcaseClients.map(([initial, name]) => <div className="showcase-client" key={name}><b>{initial}</b><span><strong>{name}</strong><small>Cadastro ativo</small></span></div>)}
      </article>

      <article className="showcase-float showcase-products">
        <div className="showcase-card-title"><strong>Produtos</strong><Icon name="tag" /></div>
        {showcaseProducts.map(([name, stock]) => <div className="showcase-product" key={name}><span><Icon name="gift" /></span><strong>{name}</strong><small>{stock}</small></div>)}
      </article>

      <div className="showcase-device">
        <div className="showcase-device-notch" />
        <div className="showcase-device-status"><span>9:41</span><span>● ● ◼</span></div>
        <div className="showcase-device-brand"><Logo compact /><Icon name="menu" /></div>
        <h3>Início</h3>
        <div className="showcase-metrics">
          <Metric icon="users" label="Clientes ativos" value="48" note="+5 este mês" tone="peach" />
          <Metric icon="bag" label="Vendas do mês" value="R$ 4.620,00" note="12 vendas" tone="rose" />
          <Metric icon="wallet" label="A receber" value="R$ 1.250,00" note="3 parcelas" tone="yellow" />
          <Metric icon="calendar" label="Atrasados" value="R$ 320,00" note="2 parcelas" tone="red" />
        </div>
        <div className="showcase-device-panel"><PanelHeading icon="calendar" title="Próximas cobranças" /><div className="showcase-device-row"><span><b>AS</b><strong>Ana Clara Souza</strong></span><small>15/08/2026</small><em>R$ 120,00</em></div></div>
        <div className="showcase-device-panel"><PanelHeading icon="bag" title="Últimas vendas" /><div className="showcase-device-row"><span><b>JP</b><strong>João Pereira</strong></span><small>10/08/2026</small><em className="paid">Pago</em></div></div>
        <div className="showcase-quick"><span><Icon name="bag" /><small>Nova venda</small></span><span><Icon name="users" /><small>Novo cliente</small></span><span><Icon name="calendar" /><small>Vencimentos</small></span></div>
      </div>

      <article className="showcase-float showcase-due">
        <div className="showcase-card-title"><strong>Vencimentos</strong><span>Ver todos</span></div>
        <div className="showcase-due-row"><b>AS</b><span><strong>15/08/2026</strong><small>Parcela 2/3</small></span><em>R$ 120,00</em></div>
        <div className="showcase-due-row"><b>JP</b><span><strong>18/08/2026</strong><small>Parcela 1/4</small></span><em>R$ 80,00</em></div>
        <div className="showcase-due-row"><b>ML</b><span><strong>22/08/2026</strong><small>Parcela 3/5</small></span><em>R$ 200,00</em></div>
        <div className="showcase-alert"><Icon name="calendar" /> 2 atrasadas <strong>R$ 320,00</strong></div>
      </article>

      <article className="showcase-float showcase-summary">
        <div className="showcase-card-title"><strong>Resumo do mês</strong><span>Julho/2026</span></div>
        <div><span>Vendas</span><strong>R$ 4.620,00</strong></div>
        <div><span>Recebido</span><strong className="positive">R$ 2.980,00</strong></div>
        <div><span>A receber</span><strong className="warning">R$ 1.250,00</strong></div>
        <div><span>Atrasado</span><strong className="negative">R$ 320,00</strong></div>
        <button type="button">Ver relatório completo</button>
      </article>
    </div>
  );
}
