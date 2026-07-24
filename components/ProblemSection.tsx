import { Icon, type IconName } from "./Icon";

const problems: { icon: IconName; title: string; text: string }[] = [
  { icon: "document", title: "Informações espalhadas", text: "Clientes, produtos e vendas registrados em lugares diferentes." },
  { icon: "calendar", title: "Parcelas esquecidas", text: "Dificuldade para acompanhar datas, vencimentos e cobranças." },
  { icon: "package", title: "Estoque sem controle", text: "Falta de clareza sobre produtos disponíveis e necessidade de reposição." },
  { icon: "search", title: "Histórico difícil de encontrar", text: "Demora para consultar compras e informações de cada cliente." },
];

export function ProblemSection() {
  return (
    <section className="section problems-section" aria-labelledby="problems-title">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">Uma rotina mais simples começa pela organização</span><h2 id="problems-title">Sua loja ainda depende de cadernos, planilhas e mensagens?</h2><p>O VendeLeve reúne as informações que você já usa no dia a dia e facilita a consulta quando precisa.</p></div>
        <div className="problem-grid">{problems.map((item) => <article className="problem-card" key={item.title}><span className="feature-icon"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div>
    </section>
  );
}
