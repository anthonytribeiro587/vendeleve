import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";

export function WhatsAppButton() {
  return <a className="floating-whatsapp" href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com o VendeLeve pelo WhatsApp"><Icon name="whatsapp" /><span>Falar no WhatsApp</span></a>;
}
