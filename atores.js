//variáveis do ator 1
let xAtor1 = 180;
let yAtor1 = 558;
let larguraAtor1 = 30;
let alturaAtor1 = 30;

function atores(){
  mostraAtores();
  movimentaAtor1();
  colidiu();
}

function mostraAtores(){
  image(imagemAtor1,xAtor1,yAtor1,larguraAtor1,alturaAtor1);
}

function movimentaAtor1(){
  if(keyIsDown(UP_ARROW) && yAtor1 > 0){
    yAtor1 -= 4;
  } else if(keyIsDown(DOWN_ARROW) && yAtor1 < 558){
      yAtor1 += 4;
  }
}

function colidiu(){
  for(let i = 0; i < xCarros.length; i += 1){
    if(xAtor1 + larguraAtor1 > xCarros[i] && xAtor1 < xCarros[i] + lC && yAtor1 + alturaAtor1 > yCarros[i] && yAtor1 < yCarros[i] + aC){
      yAtor1 = 558;
      bateu = true;
    }
  }
}