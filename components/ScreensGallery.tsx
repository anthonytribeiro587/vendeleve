import { Icon } from "./Icon";

const clients = [
  ["MC", "Mariana Costa", "(51) 99912-3401", "R$ 680,00 · 2 parcelas"],
  ["JA", "Juliana Alves", "(51) 99821-4202", "R$ 540,00 · 1 parcela"],
  ["FL", "Fernanda Lima", "(51) 99731-5003", "R$ 390,00 · em dia"],
  ["BS", "Beatriz Souza", "(51) 99641-6804", "R$ 820,00 · 3 parcelas"],
];

const products = [
  ["🎁", "Kit Presente Floratta", "KIT-001", "R$ 129,90", "15 un."],
  ["🧴", "Perfume Elegance", "PER-018", "R$ 159,90", "8 un."],
  ["👜", "Bolsa Charm", "BOL-012", "R$ 189,90", "5 un."],
  ["💍", "Colar Coração", "SEM-034", "R$ 69,90", "12 un."],
];

const sales = [
  ["Venda nº 038", "Juliana Alves", "R$ 289,90", "Pago"],
  ["Venda nº 037", "Mariana Costa", "R$ 159,90", "Pago"],
  ["Venda nº 036", "Fernanda Lima", "R$ 239,80", "Parcial"],
  ["Venda nº 035", "Beatriz Souza", "R$ 189,90", "Em aberto"],
];

const due = [
  ["Mariana Costa", "2/3", "15/08/2026", "R$ 120,00", "Aberta"],
  ["Juliana Alves", "1/4", "18/08/2026", "R$ 85,00", "Aberta"],
  ["Beatriz Souza", "3/5", "20/08/2026", "R$ 160,00", "Atrasada"],
  ["Carla Ribeiro", "1/2", "22/08/2026", "R$ 75,00", "Aberta"],
];

export function ScreensGallery() {
  return (
    <section className="section screens-section" id="telas" aria-labelledby="screens-title">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">Interface fiel ao sistema real</span><h2 id="screens-title">Conheça o VendeLeve por dentro</h2><p>As telas abaixo reproduzem a organização do sistema com dados fictícios e clientes representados apenas por iniciais.</p></div>
        <div className="screens-grid">
          <ScreenCard title="Clientes" description="Dados, observações, compras e parcelas de cada cliente."><ClientsScreen /></ScreenCard>
          <ScreenCard title="Produtos" description="Fotos, códigos, preços, estoque e informações do produto."><ProductsScreen /></ScreenCard>
          <ScreenCard title="Nova venda" description="Produtos, sacola, forma de pagamento e geração de parcelas."><NewSaleScreen /></ScreenCard>
          <ScreenCard title="Histórico de vendas" description="Busca, filtros, valores, clientes e status das vendas."><HistoryScreen /></ScreenCard>
          <ScreenCard title="Vencimentos" description="Parcelas abertas, atrasadas e próximas a vencer."><DueScreen /></ScreenCard>
          <ScreenCard title="Relatórios" description="Resumo financeiro e comercial em um período selecionado."><ReportsScreen /></ScreenCard>
        </div>
      </div>
    </section>
  );
}

function ScreenCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <article className="screen-card"><div className="screen-window"><div className="screen-window-bar"><span/><span/><span/><b>VendeLeve</b></div>{children}</div><h3>{title}</h3><p>{description}</p></article>;
}
function ScreenHeader({ title, action }: { title: string; action?: string }) {
  return <div className="mini-header"><strong>{title}</strong>{action && <button type="button">{action}</button>}</div>;
}
function ClientsScreen() {
  return <div className="mini-screen clients-screen"><ScreenHeader title="Clientes" action="Novo cliente" /><div className="mini-search"><Icon name="search" /> Buscar por nome ou telefone...</div><div className="client-list-mini">{clients.map(([initial, name, phone, summary]) => <div key={name}><b>{initial}</b><span><strong>{name}</strong><small>{phone}</small><em>{summary}</em></span><Icon name="chevron" /></div>)}</div></div>;
}
function ProductsScreen() {
  return <div className="mini-screen"><ScreenHeader title="Produtos" action="Novo produto" /><div className="mini-pills"><span className="active">Todos</span><span>Kits</span><span>Mais filtros</span></div><div className="product-list-mini">{products.map(([emoji, name, code, price, stock]) => <div key={name}><b>{emoji}</b><span><strong>{name}</strong><small>{code}</small></span><em>{price}<small>{stock}</small></em></div>)}</div></div>;
}
function NewSaleScreen() {
  return <div className="mini-screen sale-screen"><ScreenHeader title="Nova venda" /><label>Cliente<span>Juliana Alves⌄</span></label><label>Produto<span>Kit Presente Floratta <em>Estoque: 15 un.</em></span></label><div className="quantity-row"><span>Qtd. <b>− &nbsp; 1 &nbsp; +</b></span><span>Valor un. <b>R$ 129,90</b></span></div><div className="sale-bag"><strong>Sacola da venda</strong><span>2 itens · R$ 199,80</span></div><div className="sale-summary"><span>Parcelado</span><span>3 parcelas</span></div><button className="mini-primary" type="button">Registrar venda e parcelas</button></div>;
}
function HistoryScreen() {
  return <div className="mini-screen"><ScreenHeader title="Histórico de vendas" /><div className="mini-pills"><span className="active">Todos</span><span>Em aberto</span><span>Pagos</span><span>Parciais</span></div><div className="history-list-mini">{sales.map(([sale, name, value, status]) => <div key={sale}><span><strong>{sale}</strong><small>{name}</small></span><b>{value}</b><em className={status === "Pago" ? "paid" : status === "Parcial" ? "partial" : "open"}>{status}</em></div>)}</div></div>;
}
function DueScreen() {
  return <div className="mini-screen"><ScreenHeader title="Agenda de vencimentos" /><div className="mini-pills"><span className="active">Abertos</span><span>Atrasados</span><span>Hoje</span><span>7 dias</span></div><div className="due-list-mini">{due.map(([name, parcel, date, value, status]) => <div key={name}><b>{name}</b><span>{parcel}</span><span>{date}</span><strong>{value}</strong><em className={status === "Atrasada" ? "late" : "open"}>{status}</em></div>)}</div></div>;
}
function ReportsScreen() {
  return <div className="mini-screen reports-screen"><ScreenHeader title="Relatórios" /><div className="report-metrics"><span><small>Vendas</small><strong>R$ 12.480</strong></span><span><small>Recebido</small><strong>R$ 8.160</strong></span><span><small>A receber</small><strong>R$ 4.320</strong></span><span><small>Atrasado</small><strong>R$ 780</strong></span></div><div className="report-chart"><div><strong>Evolução das vendas</strong><small>Últimos 4 meses</small></div><svg viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d66b37" stopOpacity=".35"/><stop offset="1" stopColor="#d66b37" stopOpacity="0"/></linearGradient></defs><path d="M0 72 C40 66 55 58 80 60 S125 45 150 48 S195 30 220 35 S270 16 300 18 L300 90 L0 90 Z" fill="url(#chartFill)"/><path d="M0 72 C40 66 55 58 80 60 S125 45 150 48 S195 30 220 35 S270 16 300 18" fill="none" stroke="#d66b37" strokeWidth="4"/></svg></div></div>;
}
