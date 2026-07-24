import { Icon } from "./Icon";

const steps = [["01", "Solicite uma demonstração", "Conte um pouco sobre sua loja e sua forma de vender."], ["02", "Conheça o sistema", "Veja as telas e confirme se o VendeLeve combina com sua rotina."], ["03", "Prepare seus dados", "Cadastre ou envie as informações iniciais conforme a contratação."], ["04", "Comece a utilizar", "Receba a orientação inicial e passe a registrar sua operação."]];

export function HowItWorks() {
  return (
    <section className="section how-section" aria-labelledby="how-title">
      <div className="container"><div className="section-heading centered"><span className="eyebrow">Sem cadastro automático ou processo confuso</span><h2 id="how-title">Começar é simples</h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p><Icon name="arrow" /></article>)}</div></div>
    </section>
  );
}
