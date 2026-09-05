# Página São Bento — GitHub + Vercel

## Publicar
1. Crie um repositório no GitHub.
2. Envie **todos** os arquivos e a pasta `assets/` mantendo a estrutura.
3. No Vercel, importe o repositório.
4. Framework Preset: **Other** (ou deixe o Vercel detectar como site estático).
5. Não é necessário comando de build.
6. Deploy.


## Checkout
O checkout configurado no HTML é:
`https://pay.cakto.com.br/u8gq2a4_755862`

## Imagens
As imagens em `assets/` são prévias visuais locais criadas para que o projeto publique sem links quebrados. Se você tiver as artes oficiais do produto, basta substituir os arquivos mantendo exatamente os mesmos nomes.


## Meta Pixel
O Pixel agora está instalado diretamente no `index.html` para evitar cache do arquivo externo.

1. Abra `index.html`.
2. Pesquise por `META_PIXEL_ID`.
3. Troque `COLE_SEU_PIXEL_ID_AQUI` pelo ID numérico do seu Pixel. Existe apenas um campo para alterar.
4. Faça commit/push e aguarde o novo deploy da Vercel.
5. Teste em janela anônima e sem bloqueador de anúncios.

Eventos do site: `PageView`, `ViewContent` e `CheckoutClick`.
A Cakto continua responsável por `InitiateCheckout` e `Purchase`.


Atualização V4.1: vídeo da primeira dobra em proporção vertical 9:16, otimizado para mobile.


V4.3: removido o CTA que ficava imediatamente abaixo do vídeo da primeira dobra. Os demais CTAs da página permanecem apontando para o checkout.
