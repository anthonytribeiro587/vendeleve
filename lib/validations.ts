export type DemoFormData = {
  name: string;
  whatsapp: string;
  store: string;
  segment: string;
  message: string;
};

export type DemoFormErrors = Partial<Record<keyof DemoFormData, string>>;

function cleanText(value: string, maxLength: number): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function normalizeDemoFormData(data: DemoFormData): DemoFormData {
  return {
    name: cleanText(data.name, 80),
    whatsapp: data.whatsapp.replace(/[^\d()+\-\s]/g, "").slice(0, 24),
    store: cleanText(data.store, 100),
    segment: cleanText(data.segment, 80),
    message: cleanText(data.message, 400),
  };
}

export function validateDemoForm(data: DemoFormData): DemoFormErrors {
  const errors: DemoFormErrors = {};
  const digits = data.whatsapp.replace(/\D/g, "");

  if (data.name.length < 2) errors.name = "Informe seu nome.";
  if (digits.length < 10) errors.whatsapp = "Informe um WhatsApp válido.";
  if (data.store.length < 2) errors.store = "Informe o nome da loja.";
  if (!data.segment) errors.segment = "Selecione o segmento.";

  return errors;
}
