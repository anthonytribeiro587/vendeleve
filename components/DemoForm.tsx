"use client";

import { useMemo, useRef, useState } from "react";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { normalizeDemoFormData, validateDemoForm, type DemoFormData, type DemoFormErrors } from "@/lib/validations";
import { Icon } from "./Icon";

const initialData: DemoFormData = { name: "", whatsapp: "", store: "", segment: "", message: "" };
const segments = ["Lojas de presentes", "Cosméticos", "Semijoias", "Lingerie", "Roupas", "Calçados", "Revendedora / consultora", "Pequeno bazar", "Outro"];

export function DemoForm() {
  const [data, setData] = useState<DemoFormData>(initialData);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [notice, setNotice] = useState("");
  const lastSubmitRef = useRef(0);
  const canSubmit = useMemo(() => data.name && data.whatsapp && data.store && data.segment, [data]);

  function updateField(field: keyof DemoFormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setNotice("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const now = Date.now();
    if (now - lastSubmitRef.current < 4000) { setNotice("Aguarde alguns segundos antes de tentar novamente."); return; }
    const normalized = normalizeDemoFormData(data);
    const validationErrors = validateDemoForm(normalized);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); setNotice("Revise os campos destacados."); return; }
    lastSubmitRef.current = now;
    const lines = [`Olá! Meu nome é ${normalized.name}.`, `Meu WhatsApp é ${normalized.whatsapp}.`, `Minha loja é ${normalized.store}.`, `Segmento: ${normalized.segment}.`, "Gostaria de conhecer o VendeLeve.", normalized.message ? `Mensagem: ${normalized.message}` : ""].filter(Boolean);
    setNotice("Tudo certo! Você será direcionado ao WhatsApp.");
    window.open(createWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section demo-section" id="demonstracao" aria-labelledby="demo-title">
      <div className="container demo-grid">
        <div className="demo-copy"><span className="eyebrow"><Icon name="whatsapp" /> Demonstração sem compromisso</span><h2 id="demo-title">Veja como o VendeLeve pode facilitar a rotina da sua loja</h2><p>Preencha os dados ao lado. O formulário apenas prepara sua mensagem e abre o WhatsApp; nenhuma informação é armazenada nesta página.</p><div className="demo-benefits"><span><Icon name="check" /> Atendimento direto</span><span><Icon name="check" /> Explicação das telas</span><span><Icon name="check" /> Alinhamento da implantação</span><span><Icon name="check" /> Sem checkout automático</span></div></div>
        <form className="demo-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row"><Field label="Seu nome" error={errors.name} required><input value={data.name} onChange={(e) => updateField("name", e.target.value)} autoComplete="name" placeholder="Como podemos te chamar?" /></Field><Field label="Seu WhatsApp" error={errors.whatsapp} required><input value={data.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} inputMode="tel" autoComplete="tel" placeholder="(51) 99999-9999" /></Field></div>
          <div className="form-row"><Field label="Nome da loja" error={errors.store} required><input value={data.store} onChange={(e) => updateField("store", e.target.value)} placeholder="Ex.: Encanto Presentes" /></Field><Field label="Segmento" error={errors.segment} required><select value={data.segment} onChange={(e) => updateField("segment", e.target.value)}><option value="">Selecione</option>{segments.map((segment) => <option key={segment}>{segment}</option>)}</select></Field></div>
          <Field label="Mensagem opcional"><textarea value={data.message} onChange={(e) => updateField("message", e.target.value)} rows={4} placeholder="Conte brevemente como você controla suas vendas hoje." /></Field>
          <button className="button primary full" type="submit" disabled={!canSubmit}>Solicitar demonstração pelo WhatsApp <Icon name="whatsapp" /></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
          <small className="form-privacy">Ao continuar, você concorda em enviar os dados preenchidos diretamente pelo WhatsApp.</small>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, required = false, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return <label className={error ? "field has-error" : "field"}><span>{label}{required && <em>*</em>}</span>{children}{error && <small>{error}</small>}</label>;
}
