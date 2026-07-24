import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";

const planFeatures = [
  "Cadastro de clientes",
  "Produtos e controle de estoque",
  "Registro de vendas",
  "Parcelas e vencimentos",
  "Histórico de vendas",
  "Relatórios financeiros e comerciais",
  "Pagamentos parciais",
  "Acesso pelo celular e computador",
  "Atalho para WhatsApp",
  "Suporte inicial para implantação",
];

export function Pricing() {
  return (
    <section className="section pricing-section" id="planos" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Condição especial de lançamento</span>
          <h2 id="pricing-title">Um plano direto, simples e fácil de entender</h2>
          <p>
            O VendeLeve ainda está em fase de lançamento. Por isso, estamos abrindo uma
            condição especial para os primeiros clientes que entrarem agora.
          </p>
        </div>

        <div className="pricing-single-grid">
          <article className="plan-card featured launch-plan-card">
            <span className="recommended">Oferta de lançamento</span>

            <div className="plan-header launch-plan-header">
              <span>Plano VendeLeve</span>
              <small className="price-from">Mensalidade padrão: R$ 150/mês</small>
              <strong>
                R$ 100
                <small>/mês</small>
              </strong>
              <p>
                Condição promocional para os primeiros 20 clientes. Ideal para quem quer
                sair do caderno e começar a organizar a loja com mais leveza.
              </p>
            </div>

            <ul>
              {planFeatures.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="implementation-box">
              <span className="implementation-label">Implantação inicial</span>
              <div className="implementation-prices">
                <s>De R$ 750</s>
                <strong>por R$ 500</strong>
              </div>
              <p>
                Valor promocional para configuração inicial, organização do ambiente e
                orientação de uso conforme a necessidade da loja.
              </p>
            </div>

            <div className="pricing-mini-notes">
              <span>
                <Icon name="spark" /> Condição de lançamento limitada
              </span>
              <span>
                <Icon name="shield" /> Contratação alinhada direto na demonstração
              </span>
            </div>

            <a
              className="button primary full"
              href={createWhatsAppUrl(
                "Olá! Quero aproveitar a condição de lançamento do VendeLeve: mensalidade de R$ 100 e implantação de R$ 500."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero aproveitar essa condição <Icon name="arrow" />
            </a>
          </article>
        </div>

        <p className="implementation-note launch-note">
          <Icon name="spark" />
          <span>
            <strong>Resumo da oferta:</strong> mensalidade base de <strong>R$ 150/mês</strong>,
            com condição especial de <strong>R$ 100/mês</strong> para os primeiros 20 clientes,
            e implantação promocional de <strong>R$ 500</strong> no lugar de <strong>R$ 750</strong>.
          </span>
        </p>
      </div>
    </section>
  );
}
