import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";

const essential = ["Cadastro de clientes", "Produtos e controle de estoque", "Registro de vendas", "Parcelas e vencimentos", "Histórico de vendas", "Acesso pelo celular e computador", "Atalho para WhatsApp"];
const professional = ["Todos os recursos do Essencial", "Relatórios financeiros e comerciais", "Pagamentos parciais", "Registro de alterações", "Usuários adicionais", "Suporte prioritário"];

export function Pricing() {
  return (
    <section className="section pricing-section" id="planos" aria-labelledby="pricing-title"><div className="container"><div className="section-heading centered"><span className="eyebrow">Escolha conforme a necessidade da sua loja</span><h2 id="pricing-title">Planos simples e sem checkout complicado</h2><p>A contratação é confirmada diretamente com você após a demonstração e o alinhamento da implantação.</p></div><div className="pricing-grid"><PlanCard name="Essencial" price="R$ 129" description="Para organizar clientes, produtos, vendas e recebimentos." features={essential} message="Olá! Conheci o VendeLeve e gostaria de saber mais sobre o Plano Essencial." /><PlanCard name="Profissional" price="R$ 179" description="Para quem precisa de mais visão, controle e acompanhamento." features={professional} message="Olá! Conheci o VendeLeve e gostaria de saber mais sobre o Plano Profissional." featured /></div><p className="implementation-note"><Icon name="spark" /> Implantação e configuração inicial a partir de <strong>R$ 300</strong>, conforme o volume de dados e a necessidade de treinamento.</p></div></section>
  );
}

function PlanCard({ name, price, description, features, message, featured = false }: { name: string; price: string; description: string; features: string[]; message: string; featured?: boolean }) {
  return <article className={featured ? "plan-card featured" : "plan-card"}>{featured && <span className="recommended">Recomendado</span>}<div className="plan-header"><span>{name}</span><strong>{price}<small>/mês</small></strong><p>{description}</p></div><ul>{features.map((feature) => <li key={feature}><Icon name="check" />{feature}</li>)}</ul><a className={featured ? "button primary full" : "button secondary full"} href={createWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">Conhecer o plano <Icon name="arrow" /></a></article>;
}
