
// baralho de cartas

alert("Baralho de cartas");

let baralhoDeCartas = ["Valete", "Dama", "Rei", "Coringa", "Espadas"]

let menu

do{
let menu = prompt("Baralho de cartas atual:" + baralhoDeCartas +
  "\n\n" + "Baralho de cartas novo:" +
  "\n\nEscolha as opções:" +
  "\n1. Adicionar Carta" +
  "\n2. Puxar uma carta" +
  "\n3. Sair" 
   )

  
  switch(menu) {
    case "1":
      let adicionarCarta = prompt("Qual carta quer adicionar?")
      baralhoDeCartas.push(adicionarCarta);
    alert(
      "Carta Nova:\n" +
       adicionarCarta + ">" + "foi adicionada ao baralho\n" +
      "Baralho de cartas atual:\n" +
      baralhoDeCartas
    )
    break

  
    case "2":
      let puxarCarta = prompt("Qual carta gostaria de puxar?")
      baralhoDeCartas.shift(puxarCarta);
      alert(
        "Carta retirada:\n" +
        puxarCarta + ">" + "foi retirada do baralho\n" +
        "Baralho de cartas atual:\n"  +
        baralhoDeCartas
      )
    break
   
    case "3" :
      alert("Encerrando")
      alert("Sistema encerrado")
      break

  }

} while(menu !== "3") {
   alert("Sistema encerrado")
   
}