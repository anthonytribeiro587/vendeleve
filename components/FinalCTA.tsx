import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";

export function FinalCTA() {
  return <section className="section final-cta-section"><div className="container final-cta"><div><span className="eyebrow light">Sua rotina pode ficar mais organizada</span><h2>Organize sua loja e venda mais leve.</h2><p>Solicite uma demonstração e veja como o VendeLeve pode facilitar o controle de clientes, produtos, vendas e recebimentos.</p></div><div className="final-cta-actions"><a className="button light" href="#demonstracao">Quero uma demonstração <Icon name="arrow" /></a><a className="button whatsapp" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Falar no WhatsApp</a></div></div></section>;
}
