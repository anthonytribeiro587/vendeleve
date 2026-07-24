const DEFAULT_MESSAGE =
  "Olá! Conheci o VendeLeve e gostaria de agendar uma demonstração para minha loja.";

export function sanitizePhoneNumber(value: string): string {
  return value.replace(/\D/g, "").slice(0, 15);
}

export function sanitizeMessage(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s{3,}/g, "  ")
    .trim()
    .slice(0, 1200);
}

export function createWhatsAppUrl(message?: string): string {
  const phone = sanitizePhoneNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  );
  const configuredMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || DEFAULT_MESSAGE;
  const safeMessage = sanitizeMessage(message || configuredMessage);
  const baseUrl = phone ? `https://wa.me/${phone}` : "https://wa.me/";

  return `${baseUrl}?text=${encodeURIComponent(safeMessage)}`;
}
