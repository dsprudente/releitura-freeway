//variáveis carros
let xC;            //coordenada x dos carros
let yC;            //coordenada y dos carros
let iC;            //imagem dos carros
let lC = 70;       //largura dos carros
let aC = 50;       //altura dos carros
let xCInicial = 810; //posição inicial dos carros

//lista de coordenadas x dos carros Carro1...Carro6
let xCarros = [xCInicial,xCInicial,xCInicial,xCInicial,xCInicial,xCInicial];

//lista de coordenadas y dos carros Carro1...Carro6
let yCarros = [65,150,230,320,400,485];

//lista de velocidades dos carros Carro1...Carro6
let velocidadesCarros = [3,9,4,5,6,4.5];

function carros(){
  carregaCarros();
  movimentaCarros();
}

function carregaCarros(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i],xCarros[i],yCarros[i],lC,aC);
  }
}

function movimentaCarros(){
  for(let i = 0; i < xCarros.length; i += 1){
    xCarros[i] -= velocidadesCarros[i];
    if(xCarros[i] + lC < 0){
      xCarros[i] = xCInicial;
    }
  }
}