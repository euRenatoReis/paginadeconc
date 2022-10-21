
const ident = document.getElementsByClassName(".botaomenu");
const menuoculto = document.getElementsByClassName(".menuescondido");
const estadon = menuescondido.classList.includes("flex");
const estadof = menuescondido.classList.includes("hidden");
const interruptor = false;

const myJSON = JSON.stringify(menuescondido.getData());

if(estadon === true)
   {     
     interruptor = true;
   }
   
if(estadof === true)
  {
    interruptor = false;
  }
 
botaomenu.addEventListener("click", function(click) {
 menuescondido.forEach(function clickliga(){  
   
      

   console.log("clicou");

     estadon = true;

        if(interruptor === false)
          {
              menuescondido.classList.replace("hidden","true");

              return;
          }
 
        if(interruptor === true)
          {
              menuescondido.classList.replace("flex","hidden");

              return;
          }

          if(click)
          {

            estadof();
          }
        
   })

})

  


  
/* 

   OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

   - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

   - passo 2 - dar um jeito de identificar o clique no elemento da aba

 	- passo 3 - quando o usuário clicar, desmarcar a aba selecionada

	- passo 4 - marcar a aba clicada como selecionado

	- passo 5 - esconder o conteúdo anterior

	- passo 6 - mostrar o conteúdo da aba selecionada



// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".botaomenu");

abas.forEach(botao => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    botaomenu.addEventListener("click", function() {

        if(botaomenu.classList.contains("selecionado")){
            return;
        }

        selecionarAba(botaomenu);
        mostrarInformacoesDaAba(botaomenu);
    });
});

function selecionarAba(botaomenu) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".botaomenu .selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicada como selecionado
    botaomenu.classList.add("selecionado");
}

function mostrarInformacoesDaAba(botaomenu){
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${botaomenu.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}
*/