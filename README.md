# SILLAGE - Site de Curadoria de Perfumes Premium

## 🎯 Sobre o Projeto

Site profissional desenvolvido para conversão de agendamentos de demonstrações presenciais de perfumes em Curitiba e região metropolitana.

**Objetivo Principal:** Agendar visitas domiciliares para demonstração de fragrâncias premium inspiradas.

## ✨ Características

- **Design Premium:** Estética sofisticada com paleta de cores elegante (preto, dourado, grafite)
- **Copywriting Persuasivo:** Textos focados em conversão e conexão emocional
- **Responsivo:** Otimizado para desktop, tablet e mobile
- **Performance:** Carregamento rápido e animações suaves
- **SEO Otimizado:** Meta tags e estrutura semântica
- **Foco Local:** Direcionado para público de Curitiba e região

## 📁 Estrutura de Arquivos

```
sillage-website/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── README.md           # Este arquivo
└── assets/
    └── images/
        ├── hero-image.png           # Imagem hero (pessoa sentindo perfume)
        └── perfume-collection.png   # Coleção de perfumes (flat lay)
```

## 🚀 Como Usar

### 1. Configurar Número do WhatsApp

**IMPORTANTE:** Antes de publicar, edite o arquivo `script.js` e altere o número do WhatsApp:

```javascript
const WHATSAPP_NUMBER = '5541999999999'; // Substitua pelo seu número
```

**Formato:** Código do país (55) + DDD (41) + Número (sem espaços ou caracteres especiais)

Exemplo: `5541987654321`

### 2. Personalizar Informações

Edite o arquivo `index.html` para personalizar:

- Seu nome no texto de apresentação (linha ~30)
- Bairros nos depoimentos (se desejar)
- Ano no rodapé (se necessário)

### 3. Testar Localmente

Abra o arquivo `index.html` em qualquer navegador moderno. Não é necessário servidor local.

### 4. Publicar Online

Você pode hospedar este site em:

- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- Qualquer serviço de hospedagem web

## 🎨 Paleta de Cores

- **Preto Profundo:** `#0A0A0A` - Sofisticação
- **Dourado Champagne:** `#D4AF37` - Luxo discreto
- **Cinza Grafite:** `#2C2C2C` - Modernidade
- **Bege Claro:** `#F5F1E8` - Elegância clean

## 📱 Funcionalidades

### Seções do Site

1. **Hero:** Apresentação impactante com CTA principal
2. **Problema & Solução:** Conexão emocional e benefícios
3. **Como Funciona:** 3 passos simples para agendar
4. **Depoimentos:** Prova social de clientes locais
5. **CTA Final:** Última chamada para conversão
6. **Rodapé:** Informações e branding

### Interatividade

- Animações de fade-in ao rolar a página
- Efeito parallax no hero
- Hover effects nos botões e cards
- Barra de progresso de scroll
- Scroll suave entre seções

## 🔧 Customizações Futuras

### Adicionar Google Analytics

No `<head>` do `index.html`, adicione:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adicionar Facebook Pixel

No `<head>` do `index.html`, adicione o código do pixel fornecido pelo Facebook.

### Adicionar Mais Produtos

Edite a seção de catálogo no `index.html` para incluir mais fragrâncias.

## 📊 Métricas de Conversão

Para acompanhar o desempenho do site, monitore:

- Taxa de cliques nos CTAs (WhatsApp)
- Tempo médio na página
- Taxa de rejeição
- Origem do tráfego (orgânico, redes sociais, anúncios)

## 🎯 Estratégia de Marketing

### Tráfego Recomendado

1. **Google Ads:** Palavras-chave locais ("perfumes curitiba", "perfumes em casa")
2. **Facebook/Instagram Ads:** Segmentação por localização (Curitiba e região)
3. **SEO Local:** Otimização para buscas locais
4. **Redes Sociais:** Instagram e Facebook com conteúdo visual

### Mensagem-Chave

"Demonstração gratuita em casa" + "Luxo acessível" + "Curitiba e região"

## 📞 Suporte

Para dúvidas sobre o site, consulte:

- HTML/CSS: [MDN Web Docs](https://developer.mozilla.org/)
- JavaScript: [JavaScript.info](https://javascript.info/)
- Hospedagem: Documentação do serviço escolhido

## 📝 Licença

Este site foi desenvolvido exclusivamente para uso comercial da marca SILLAGE.

---

**Desenvolvido com excelência para maximizar conversões e criar conexões autênticas com clientes em Curitiba.**
