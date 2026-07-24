import { createWhatsAppUrl } from "@/lib/whatsapp";
import { DashboardMockup, PhoneMockup } from "./DashboardMockup";
import { Icon } from "./Icon";

const trustItems = [["check", "Fácil de usar"], ["phone", "Celular e computador"], ["shield", "Dados organizados"], ["users", "Suporte humanizado"]] as const;

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Icon name="spark" /> Gestão simples para pequenas lojas</span>
          <h1>Menos caderno.<br /><span>Mais leveza para vender.</span></h1>
          <p>Organize clientes, produtos, estoque, vendas, parcelas e vencimentos em um só lugar. Um sistema simples, prático e feito para a rotina da sua loja.</p>
          <div className="hero-actions"><a className="button primary" href="#demonstracao">Quero uma demonstração<Icon name="arrow" /></a><a className="button secondary" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com o VendeLeve pelo WhatsApp"><Icon name="whatsapp" />Falar no WhatsApp</a></div>
          <div className="trust-list" aria-label="Diferenciais">{trustItems.map(([icon, label]) => <span key={label}><Icon name={icon} />{label}</span>)}</div>
        </div>
        <div className="hero-visual"><DashboardMockup /><PhoneMockup /></div>
      </div>
    </section>
  );
}
