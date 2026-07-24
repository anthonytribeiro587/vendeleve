# VendeLeve — Landing Page

Landing Page comercial do **VendeLeve**, um sistema de gestão simples para consultoras, revendedoras e pequenas lojas.

## Tecnologias

- Next.js com App Router
- React
- TypeScript
- CSS global responsivo
- SEO com Metadata, Open Graph, sitemap, robots, manifest e JSON-LD

## Executar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

```env
NEXT_PUBLIC_SITE_URL=https://vendeleve.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=5551999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Conheci o VendeLeve e gostaria de agendar uma demonstração para minha loja.
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

O número do WhatsApp deve conter DDI + DDD + número, somente dígitos.

## Publicação na Vercel

1. Importe este repositório na Vercel.
2. Mantenha o framework detectado como Next.js.
3. Cadastre as variáveis do `.env.example` em **Settings > Environment Variables**.
4. Faça o deploy.
5. Atualize `NEXT_PUBLIC_SITE_URL` para o endereço real fornecido pela Vercel e redeploy uma vez para gerar canonical, sitemap e compartilhamento corretos.

## Estrutura principal

- `app/page.tsx`: página inicial
- `app/privacidade/page.tsx`: política de privacidade
- `app/termos/page.tsx`: termos de uso
- `components/`: seções reutilizáveis
- `lib/whatsapp.ts`: geração segura dos links do WhatsApp
- `public/brand/`: logo, ícone, favicon e Open Graph
- `public/commercial/`: materiais comerciais iniciais

## Materiais de marca incluídos

- `public/brand/logo-vendeleve.svg`
- `public/brand/icon-vendeleve.svg`
- `public/brand/favicon.svg`
- `app/opengraph-image.tsx` (imagem social gerada automaticamente)
- `public/commercial/post-vendeleve.svg`
- `public/commercial/story-vendeleve.svg`

## Condição comercial de lançamento

- Plano único: **R$ 100 por mês** para os primeiros 20 clientes.
- Implantação e configuração inicial: **a partir de R$ 500**.
- A contratação é confirmada pelo WhatsApp após demonstração e alinhamento.

## Conteúdo e escopo

A Landing Page apresenta apenas funções atualmente previstas no produto:

- clientes sem foto, representados por iniciais;
- produtos com foto e estoque;
- vendas à vista e parceladas;
- histórico de vendas;
- vencimentos;
- relatórios;
- pagamentos parciais;
- atalho para WhatsApp.

Não há promessa de IA, chatbot, nota fiscal, loja virtual, automação de WhatsApp ou integrações não implementadas.

## Observações antes de publicar

- Substitua o número fictício do `.env.example`.
- Confirme o endereço final da Vercel.
- Preencha Instagram e e-mail somente quando definidos.
- Revise os textos de Política de Privacidade e Termos de Uso com apoio jurídico antes de tratá-los como documentos contratuais definitivos.
