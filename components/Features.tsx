import { Icon, type IconName } from "./Icon";

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Clientes", text: "Cadastre dados, aniversário, observações e consulte o histórico de compras e parcelas." },
  { icon: "tag", title: "Produtos", text: "Organize fotos, códigos, categorias, fornecedores, preços e status dos produtos." },
  { icon: "package", title: "Estoque", text: "Acompanhe quantidades, nível de atenção e movimentações de entrada e saída." },
  { icon: "bag", title: "Vendas", text: "Registre produtos, quantidades, forma de pagamento, observações e valores da venda." },
  { icon: "wallet", title: "Parcelas", text: "Divida vendas, acompanhe vencimentos e registre pagamentos de forma prática." },
  { icon: "calendar", title: "Vencimentos", text: "Visualize parcelas abertas, atrasadas, de hoje e dos próximos 7 ou 30 dias." },
  { icon: "history", title: "Histórico", text: "Busque, filtre e consulte vendas pagas, parciais, em aberto ou canceladas." },
  { icon: "chart", title: "Relatórios", text: "Veja vendas, recebimentos, valores a receber, produtos e evolução comercial." },
  { icon: "whatsapp", title: "Atalho para WhatsApp", text: "Acesse a conversa do cliente e compartilhe informações da venda com rapidez." },
];

export function Features() {
  return (
    <section className="section features-section" id="recursos" aria-labelledby="features-title">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">Recursos que já fazem parte do sistema</span><h2 id="features-title">Tudo o que você precisa para organizar sua loja</h2><p>Sem promessas complicadas: o foco é facilitar clientes, produtos, vendas, parcelas e recebimentos.</p></div>
        <div className="features-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-icon"><Icon name={feature.icon} /></span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div>
      </div>
    </section>
  );
}
