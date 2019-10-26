let imagem = document.getElementById('troca')
let etapas = 1;
let cont = 0;

setInterval(() => {
   if (etapas == 1) {
      imagem.src = './image/chara-2.png';
   }
   if (etapas == 2) {
      imagem.src = './image/chara-3.png';
   }
   if (etapas == 3) {
      imagem.src = './image/chara-1.png';
      etapas -= 3;
   }
   etapas += 1;
   cont += 7;
   imagem.style.marginLeft = `${cont}px`;
}, 300)

