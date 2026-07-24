import { createWhatsAppUrl } from "@/lib/whatsapp";
import { HeroShowcase } from "./DashboardMockup";
import { Icon, type IconName } from "./Icon";

const highlights: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "users", title: "Clientes", text: "Cadastre e organize" },
  { icon: "tag", title: "Produtos", text: "Controle seu estoque" },
  { icon: "bag", title: "Vendas", text: "Registre e parcele" },
  { icon: "calendar", title: "Vencimentos", text: "Não perca prazos" },
  { icon: "chart", title: "Relatórios", text: "Acompanhe resultados" },
  { icon: "phone", title: "Acesso fácil", text: "Celular ou computador" },
];

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-glow" />
      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Icon name="spark" /> Gestão simples para pequenas lojas</span>
            <h1>Menos caderno.<br /><span>Mais leveza para vender.</span></h1>
            <p>Organize clientes, produtos, estoque, vendas, parcelas e vencimentos em um só lugar. Tudo o que sua loja precisa, na palma da mão.</p>
            <div className="hero-actions">
              <a className="button primary" href="#demonstracao">Quero uma demonstração <Icon name="arrow" /></a>
              <a className="button whatsapp" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com o VendeLeve pelo WhatsApp"><Icon name="whatsapp" /> Falar no WhatsApp</a>
            </div>
          </div>
          <HeroShowcase />
        </div>

        <div className="hero-benefit-strip" aria-label="Principais recursos do VendeLeve">
          {highlights.map(({ icon, title, text }) => (
            <div className="hero-benefit" key={title}>
              <span><Icon name={icon} /></span>
              <strong>{title}</strong>
              <small>{text}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
