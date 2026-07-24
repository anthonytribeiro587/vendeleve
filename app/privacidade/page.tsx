import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Landing Page do VendeLeve.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-container">
          <span className="eyebrow">Transparência no contato</span>
          <h1>Política de Privacidade</h1>
          <p className="legal-intro">Última atualização: 24 de julho de 2026.</p>
          <LegalSection title="1. Finalidade desta página"><p>Esta Landing Page apresenta o VendeLeve e permite que visitantes solicitem uma demonstração ou entrem em contato pelo WhatsApp.</p></LegalSection>
          <LegalSection title="2. Dados informados pelo visitante"><p>O formulário pode solicitar nome, WhatsApp, nome da loja, segmento e uma mensagem opcional. A página não armazena esses dados em banco próprio: ela prepara uma mensagem e direciona o visitante ao WhatsApp.</p></LegalSection>
          <LegalSection title="3. Contato pelo WhatsApp"><p>Ao utilizar o formulário ou os botões de contato, o visitante será direcionado ao WhatsApp. A partir desse momento, o tratamento da conversa também está sujeito às políticas da plataforma utilizada.</p></LegalSection>
          <LegalSection title="4. Ferramentas de análise"><p>A página poderá utilizar ferramentas de medição de acesso e desempenho para entender visitas, dispositivos e interações gerais. Essas ferramentas deverão ser configuradas de forma proporcional e informadas quando aplicável.</p></LegalSection>
          <LegalSection title="5. Compartilhamento e venda de dados"><p>Os dados informados pelo visitante não serão vendidos a anunciantes. Poderão ser utilizados apenas para responder ao contato, preparar uma demonstração, enviar proposta ou dar continuidade à contratação solicitada.</p></LegalSection>
          <LegalSection title="6. Solicitação de exclusão"><p>O visitante pode solicitar a exclusão de dados mantidos em conversas, registros comerciais ou propostas por meio do canal de contato divulgado nesta página.</p></LegalSection>
          <LegalSection title="7. Segurança e limitações"><p>São adotadas medidas razoáveis para reduzir exposição indevida. Nenhum serviço conectado à internet pode garantir risco zero, e o visitante deve evitar enviar senhas, dados bancários ou informações sensíveis pelo formulário.</p></LegalSection>
          <LegalSection title="8. Atualizações desta política"><p>Este texto pode ser atualizado para refletir mudanças na Landing Page, nas ferramentas utilizadas ou na forma de atendimento.</p></LegalSection>
          <p className="legal-note">Este texto é informativo e editável e não substitui uma revisão jurídica adequada ao modelo de operação definitivo.</p>
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
