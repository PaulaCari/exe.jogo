function jogar() {
  if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false) {
    alert("selecione uma opção");
  } else {
    var sorteio = Math.floor(Math.random() * 3);
    switch (sorteio) {
      case 0:
        document.getElementById("pc").src = "./assert/pedra.jpg";
        break;

      case 1:
        document.getElementById("pc").src = "./assert/papel.png";
        break;

      case 2:
        document.getElementById("pc").src = "./assert/tirousa.png";
        break;
    }
    if ((document.getElementById("pedra"). checked == true && sorteio == 0 ) 
    || (document.getElementById("papel").checked == true && sorteio == 1)
    || (document.getElementById("teroura").checked == true && sorteio == 2)){
      document.getElementById("placar").innerHTML="EMPATE";

      }else if ((document.getElementById("pedra"). checked == true && sorteio == 2) 
      || (document.getElementById("papel").checked == true && sorteio == 0)
      || (document.getElementById("teroura").checked == true && sorteio == 1)) {
        document.getElementById("placar").innerHTML="Jogador Venceu!!!";
      }else{
        document.getElementById("placar").innerHTML="computador venceu";
        
      }
    }
}

function reset() {
  document.getElementById("pc").src = "./assert/pc.jpg";   //troca a imagem do pc
  document.getElementById("placar").innerHTML = ""; //limpa o texto
}





