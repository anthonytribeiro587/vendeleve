const audiences = [["🎁", "Lojas de presentes"], ["🧴", "Cosméticos"], ["💍", "Semijoias"], ["🎀", "Lingerie"], ["👚", "Roupas"], ["👟", "Calçados"], ["🛍️", "Revendedoras"], ["🏪", "Pequenos bazares"]];

export function Audience() {
  return (
    <section className="section audience-section" id="publico" aria-labelledby="audience-title">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">Feito para vendas com atendimento próximo</span><h2 id="audience-title">Feito para o seu tipo de negócio</h2><p>Ideal para quem precisa organizar clientes, produtos, vendas e recebimentos sem transformar a rotina em algo complicado.</p></div>
        <div className="audience-grid">{audiences.map(([icon, label]) => <div className="audience-card" key={label}><span aria-hidden="true">{icon}</span><strong>{label}</strong></div>)}</div>
      </div>
    </section>
  );
}
