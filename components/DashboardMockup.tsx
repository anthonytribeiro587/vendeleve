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
        <div className="mock-plan"><span className="initial-badge">VL</span><span><strong>Sua loja</strong><small>Plano Profissional</small></span><Icon name="chevron" /></div>
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
