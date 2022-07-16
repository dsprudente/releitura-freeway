//variáveis dos pontos
let ponto = 0;
let bateu = false;

function pontos(){
  marcouPonto();
  perdeuPonto();
  mostrarPontos();
}

function marcouPonto(){
  if(yAtor1 < 10){
    ponto += 1;
    pontoPraGrifinoria.play();
    yAtor1 = 558;
    bateu = false;
  }
}

function perdeuPonto(){
  if(bateu === true){
    if(ponto <= 0){
      ponto -= 1;
      bateu = false;
      } else{
          ponto = 0;
          bateu = false;
      }
  }
}

function mostrarPontos(){
  fill(255);
  textSize(32)
  text(ponto,120,38);
}