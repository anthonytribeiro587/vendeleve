const questions = [
  ["Preciso instalar algum programa?", "Não. O VendeLeve funciona pelo navegador no celular, tablet ou computador."],
  ["Posso acessar pelo celular?", "Sim. O sistema possui interface responsiva para acompanhar a operação em diferentes tamanhos de tela."],
  ["O VendeLeve funciona para qualquer tipo de loja?", "Ele foi pensado principalmente para consultoras, revendedoras e pequenas lojas que trabalham com clientes, produtos, vendas e parcelas."],
  ["Posso controlar vendas parceladas?", "Sim. É possível registrar o número de parcelas, definir vencimentos e acompanhar o status de cada cobrança."],
  ["O sistema envia mensagens automaticamente?", "Não. O VendeLeve facilita o acesso ao WhatsApp e o compartilhamento de informações, mas não promete automações que ainda não estejam implementadas."],
  ["Meus dados ficam misturados com os de outras lojas?", "Não. Cada empresa possui seu próprio acesso e os dados são separados conforme a estrutura contratada."],
  ["Existe suporte?", "Sim. Os planos incluem suporte para utilização e correções do sistema, conforme as condições da contratação."],
  ["Posso solicitar novas funções?", "Sugestões podem ser avaliadas. Novos módulos, integrações e alterações estruturais podem ser orçados separadamente."],
];

export function FAQ() {
  return <section className="section faq-section" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><div className="section-heading"><span className="eyebrow">Informação clara antes da contratação</span><h2 id="faq-title">Dúvidas frequentes</h2><p>Estas respostas apresentam o funcionamento atual do VendeLeve sem prometer recursos futuros.</p></div><div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
