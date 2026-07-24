import Link from "next/link";
import { CONTACT_EMAIL, INSTAGRAM_URL, NAV_ITEMS } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Logo /><p>Clientes, produtos, estoque, vendas, parcelas e vencimentos em um sistema simples para pequenas lojas.</p><div className="footer-socials">{INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram do VendeLeve"><Icon name="instagram" /></a>}<a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do VendeLeve"><Icon name="whatsapp" /></a></div></div><div><h3>Navegação</h3><ul>{NAV_ITEMS.slice(1).map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></div><div><h3>Informações</h3><ul><li><Link href="/privacidade">Política de Privacidade</Link></li><li><Link href="/termos">Termos de Uso</Link></li>{CONTACT_EMAIL && <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>}</ul></div><div><h3>Fale conosco</h3><p>Agende uma demonstração para conhecer as telas e alinhar a implantação.</p><a className="button secondary small" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Abrir WhatsApp</a></div></div><div className="container footer-bottom"><span>© 2026 VendeLeve. Todos os direitos reservados.</span><span>Gestão simples para pequenas lojas.</span></div></footer>;
}
