/*
  META PIXEL — SITE SÃO BENTO
  1) Substitua COLE_SEU_PIXEL_ID_AQUI pelo ID numérico do Pixel.
  2) Este site dispara PageView, ViewContent e o evento personalizado CheckoutClick.
  3) Como o Pixel já está instalado na Cakto, deixe InitiateCheckout e Purchase para a Cakto.
*/
const META_PIXEL_ID = 'COLE_SEU_PIXEL_ID_AQUI';

(function(){
  if (!META_PIXEL_ID || META_PIXEL_ID === 'COLE_SEU_PIXEL_ID_AQUI') {
    console.info('[Meta Pixel] Configure o ID em pixel.js');
    return;
  }
  if (window.fbq) return;
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
    t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
  }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
  fbq('track','PageView');
  fbq('track','ViewContent',{content_name:'Grimório das 12 Palavras de São Bento',content_type:'product',value:37.00,currency:'BRL'});

  document.addEventListener('click', function(e){
    var a=e.target.closest('[data-track-checkout="1"]');
    if(!a) return;
    fbq('trackCustom','CheckoutClick',{content_name:'Grimório das 12 Palavras de São Bento',value:37.00,currency:'BRL'});
  });
})();
