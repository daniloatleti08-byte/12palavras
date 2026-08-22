# Página São Bento — GitHub + Vercel

## Publicar
1. Crie um repositório no GitHub.
2. Envie **todos** os arquivos e a pasta `assets/` mantendo a estrutura.
3. No Vercel, importe o repositório.
4. Framework Preset: **Other** (ou deixe o Vercel detectar como site estático).
5. Não é necessário comando de build.
6. Deploy.

## Meta Pixel
Abra `pixel.js` e substitua:

```js
const META_PIXEL_ID = 'COLE_SEU_PIXEL_ID_AQUI';
```

pelo ID do seu Pixel.

Eventos no site:
- PageView
- ViewContent
- CheckoutClick (evento personalizado ao clicar no checkout)

A Cakto fica responsável por InitiateCheckout e Purchase, evitando duplicação.

## Checkout
O checkout configurado no HTML é:
`https://pay.cakto.com.br/u8gq2a4_755862`

## Imagens
As imagens em `assets/` são prévias visuais locais criadas para que o projeto publique sem links quebrados. Se você tiver as artes oficiais do produto, basta substituir os arquivos mantendo exatamente os mesmos nomes.
