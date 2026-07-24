"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <div className="mobile-nav-actions">
            <a className="button primary small" href="#demonstracao" onClick={() => setOpen(false)}>Quero uma demonstração</a>
            <a className="button whatsapp small" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com o VendeLeve pelo WhatsApp"><Icon name="whatsapp" />WhatsApp</a>
          </div>
        </nav>
        <div className="header-actions">
          <a className="button primary small" href="#demonstracao">Quero uma demonstração</a>
          <a className="icon-button whatsapp-icon" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com o VendeLeve pelo WhatsApp"><Icon name="whatsapp" /></a>
        </div>
        <button className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><Icon name={open ? "close" : "menu"} /></button>
      </div>
    </header>
  );
}
