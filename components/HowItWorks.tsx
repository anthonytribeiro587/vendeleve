import { Icon } from "./Icon";

const steps = [
  {
    number: "1",
    title: "Solicite uma demonstração",
    text: "Conte um pouco sobre sua loja e sua forma de vender.",
  },
  {
    number: "2",
    title: "Conheça o sistema",
    text: "Veja as telas reais e confirme se o VendeLeve combina com a sua rotina.",
  },
  {
    number: "3",
    title: "Prepare seus dados",
    text: "Cadastre ou envie as informações iniciais conforme a implantação contratada.",
  },
  {
    number: "4",
    title: "Comece a utilizar",
    text: "Receba a orientação inicial e passe a registrar clientes, produtos e vendas.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="section how-section" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Sem cadastro automático ou processo confuso</span>
          <h2 id="how-title">Começar é simples</h2>
        </div>

        <div className="steps-grid corrected-steps-grid">
          {steps.map((step) => (
            <article className="step-card corrected-step-card" key={step.number}>
              <span className="step-badge">Passo {step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="step-card-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
