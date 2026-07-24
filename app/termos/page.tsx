import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Landing Page e contratação do VendeLeve.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-container">
          <span className="eyebrow">Condições gerais da apresentação comercial</span>
          <h1>Termos de Uso</h1>
          <p className="legal-intro">Última atualização: 24 de julho de 2026.</p>
          <LegalSection title="1. Finalidade da Landing Page"><p>A página tem finalidade informativa e comercial. Ela apresenta recursos atuais do VendeLeve e permite solicitar uma demonstração, sem criar contratação automática.</p></LegalSection>
          <LegalSection title="2. Demonstração e proposta"><p>Preços, implantação, treinamento, quantidade de usuários, migração de dados e condições específicas deverão ser confirmados em proposta ou contrato antes da liberação do ambiente definitivo.</p></LegalSection>
          <LegalSection title="3. Mensalidade e implantação"><p>A mensalidade cobre o direito de utilização conforme o plano contratado, manutenção corretiva, segurança e suporte dentro dos limites acordados. A implantação poderá variar conforme volume de dados, configuração e treinamento.</p></LegalSection>
          <LegalSection title="4. Suporte e manutenção"><p>O suporte atende dúvidas de utilização e correções de funcionamento. Prazos, canais e prioridades podem variar conforme o plano e o contrato.</p></LegalSection>
          <LegalSection title="5. Novos módulos e alterações"><p>Novas funções, integrações, automações, mudanças estruturais ou personalizações fora do escopo contratado poderão ser avaliadas e cobradas separadamente.</p></LegalSection>
          <LegalSection title="6. Uso adequado"><p>O cliente é responsável pelos dados inseridos, pelos acessos concedidos e pelo uso lícito do sistema. É proibido tentar contornar controles de acesso, explorar falhas ou utilizar a plataforma para atividades ilegais.</p></LegalSection>
          <LegalSection title="7. Disponibilidade e limitações"><p>Serão adotadas medidas razoáveis de continuidade e correção. Podem ocorrer indisponibilidades decorrentes de manutenção, serviços externos, internet, dispositivos ou eventos fora do controle direto do fornecedor.</p></LegalSection>
          <LegalSection title="8. Propriedade intelectual"><p>A marca, identidade, interface, código e materiais do VendeLeve permanecem protegidos. A contratação concede licença de uso e não transfere propriedade sobre o software.</p></LegalSection>
          <LegalSection title="9. Atualização dos termos"><p>Os termos poderão ser atualizados. Condições comerciais específicas já formalizadas serão tratadas conforme o contrato aplicável.</p></LegalSection>
          <p className="legal-note">Este modelo é informativo e editável e deve ser revisado juridicamente antes de servir como documento contratual definitivo.</p>
          <Link className="button secondary" href="/">Voltar para a página inicial</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2>{title}</h2>{children}</section>;
}
